import React,{useContext,useRef} from "react";
import {Formik,FormikHelpers} from "formik";
import * as Yup from "yup";
import {TextInput} from "../common/FormInputs/TextInput/TextInput";
import {addFile} from "../../utils/API_files";

import "./JobFileAddingForm.css"
import {useParams} from "react-router-dom";
import {ToastContext} from "../../Context/ToastContext";

const fileTypes = [
    "application/pdf",
    "application/msword"
]

const fileSize = 3145728;

// interface Props {
//     fileName: string | null;
// }


export const JobFileAddingForm = () => {
    const fileRef = useRef(null);
    const {updateToast} = useContext(ToastContext)
    const {id} = useParams()

    return (

        <div className="add-files-box">
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
                    fileName: Yup.string()
                        .required("Pole wymagane")
                        .min(3,"Nazwa nie może być krótsza niż 3 znaki")
                        .max(20,"Nazwa nie może być dłuższa niż 20 znaków")
                })}
                onSubmit={
                    async (
                        values: any,
                        {setSubmitting}: FormikHelpers<any>
                    ) => {

                        if (fileRef.current && id) {
                            const fileList: any = fileRef.current

                            const res = await addFile(fileList.files[0],values.fileName,id)
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
                            <TextInput label="Dodaj nowy plik" name="fileName" type="text"
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
    )
}