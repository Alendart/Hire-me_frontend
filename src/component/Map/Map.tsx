import React from "react";
import {MapContainer,Marker,Popup,TileLayer} from "react-leaflet";

import "./Map.css"
import "../../utils/fix-map-icon"
import 'leaflet/dist/leaflet.css'
import {applicationStatus} from "types";

interface Props {
    address: string;
    lat: number;
    lon: number;
    name: string;
    desc: string | applicationStatus;
    link: string;
}

export const Map = (props: Props) => {


    return (
        <>
            <div className="map-box" id="map">
                <MapContainer center={[props.lat,props.lon]} zoom={14} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[props.lat,props.lon]}>
                        <Popup>
                            <strong>{props.name}</strong>
                            <br/>
                            <p><strong>Status zgłoszenia:</strong><br/>{props.desc}</p>
                            <p><strong>Adres firmy:</strong><br/>{props.address}</p>
                            <a href={props.link} target="_blank" rel="noreferrer">LINK</a>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </>
    )
}