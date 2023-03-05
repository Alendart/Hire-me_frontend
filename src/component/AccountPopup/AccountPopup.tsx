import React, {useState} from "react";
import {Form, Formik, FormikHelpers} from "formik";
import * as Yup from "yup"

import "./AccountPopup.css"
import {LoginCreateForm} from "../LoginCreateForm/LoginCreateForm";

interface CreateValues {
    login: string;
    pwd: string;
    pwd2: string;
}

interface LoginValues {
    login: string;
    pwd: string;
    pwd2?: string;
}

export const AccountPopup = () => {
    const [change, setChange] = useState(true)

    const changeHandler = () => {
        setChange(!change)
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
                    login: Yup.string().required("Pole wymagane"),
                    pwd: Yup.string().required("Pole wymagane"),
                    pwd2: Yup.string().required("Pole wymagane"),
                })}
                onSubmit={(
                    values: CreateValues,
                    {setSubmitting}: FormikHelpers<CreateValues>
                ) => {
                    setTimeout(() => {
                        if (change) {
                            const val: LoginValues = {...values}
                            delete val.pwd2
                            alert(JSON.stringify(val, null, 2))
                            setSubmitting(false);
                        } else {
                            alert(JSON.stringify(values, null, 2))
                            setSubmitting(false);
                        }
                    }, 500)
                }}
            >
                <Form className="login-form">
                    <LoginCreateForm type={change ? "login" : "create"}/>
                    <div className="login-footer">
                        <button
                            className="btn-switch"
                            type="button"
                            onClick={changeHandler}
                        >
                            {change ? "Utwórz konto" : "Zaloguj"}
                        </button>
                        <button
                            className="btn-login-submit"
                            type="submit"
                        >
                            {change ? "Zaloguj" : "Zarejestruj"}
                        </button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

