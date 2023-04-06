import React,{useContext,useEffect,useState} from "react";
import {ArchiveTable} from "../ArchiveTable/ArchiveTable";
import {TableJobEntity} from "types";


import "./Footer.css"
import {ToastContext} from "../../Context/ToastContext";
import {listLastArchiveJobs} from "../../utils/API_job";
import {Spinner} from "../common/Spinner/Spinner";
import {Btn} from "../common/Btn/Btn";
import {useNavigate} from "react-router-dom";
import {RefreshContext} from "../../Context/RefreshContext";


export const Footer = () => {
    const {updateToast} = useContext(ToastContext);
    const {refresh} = useContext(RefreshContext);
    const navigate = useNavigate();
    const [last,setLast] = useState<TableJobEntity[]>([]);
    const [blank,setBlank] = useState<boolean>(false);
    const [loading,setLoading] = useState<boolean>(false);

    useEffect(() => {

        (async () => {
            setLoading(true);
            setBlank(false);
            const res = await listLastArchiveJobs();
            if (res[0]) {
                if (res.err) {
                    updateToast({
                        class: "error",
                        title: "Błąd",
                        description: res.err,
                    })
                } else if (res instanceof Error) {
                    updateToast({
                        class: "error",
                        title: "Błąd",
                        description: "Wewnętrzny błąd serwisu, proszę spróbować ponownie"
                    })
                } else {
                    setLast(res);
                }
            } else {
                setBlank(true);
            }
            setLoading(false);
        })()

    },[refresh])

    if (loading) {
        return <Spinner/>
    }

    return (
        <footer>
            <div className="archive-footer">
                <h3>Ostatnio zarchiwizowane zgłoszenia:</h3>
                {
                    blank ?
                        <p className="archive-message">Niezarchiwizowano jeszcze żadnego ogłoszenia...</p>
                        :
                        <>
                            <ArchiveTable list={last}/>
                            <Btn name="Przejdź do archiwum" class="archive" function={() => navigate('/archive')}/>
                        </>

                }
            </div>
        </footer>
    )
}