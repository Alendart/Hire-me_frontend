import React,{useContext,useEffect,useState} from "react";

import {Form,Formik,FormikHelpers} from "formik";
import * as Yup from "yup"
import {Select} from "../common/FormInputs/Select/Select";
import {SubmitBtn} from "../common/SubmitBtn/SubmitBtn";


import "./JobStatusSelectForm.css"
import {updateJobStatus} from "../../utils/API_job";
import {applicationStatus,applicationStatusString} from "types";
import {ToastContext} from "../../Context/ToastContext";
import {JobRefreshContext} from "../../Context/JobRefreshContext";
import {ModalShowContext} from "../../Context/ModalShowContext";
import {MainRefreshContext} from "../../Context/MainRefreshContext";

interface SelectValue {
    status: applicationStatusString;
}

interface Props {
    id: string;
}

export const JobStatusSelectForm = (props: Props) => {
    const {updateToast} = useContext(ToastContext)
    const {updateModalData} = useContext(ModalShowContext);
    const {updateJobRefresh} = useContext(JobRefreshContext);
    const {updateMainRefresh} = useContext(MainRefreshContext);
    const [data,setData] = useState<string[]>(['']);
    const [value,setValue] = useState<string[]>([''])

    useEffect(() => {
        const keys = Object.keys(applicationStatus);
        const values = Object.values(applicationStatus);
        setData(keys);
        setValue(values);
    },[])

    return (
        <>
            <
                Formik
                initialValues={{
                    status: "Prepared",
                }}
                validationSchema={Yup.object({
                    status: Yup.string()
                        .required("Pole wymagane")
                        .oneOf(data),
                })}
                onSubmit={
                    async (
                        values: SelectValue,
                        {setSubmitting}: FormikHelpers<SelectValue>
                    ) => {
                        if (props.id) {
                            const res = await updateJobStatus(values.status,props.id)
                            if (res === true) {
                                updateToast({
                                    class: "check",
                                    title: "Zrobione",
                                    description: "Poprawnie zmieniono status",
                                });
                                updateJobRefresh();
                                updateMainRefresh();
                                updateModalData();
                            } else if (res.err) {
                                updateToast({
                                    class: "error",
                                    title: "Błąd",
                                    description: res.err,
                                })
                            } else {
                                updateToast({
                                    class: "error",
                                    title: "Błąd",
                                    description: "Wewnętrzny błąd serwisu, proszę spróbować ponownie"
                                })
                            }
                        }
                        setSubmitting(false);


                    }
                }
            >
                <Form>
                    <Select label="Nowy status" name="status">
                        <option value="">Wybierz nowy status...</option>
                        {
                            data[0] ?
                                data.map((e,i) => <option key={i} value={e}>{value[i]}</option>)
                                :
                                null
                        }
                    </Select>
                    <SubmitBtn name="Wybierz" class="status"/>
                </Form>
            </Formik>
        </>
    )
}