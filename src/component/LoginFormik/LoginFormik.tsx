import React,{useContext,useState} from "react";
import * as Yup from "yup";
import {Form,Formik,FormikHelpers} from "formik";
import {loginUser} from "../../utils/API_account";
import {LoginCreateForm} from "../LoginCreateForm/LoginCreateForm";
import {Spinner} from "../common/Spinner/Spinner";
import {ToastContext} from "../../Context/ToastContext";
import {Btn} from "../common/Btn/Btn";
import {SubmitBtn} from "../common/SubmitBtn/SubmitBtn";

interface LoginValues {
    login: string;
    pwd: string;
}

interface Props {
    handler: () => any;
}

export const LoginFormik = (props: Props) => {
    const {
        updateToast,
        updateToastWithValidation
    } = useContext(ToastContext)
    const [loading,setLoading] = useState(false);

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
                        const loggedIn = await loginUser(values.login,values.pwd);
                        if (loggedIn) {
                            updateToastWithValidation(
                                loggedIn,
                                `Witaj ${values.login}`,
                                "Poprawnie zalogowano do konta",
                            )
                        } else {

                            updateToast({
                                class: "warning",
                                title: "Dane niepoprawne",
                                description: "Login i/lub hasło są niepoprawne",
                            })
                        }
                    }
                    submit();

                    setLoading(false);
                    setSubmitting(false);
                }}
            >
                <Form className="login-form">
                    <LoginCreateForm type="login"/>
                    <div className="login-footer">
                        <SubmitBtn name="Zaloguj" class="login"/>
                        <Btn name="Utwórz konto" class="switch" function={props.handler}/>
                    </div>
                </Form>
            </Formik>
        </>
    )
}