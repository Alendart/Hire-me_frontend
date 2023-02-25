import React from "react";

import logo from "./Hire_me_v2.png"
import "./Main.css"

export const Main = () => {


    return (
        <>
            <header>
                <div className="header_content">
                    <img src={logo} alt="logo"/>
                    <button>Dodaj nową pozycję</button>
                    <div className="button_set">
                        <button>Zmiana widoku</button>
                        <button>Konto</button>
                    </div>
                </div>
            </header>
            <div className="app_body">
                <table>
                    <tr>
                        <td>Wyższa szkoła marketingu</td>
                        <td>
                            <button>Szczegóły</button>
                        </td>
                        <td>Status</td>
                        <td>❌</td>
                        <td>✔</td>
                    </tr>
                    <tr>
                        <td>Szkoła baletu</td>
                        <td>
                            <button>Szczegóły</button>
                        </td>
                        <td>Status</td>
                        <td>❌</td>
                        <td>✔</td>
                    </tr>
                    <tr>
                        <td>Poważna praca xD</td>
                        <td>
                            <button>Szczegóły</button>
                        </td>
                        <td>Status</td>
                        <td>❌</td>
                        <td>✔</td>
                    </tr>
                    <tr>
                        <td>Janusz.exe</td>
                        <td>
                            <button>Szczegóły</button>
                        </td>
                        <td>Status</td>
                        <td>❌</td>
                        <td>✔</td>
                    </tr>
                    <tr>
                        <td>Śmiech i łzy</td>
                        <td>
                            <button>Szczegóły</button>
                        </td>
                        <td>Status</td>
                        <td>❌</td>
                        <td>✔</td>
                    </tr>
                </table>
            </div>
            <footer>
                <button>Archiwum</button>
            </footer>
        </>
    )

}