import React from "react";

import logo from "./Hire_me_logo.png"
import "./Main.css"

export const Main = () => {


    return (
        <>
            <header className="header-image">
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
                <h2>Firmy do których wysłano CV:</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Nazwa firmy</th>
                        <th>Szczegóły</th>
                        <th>Status</th>
                        <th>Cross</th>
                        <th>Check</th>
                    </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                </table>
            </div>
            <hr/>
            <footer>
                <div>
                    <h3>Ostatnio zarchiwizowane zgłoszenia:</h3>
                    <table>
                        <tbody>
                        <tr>
                            <td>Łzy i śmiech</td>
                            <td>Status</td>
                            <td>
                                <button>Przywróć</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <button>Przejdź do archiwum</button>
                    <p>Image by <a
                        href="https://www.freepik.com/free-vector/flat-design-polygonal-background_13264338.htm#query=background%20geometric%20green&position=1&from_view=search&track=ais">Freepik</a>
                    </p>
                </div>
            </footer>
        </>
    )

}