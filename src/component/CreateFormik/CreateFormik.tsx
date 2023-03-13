import React, {useContext, useState} from "react";
import * as Yup from "yup";
import {Form, Formik, FormikHelpers} from "formik";
import {createUser} from "../../utils/API_account";
import {LoginCreateForm} from "../LoginCreateForm/LoginCreateForm";
import {Spinner} from "../common/Spinner/Spinner";
import {ToastContext} from "../../Context/ToastContext";

interface CreateValues {
    login: string;
    pwd: string;
    pwd2: string;
}

interface Props {
    handler: () => any;
}

export const CreateFormik = (props: Props) => {
    const {updateToast} = useContext(ToastContext);
    const [loading, setLoading] = useState(false);

    if (loading) {
        return <Spinner/>
    }

    return (
        <>
            <Formik
                initialValues={{
                    login: '',
                    pwd: '',
                    pwd2: '',
                }}
                validationSchema={Yup.object({
                    login: Yup.string()
                        .required("Pole wymagane")
                        .min(4, "Login musi mieć więcej niż 4 znaki")
                        .max(20, "Login musi mieć mniej niż 21 znaków"),
                    pwd: Yup.string()
                        .required("Pole wymagane")
                        .min(4, "Hasło musi mieć więcej niż 4 znaki")
                        .max(12, "Hasło musi mieć mniej niż 13 znaków"),
                    pwd2: Yup.string()
                        .required("Pole wymagane")
                        .min(4, "Hasło musi mieć więcej niż 4 znaki")
                        .max(12, "Hasło musi mieć mniej niż 13 znaków")
                        .oneOf([Yup.ref("pwd"), ""], "Hasła nie są takie same"),
                })}
                onSubmit={(
                    values: CreateValues,
                    {setSubmitting}: FormikHelpers<CreateValues>
                ) => {
                    setLoading(true);
                    const submit = async () => {
                        const newUserId = await createUser(values.login, values.pwd);
                        if (typeof newUserId === "string") {
                            updateToast({
                                class: "check",
                                title: "Konto utworzone!",
                                description: "Pomyślnie utworzono nowe konto, możesz się teraz zalogować"
                            });
                        } else {
                            updateToast({
                                class: "error",
                                title: "Błąd",
                                description: newUserId.err,
                            });
                        }

                        setLoading(false);
                        setSubmitting(false);

                    }

                    submit();
                }}
            >
                <Form className="login-form">
                    <LoginCreateForm type="create"/>
                    <div className="login-footer">
                        <button
                            className="btn-switch"
                            type="button"
                            onClick={() => props.handler()}
                        >
                            Logowanie
                        </button>
                        <button
                            className="btn-login-submit"
                            type="submit"
                        >
                            Zarejestruj
                        </button>

                    </div>
                </Form>
            </Formik>
        </>
    )
}