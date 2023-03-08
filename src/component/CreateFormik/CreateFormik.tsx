import React, {useState} from "react";
import * as Yup from "yup";
import {Form, Formik, FormikHelpers} from "formik";
import {createUser, loginCheck} from "../../utils/API_account";
import {LoginCreateForm} from "../LoginCreateForm/LoginCreateForm";
import {Spinner} from "../common/Spinner/Spinner";

interface CreateValues {
    login: string;
    pwd: string;
    pwd2: string;
}

interface Props {
    handler: () => any;
}

export const CreateFormik = (props: Props) => {
    const [err, setErr] = useState("");
    const [message, setMessage] = useState("");
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
                        .min(1, "Hasło musi mieć więcej niż 4 znaki")
                        .max(12, "Hasło musi mieć mniej niż 13 znaków"),
                    pwd2: Yup.string()
                        .required("Pole wymagane")
                        .min(1, "Hasło musi mieć więcej niż 4 znaki")
                        .max(12, "Hasło musi mieć mniej niż 13 znaków")
                        .oneOf([Yup.ref("pwd"), ""], "Hasła nie są takie same"),
                })}
                onSubmit={(
                    values: CreateValues,
                    {setSubmitting}: FormikHelpers<CreateValues>
                ) => {
                    setErr('');
                    setLoading(true);
                    const submit = async () => {
                        const check = await loginCheck(values.login);
                        if (!check) {
                            setErr("Login jest już zajęty, proszę wybrać inny")
                        } else {
                            const newUserId = await createUser(values.login, values.pwd);
                            if (typeof newUserId === "string") {
                                setMessage("Pomyślnie utworzono konto, możesz się teraz zalogować")
                            } else {
                                setErr(newUserId.err)
                            }
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
                            Zaloguj
                        </button>
                        {err.length > 0 ? <div className="error">{err}</div> : null}
                        {message.length > 0 ? <div className="message">{message}</div> : null}
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