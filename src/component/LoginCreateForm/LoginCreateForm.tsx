import React from "react";
import {TextInput} from "../common/FormInputs/TextInput/TextInput";

import "./LoginCreateForm.css"

interface Props {
    type: "create" | "login"
}

export const LoginCreateForm = (props: Props) => {

    if (props.type === "create") {
        return (
            <>
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
                    placeholder="Wpisz tutaj swoje hasło... "
                />
                <TextInput
                    label="Powtórz hasło"
                    name="pwd2"
                    type="text"
                    placeholder="Powtórz hasło..."
                />
            </>
        )
    }
    if (props.type === "login") {
        return (
            <>
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
                    placeholder="Wpisz tutaj swoje hasło... "
                />
            </>
        )
    }

    return null

}