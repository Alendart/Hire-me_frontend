import React, {useContext, useState} from "react";
import * as Yup from "yup";
import {Form, Formik, FormikHelpers} from "formik";
import {NewJobEntity} from "types";
import {JobAddForm} from "../JobAddForm/JobAddForm";

import "./JobFormik.css"
import {Select} from "../common/FormInputs/Select/Select";
import {geoCoding} from "../../utils/API_geoCoding";
import {ToastContext} from "../../Context/ToastContext";

interface JobValues extends Omit<NewJobEntity, "lat" | "lon" | "userId" | "fileName"> {
    addressSelect: string;
}

export const JobFormik = () => {
    const [data, setData] = useState<string[][]>([])
    const {updateToast} = useContext(ToastContext)

    return (
        <>
            <Formik
                initialValues={
                    {
                        jobName: '',
                        jobDesc: '',
                        url: '',
                        address: '',
                        addressSelect: '',
                    }}
                validationSchema={Yup.object({
                    jobName: Yup.string()
                        .required("Pole wymagane")
                        .min(5, "Nazwa musi mieć minimum 5 znaków")
                        .max(30, "Nazwa nie może mieć więcej niż 30 znaków"),
                    jobDesc: Yup.string()
                        .required("Pole wymagane")
                        .min(1, "Opis nie może być pusty")
                        .max(10000, "Opis nie może przekraczać 10 tysięcy znaków"),
                    url: Yup.string()
                        .required("Pole wymagane")
                        .max(200, "Url nie może mieć więcej niż 200 znaków"),
                    address: Yup.string()
                        .required("Pole wymagane")
                        .max(100, "Adres nie może mieć więcej niż 100 znaków"),

                })}
                onSubmit={async (
                    values: JobValues,
                    {setSubmitting}: FormikHelpers<JobValues>
                ) => {
                    const downloadGeodata = async () => {
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
                    if (chooseAddress) {
                        if (!values.addressSelect[0]) {
                            updateToast({
                                class: "warning",
                                title: "Wskaż adres",
                                description: "Musisz wybrać dokładny adres"
                            })
                        } else {
                            console.log(JSON.stringify(values, null, 2));
                            updateToast({
                                class: "check",
                                title: "Dodano ofertę",
                                description: "Poprawnie dodano kolejną ofertę o pracę"
                            })

                        }
                    }


                }}
            >
                <Form>
                    <JobAddForm/>
                    <Select label="Wybierz właściwy adres" name="addressSelect" disabled={!data[0]}>
                        <option value="">Wpisz adres powyżej żeby wybrać właściwą lokalizację</option>
                        {
                            data[0] ?
                                data.map(e => <option value={`${e[1]}|${e[2]}`}>{e[0]}</option>)
                                :
                                null
                        }
                    </Select>
                    <div className="job-footer">
                        <button
                            className="job-submit"
                            type="submit"
                        >
                            Dodaj nową ofertę pracy
                        </button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}