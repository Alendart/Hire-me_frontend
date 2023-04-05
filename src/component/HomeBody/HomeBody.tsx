import React,{useContext} from "react";
import {Btn} from "../common/Btn/Btn";
import {ModalShowContext} from "../../Context/ModalShowContext";

import "./HomeBody.css"

export const HomeBody = () => {
    const {updateModalData} = useContext(ModalShowContext);

    return (
        <div className="app_body home_body">
            <h2 className="home-title">Witaj w Hire me!</h2>
            <div>To bezpłatna aplikacja do zarządzania swoimi wysłanymi aplikacjami o pracę</div>
            <div className="home-content">
                Po zalogowaniu będziesz mógł przeglądać wszystkie ogłoszenia na które wysłałeś aplikację, a także:
                <ul>
                    <li>Sprawdzić treść ogłoszenia</li>
                    <li>Znaleźć dokładny adres na mapie</li>
                    <li>Sprawdzić aktualny status ogłoszenia</li>
                    <li>Podejrzeć jakie CV wysłałeś do konkretnego ogłoszenia</li>
                    <li>Archiwizować stare ogłoszenia</li>
                </ul>
                <p>Zacznij korzystanie już dziś i załóż bezpłatne konto</p>
                <Btn name="Zaloguj / Utwórz konto" class="" function={() => updateModalData("AccountPopup")}/>
            </div>

        </div>
    )
}