import React from "react";
import {TextInput} from "../common/FormInputs/TextInput/TextInput";
import {TextAreaInput} from "../common/FormInputs/TextAreaInput/TextAreaInput";

export const JobAddForm = () => (
    <>
        <TextInput
            label="Nazwa ogłoszenia"
            name="jobName"
            type="text"
            placeholder="Podaj nazwę ogłoszenia..."
        />
        <TextAreaInput
            label="Opis ogłoszenia"
            name="jobDesc"
            rows={1}
            placeholder="Tutaj możesz wkleić treść ogłoszenia..."
        />
        <TextInput
            label="Link do ogłoszenia"
            name="url"
            type="text"
            placeholder="Podaj link..."
        />
        <TextInput
            label="Adres firmy"
            name="address"
            type="text"
            placeholder="np. Poznań, Towarowa 5"
        />

    </>
)