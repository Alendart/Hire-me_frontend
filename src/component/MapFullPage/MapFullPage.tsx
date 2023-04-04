import React,{useContext,useEffect,useState} from "react";

import "./MapFullPage.css";
import "../../utils/fix-map-icon"
import 'leaflet/dist/leaflet.css'
import {MapContainer,Marker,Popup,TileLayer} from "react-leaflet";
import {AuthUserContext} from "../../Context/AuthUserContext";
import {NavLink,useNavigate} from "react-router-dom";
import {listAllActiveJobsWithMapData} from "../../utils/API_job";
import {ToastContext} from "../../Context/ToastContext";
import {MapJobEntity} from "types";


export const MapFullPage = () => {
    const [markerList,setMarkerList] = useState<MapJobEntity[]>([]);
    const {updateToast} = useContext(ToastContext);
    const {user} = useContext(AuthUserContext);
    const navigate = useNavigate();


    useEffect(() => {
        (async () => {
            if (user === null) {
                navigate('/home');
            } else {
                const jobList = await listAllActiveJobsWithMapData()
                if (jobList.err) {
                    updateToast({
                        class: "error",
                        title: "Błąd",
                        description: jobList.err
                    })
                    navigate('/home');
                } else if (jobList instanceof Error) {
                    updateToast({
                        class: "error",
                        title: "Błąd",
                        description: "Wewnętrzny błąd serwisu, proszę spróbować ponownie"
                    })
                    navigate('/home');
                } else {
                    setMarkerList(jobList);
                }
            }

        })()

    },[user])


    return (
        <>
            {
                markerList[0] ?
                    <div className="map-view-box">
                        <MapContainer center={[markerList[0].lat,markerList[0].lon]} zoom={12} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {
                                markerList.map(e => (
                                    <Marker key={e.id} position={[e.lat,e.lon]}>
                                        <Popup>
                                            <NavLink to={`/apply/${e.id}`}><strong>{e.jobName}</strong></NavLink>
                                            <br/>
                                            <p><strong>Status zgłoszenia:</strong><br/>{e.jobStatus}</p>
                                            <p><strong>Adres firmy:</strong><br/>{e.address}</p>
                                            <a href={e.url} target="_blank" rel="noreferrer">LINK</a>
                                        </Popup>
                                    </Marker>
                                ))
                            }
                        </MapContainer>
                    </div>
                    :
                    null
            }
        </>
    )
}