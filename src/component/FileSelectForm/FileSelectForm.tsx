import React,{useContext,useEffect,useState} from "react";
import {Form,Formik,FormikHelpers} from "formik";
import * as Yup from "yup"

import "./FileSelectForm.css"
import {chooseSelectedFile,listAllFiles} from "../../utils/API_files";
import {Select} from "../common/FormInputs/Select/Select";
import {useParams} from "react-router-dom";
import {ToastContext} from "../../Context/ToastContext";
import {SubmitBtn} from "../common/SubmitBtn/SubmitBtn";

interface SelectValues {
    fileSelect: string
}

export const FileSelectForm = () => {
    const [selectData,setSelectData] = useState<string[]>([]);
    const {updateToast} = useContext(ToastContext);
    const {id} = useParams();

    useEffect(() => {
        (async () => {
            const res = await listAllFiles();
            if (res && typeof res[0] === "string") {
                setSelectData(res);
            }
        })()

    },[])


    return (
        <div className="select-file-box">
            <
                Formik
                initialValues={{
                    fileSelect: "",
                }}
                validationSchema={Yup.object({
                    fileSelect: Yup.string()
                        .required("Należy wybrać plik")
                })}
                onSubmit={
                    async (
                        values: SelectValues,
                        {setSubmitting}: FormikHelpers<SelectValues>
                    ) => {
                        if (id) {
                            const res = await chooseSelectedFile(id,values.fileSelect)
                            if (res === true) {
                                updateToast({
                                    class: "check",
                                    title: "Załączono CV",
                                    description: "Poprawnie załączono plik pod zgłoszenie"
                                });
                            } else if (res.err) {
                                updateToast({
                                    class: "error",
                                    title: "Błąd",
                                    description: res.err
                                })
                            } else {
                                updateToast({
                                    class: "error",
                                    title: "Błąd",
                                    description: "Wewnętrzny błąd serwisu, proszę spróbować ponownie później"
                                })
                            }
                            setSubmitting(false);
                        }

                    }
                }
            >
                <Form>
                    <Select label="Wybierz jeden z istniejących plików" name="fileSelect">
                        <option value="">Dostępne pliki CV...</option>
                        {
                            selectData ?
                                selectData.map((e,i) => <option key={i} value={e}>{e}</option>)
                                : null
                        }
                    </Select>
                    <div className="file-footer">
                        <SubmitBtn name="Wybierz" class="file"/>
                    </div>
                </Form>
            </Formik>
        </div>
    )

}