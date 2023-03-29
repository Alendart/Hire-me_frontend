import React,{useContext,useRef} from "react";
import {Formik,FormikHelpers} from "formik";
import * as Yup from "yup";
import {TextInput} from "../common/FormInputs/TextInput/TextInput";
import {addFile} from "../../utils/API_files";

import "./JobFiles.css"
import {useParams} from "react-router-dom";
import {ToastContext} from "../../Context/ToastContext";

const fileTypes = [
    "application/pdf",
    "application/msword"
]

const fileSize = 3145728;

interface Props {
    fileName: string | null;
}


export const JobFiles = (props: Props) => {
    const fileRef = useRef(null);
    const {updateToast} = useContext(ToastContext)
    const {id} = useParams()

    return (
        <div className="job job-files" id="files">
            <div className="files-box">
                <Formik
                    initialValues={{
                        file: '',
                        fileName: '',
                    }}
                    validationSchema={Yup.object({
                        file: Yup.mixed()
                            .required("Musisz załączyć CV!")
                            .test(
                                "fileFormat",
                                "Typ pliku niewspierany",
                                () => {
                                    const fileList: any = fileRef.current
                                    const singleFile = fileList.files[0];
                                    if (singleFile) {
                                        return fileTypes.includes(singleFile.type)
                                    } else {
                                        return true
                                    }
                                })
                            .test(
                                "fileSize",
                                "Plik jest zbyt duży",
                                () => {
                                    const fileList: any = fileRef.current
                                    const singleFile = fileList.files[0];
                                    if (singleFile) {
                                        return singleFile.size <= fileSize
                                    } else {
                                        return true
                                    }
                                }
                            ),
                    })}
                    onSubmit={
                        async (
                            values: any,
                            {setSubmitting}: FormikHelpers<any>
                        ) => {
                            console.log(id)
                            console.log(values)
                            console.log("Start wysyłki")
                            if (fileRef.current && id) {
                                const smth: any = fileRef.current
                                console.log("kompletuje dane")

                                console.log("Pliki",smth.files)
                                const res = await addFile(smth.files[0],values.fileName,id)
                                console.log("wszystko poszło",res)
                                if (res === true) {
                                    updateToast({
                                        class: "check",
                                        title: "Dodano CV",
                                        description: "CV zostało poprawnie dodane do zgłoszenia",
                                    })
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
                                        description: "Wewnętrzny błąd serwisu, proszę spróbować ponownie"
                                    })
                                }
                            } else {
                                updateToast({
                                    class: "error",
                                    title: "Błąd",
                                    description: "Wewnętrzny błąd serwisu, proszę spróbować ponownie"
                                })
                            }
                            setSubmitting(false);
                        }
                    }
                >
                    {
                        formik => (
                            <form onSubmit={formik.handleSubmit}>
                                <TextInput label="Nazwa pliku" name="fileName" type="text"
                                           placeholder="Wpisz nazwę dla pliku"/>
                                <input
                                    id="file"
                                    type="file"
                                    ref={fileRef}
                                    multiple={false}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.file}
                                />
                                {formik.touched.file && formik.errors.file ? (
                                    <div>{formik.errors.file}</div>
                                ) : null}
                                <button type="submit">Zapisz</button>
                            </form>
                        )
                    }
                </Formik>

            </div>
        </div>
    )
}