import React,{useContext,useEffect,useState} from "react";

import "./Main.css"
import {CompanyListTable} from "../CompanyListTable/CompanyListTable";
import {TableJobEntity} from "types";
import {Spinner} from "../common/Spinner/Spinner";
import {listAllActiveJobs} from "../../utils/API_job";
import {ToastContext} from "../../Context/ToastContext";
import {MainRefreshContext} from "../../Context/MainRefreshContext";


export const Main = () => {
    const {updateToast} = useContext(ToastContext);
    const {mainRefresh} = useContext(MainRefreshContext);
    const [list,setList] = useState<TableJobEntity[]>([]);
    const [blank,setBlank] = useState<boolean>(false);
    const [loading,setLoading] = useState<boolean>(false);

    useEffect(() => {

        (async () => {
            setLoading(true);
            setBlank(false);
            const res = await listAllActiveJobs();
            if (res) {
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
            } else {
                setBlank(true);
            }
            setLoading(false);
        })()

    },[mainRefresh])

    if (loading) {
        return <Spinner/>
    }

    return (
        <>
            {
                blank ?
                    <p>Jeszcze nie ma tu nic do wyświetlenia...</p>
                    :
                    <div className="app_body">
                        <div className="table-box">
                            <h2>Firmy do których wysłano CV:</h2>
                            <CompanyListTable list={list}/>
                        </div>
                    </div>

            }
        </>
    )

}