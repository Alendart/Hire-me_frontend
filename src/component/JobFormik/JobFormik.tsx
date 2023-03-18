import React from "react";
import * as Yup from "yup";
import {Form, Formik, FormikHelpers} from "formik";
import {NewJobEntity} from "types";
import {JobAddForm} from "../JobAddForm/JobAddForm";

import "./JobFormik.css"

type JobValues = Omit<NewJobEntity, "lat" | "lon" | "userId" | "fileName">

export const JobFormik = () => (
    <>
        <Formik
            initialValues={
                {
                    jobName: '',
                    jobDesc: '',
                    url: '',
                    address: '',
                }}
            validationSchema={Yup.object({
                jobName: Yup.string()
                    .required("Pole wymagane")
                    .min(5, "Nazwa musi mieć minimum 5 znaków")
                    .max(30, "Nazwa nie może mieć więcej niż 30 znaków"),
                jobDesc: Yup.string()
                    .required("Pole wymagane")
                    .min(1, "Opis nie może być pusty")
                    .max(10000, "Opis nie może przekraczać 10 tysięcy znaków"),
                url: Yup.string()
                    .required("Pole wymagane")
                    .max(200, "Url nie może mieć więcej niż 200 znaków"),
                address: Yup.string()
                    .required("Pole wymagane")
                    .max(100, "Adres nie może mieć więcej niż 100 znaków")
            })}
            onSubmit={(
                values: JobValues,
                {setSubmitting}: FormikHelpers<JobValues>
            ) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form>
                <JobAddForm/>
                <div className="job-footer">
                    <button
                        className="job-submit"
                        type="submit"
                    >
                        Dodaj nową ofertę pracy
                    </button>
                </div>
            </Form>
        </Formik>
    </>
)