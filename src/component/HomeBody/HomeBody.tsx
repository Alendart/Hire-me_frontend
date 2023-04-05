import React,{useContext} from "react";
import {Btn} from "../common/Btn/Btn";
import {ModalShowContext} from "../../Context/ModalShowContext";


export const HomeBody = () => {
    const {updateModalData} = useContext(ModalShowContext);

    return (
        <div className="app_body">
            <h2>Witaj w Hire me!</h2>
            <div>To bezpłatna aplikacja do zarządzania swoimi wysłanymi aplikacjami o pracę</div>
            <div>
                Po zalogowaniu będziesz mógł przeglądać wszystkie ogłoszenia na które wysłałeś aplikację, a także:
                <ul>
                    <li>Sprawdzić treść ogłoszenia</li>
                    <li>Znaleźć dokładny adres na mapie</li>
                    <li>Sprawdzić aktualny status ogłoszenia</li>
                    <li>Podejrzeć jakie CV wysłałeś do konkretnego ogłoszenia</li>
                    <li>Archiwizować stare ogłoszenia</li>
                </ul>
                <Btn name="Zaloguj / Utwórz konto" class="" function={() => updateModalData("AccountPopup")}/>
            </div>
            <div>Zacznij korzystanie już dziś i załóż bezpłatne konto</div>
        </div>
    )
}