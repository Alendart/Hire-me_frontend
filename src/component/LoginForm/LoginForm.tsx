import React from "react";
import {Form, Formik, FormikHelpers} from "formik";
import {TextInput} from "../common/FormInputs/TextInput/TextInput";

interface Values {
    login: string;
    pwd: string;
}

export const LoginForm = () => (
    <>
        <Formik
            initialValues={{
                login: '',
                pwd: '',
            }}
            // validationSchema={{
            //     login: Yup.string().required("Wymagany"),
            //     pwd: Yup.string().required("Wymagany")
            // }}
            onSubmit={(
                values: Values,
                {setSubmitting}: FormikHelpers<Values>
            ) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    setSubmitting(false);
                }, 500)
            }}
        >
            <Form>
                <TextInput
                    label="Login"
                    name="login"
                    type="text"
                    placeholder="Wpisz tutaj swój login..."
                />
                <TextInput
                    label="Hasło"
                    name="pwd"
                    type="text"
                    placeholder="Wpisz tutaj swój hasło... "
                />
                <button type="submit">Zaloguj</button>
            </Form>
        </Formik>
    </>
)

