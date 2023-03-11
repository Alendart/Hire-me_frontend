import React, {useContext, useState} from "react";
import * as Yup from "yup";
import {Form, Formik, FormikHelpers} from "formik";
import {loginUser} from "../../utils/API_account";
import {LoginCreateForm} from "../LoginCreateForm/LoginCreateForm";
import {Spinner} from "../common/Spinner/Spinner";
import {ToastContext} from "../../Context/ToastContext";

interface LoginValues {
    login: string;
    pwd: string;
}

interface Props {
    handler: () => any;
}

export const LoginFormik = (props: Props) => {
    const {updateToast} = useContext(ToastContext)
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
                })}
                onSubmit={(
                    values: LoginValues,
                    {setSubmitting}: FormikHelpers<LoginValues>
                ) => {
                    setLoading(true);
                    const submit = async () => {
                        const loggedIn = await loginUser(values.login, values.pwd);
                        if (loggedIn) {
                            updateToast({
                                class: "check",
                                title: `Witaj ${values.login}`,
                                description: "Poprawnie zalogowano do konta"
                            })
                        } else {
                            updateToast({
                                class: "error",
                                title: "Wystąpił błąd",
                                description: "Dane do logowania są niepoprawne",
                            })
                        }

                        setLoading(false);
                        setSubmitting(false);
                    }

                    submit();

                }}
            >
                <Form className="login-form">
                    <LoginCreateForm type="login"/>
                    <div className="login-footer">
                        <button
                            className="btn-switch"
                            type="button"
                            onClick={() => props.handler()}
                        >
                            Utwórz konto
                        </button>
                        <button
                            className="btn-login-submit"
                            type="submit"
                        >
                            Zaloguj
                        </button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}