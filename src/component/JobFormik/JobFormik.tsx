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
                    .required("Pole wymagane"),
                jobDesc: Yup.string(),
                url: Yup.string()
                    .required("Pole wymagane"),
                address: Yup.string()
                    .required("Pole wymagane"),
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