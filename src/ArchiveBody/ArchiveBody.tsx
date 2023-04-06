import React,{useContext,useEffect,useState} from "react";
import {ArchiveTable} from "../component/ArchiveTable/ArchiveTable";
import {ToastContext} from "../Context/ToastContext";
import {RefreshContext} from "../Context/RefreshContext";
import {useNavigate} from "react-router-dom";
import {listAllArchiveJobs} from "../utils/API_job";
import {Spinner} from "../component/common/Spinner/Spinner";
import {TableJobEntity} from "types";
import {AuthUserContext} from "../Context/AuthUserContext";

import "./ArchiveBody.css"
import {Btn} from "../component/common/Btn/Btn";


export const ArchiveBody = () => {
    const {updateToast} = useContext(ToastContext);
    const {user} = useContext(AuthUserContext);
    const {refresh} = useContext(RefreshContext);
    const navigate = useNavigate();
    const [list,setList] = useState<TableJobEntity[]>([]);
    const [loading,setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (user.id === null) {
            navigate('/home')
        }
    },[user])

    useEffect(() => {

        (async () => {
            setLoading(true);
            const res = await listAllArchiveJobs()
            if (res === null) {
                updateToast({
                    class: "warning",
                    title: "Uwaga",
                    description: "Nie posiadasz jeszcze zarchiwizowanych zgłoszeń, zostałeś przekierowany z powrotem na główną stronę"
                })
                navigate('/');
            } else {
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
                    setList(res);
                }
            }
            setLoading(false);
        })()

    },[refresh])

    if (loading) {
        return <Spinner/>
    }


    return (
        <>
            <div className="app_body archive-body">
                <h2 className="archive-title">Zarchiwizowane ogłoszenia:</h2>
                <ArchiveTable list={list}/>
                <Btn name="Powrót" class="main-return" function={() => navigate('/')}/>
            </div>
        </>
    )
}