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
import {RefreshContext} from "../../Context/RefreshContext";

interface SelectValue {
    statusSelect: applicationStatusString;
}

interface Props {
    id: string;
}

export const JobStatusSelectForm = (props: Props) => {
    const {updateToast} = useContext(ToastContext)
    const {updateModalData} = useContext(ModalShowContext);
    const {updateJobRefresh} = useContext(JobRefreshContext);
    const {updateRefresh} = useContext(RefreshContext);
    const [key,setKey] = useState<string[]>(['']);
    const [value,setValue] = useState<string[]>([''])

    useEffect(() => {
        const keys = Object.keys(applicationStatus);
        const values = Object.values(applicationStatus);
        setKey(keys);
        setValue(values);
    },[])

    return (
        <>
            <
                Formik
                initialValues={{
                    statusSelect: "Prepared",
                }}
                validationSchema={Yup.object({
                    statusSelect: Yup.string()
                        .required("Pole wymagane")
                        .oneOf(key),
                })}
                onSubmit={
                    async (
                        values: SelectValue,
                        {setSubmitting}: FormikHelpers<SelectValue>
                    ) => {
                        if (props.id) {
                            const res = await updateJobStatus(values.statusSelect,props.id)
                            if (res === true) {
                                updateToast({
                                    class: "check",
                                    title: "Zrobione",
                                    description: "Poprawnie zmieniono status",
                                });
                                updateJobRefresh();
                                updateRefresh();
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
                    <Select label="Nowy status" name="statusSelect">
                        <option value="">Wybierz nowy status...</option>
                        {
                            key[0] ?
                                key.map((e,i) => <option key={i} value={e}>{value[i]}</option>)
                                :
                                null
                        }
                    </Select>
                    <div className="status-footer">
                        <SubmitBtn name="Wybierz" class="status"/>
                    </div>
                </Form>
            </Formik>
        </>
    )
}