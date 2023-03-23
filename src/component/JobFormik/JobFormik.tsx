import React,{useContext,useState} from "react";
import * as Yup from "yup";
import {Form,Formik,FormikHelpers} from "formik";
import {NewJobEntity} from "types";
import {JobAddForm} from "../JobAddForm/JobAddForm";

import "./JobFormik.css"
import {Select} from "../common/FormInputs/Select/Select";
import {geoCoding} from "../../utils/API_geoCoding";
import {ToastContext} from "../../Context/ToastContext";
import {createJob} from "../../utils/API_job";
import {Spinner} from "../common/Spinner/Spinner";
import {Navigate} from "react-router-dom";


interface JobFormValues extends Omit<NewJobEntity,"lat" | "lon" | "userId" | "fileName"> {
    addressSelect: string;
}

interface JobValues extends Omit<NewJobEntity,"lat" | "lon" | "userId" | "fileName"> {
    addressSelect?: string;
}

export const JobFormik = () => {
    const [data,setData] = useState<string[][]>([]);
    const [loading,setLoading] = useState<boolean>(false);
    const [newJob,setNewJob] = useState<string>('');
    const {updateToast} = useContext(ToastContext);

    if (newJob) {
        return <Navigate to={`/apply/${newJob}`}/>
    }

    return (<>
            <Formik
                initialValues={{
                    jobName: '',jobDesc: '',url: '',address: '',
                        addressSelect: '',
                    }}
                validationSchema={Yup.object({
                    jobName: Yup.string()
                        .required("Pole wymagane")
                        .min(5,"Nazwa musi mieć minimum 5 znaków")
                        .max(50,"Nazwa nie może mieć więcej niż 50 znaków"),
                    jobDesc: Yup.string()
                        .required("Pole wymagane")
                        .min(1,"Opis nie może być pusty")
                        .max(10000,"Opis nie może przekraczać 10 tysięcy znaków"),
                    url: Yup.string()
                        .required("Pole wymagane")
                        .max(200,"Url nie może mieć więcej niż 200 znaków"),
                    address: Yup.string()
                        .required("Pole wymagane")
                        .max(100,"Adres nie może mieć więcej niż 100 znaków"),
                    addressSelect: Yup.string(),
                })}
                onSubmit={async (values: JobFormValues,{setSubmitting}: FormikHelpers<JobFormValues>) => {

                    const downloadGeodata = async () => {
                        setLoading(true);
                        const res = await geoCoding(values.address)
                        if (res) {
                            setData(res)
                            return true
                        } else {
                            updateToast({
                                class: "error",
                                title: "Błąd",
                                description: "Nieznaleziono takiego adresu, proszę wpisać poprawny adres"
                            })
                            return false
                        }
                    }

                    const chooseAddress = await downloadGeodata();
                    setLoading(false);
                    if (chooseAddress) {
                        if (!values.addressSelect[0]) {
                            updateToast({
                                class: "warning",
                                title: "Wskaż adres",description: "Musisz wybrać dokładny adres z listy rozwijanej"
                            })
                        } else {
                            setLoading(true);
                            const geoData = values.addressSelect.split("|")
                            const val: JobValues = {...values}
                            delete val.addressSelect
                            const data = {
                                ...val,lat: parseFloat(geoData[0]),lon: parseFloat(geoData[1])
                            }
                            const id = await createJob(data);
                            setLoading(false);
                            if (typeof id === "string") {
                                updateToast({
                                    class: "check",
                                    title: "Dodano ofertę",
                                    description: `Poprawnie dodano kolejną ofertę o pracę o id ${id}`
                                })
                                setTimeout(() => setNewJob(id),2000);
                            } else if (id.err) {
                                updateToast({
                                    class: "error",title: "Błąd",description: id.err
                                })
                            } else {
                                updateToast({
                                    class: "error",
                                    title: "Błąd",
                                    description: "Wystąpił nieznany błąd, spróbuj ponownie później"
                                })
                            }
                            setSubmitting(false);
                        }
                    }

                }}
            >
                {loading ? <Spinner/> : <Form>
                    <JobAddForm/>
                    {data[0] ? <Select label="Wybierz właściwy adres" name="addressSelect" disabled={!data[0]}>
                        <option value="">Wybierz właściwą lokalizację</option>
                        {data.map(e => <option value={`${e[1]}|${e[2]}`}>{e[0]}</option>)}
                    </Select> : null}
                    <div className="job-footer">
                        <button
                            className="job-submit"
                            type="submit"
                        >
                            Dodaj nową ofertę pracy
                        </button>
                    </div>
                </Form>}
            </Formik>
        </>
    )
}