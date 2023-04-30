import React from "react";
import './Assests/Style/RaandomUser.css'
import Fake from './Assests/Images/logo192.png'
import Map, { NavigationControl, Marker } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
function RaandomUser() {
    return (
        <div className="container-main">
            <div className="personal-info">
                <div className="absolute-label">
                    <label>Personal Info</label>
                </div>
                <img src={Fake} />
                <div className="personal-items">
                    <label>Full Name : Mahyar Kaimnejad</label>
                    <label>Email : mahyardvlpr.ir@gmail.com</label>
                    <label>Date : 2004/03/28</label>
                    <label>Phone : +98 9145896289</label>
                    <label>Cell : +98 9145896289</label>
                </div>
                <div className="personal-items">
                    <label>Country : Iran</label>
                    <label>City : Tabriz</label>
                    <label>Streat : 2514</label>
                    <label>State : lwhedfr</label>
                    <label>postcode : 6854</label>
                </div>
            </div>
            <div className="personal-info map">
                <Map mapLib={maplibregl}
                    initialViewState={{
                        longitude: 46.0163676,
                        latitude: 38.2309805,
                        zoom: 16
                    }}
                    style={{ width: "100%", height: "400px" }}
                    mapStyle="https://api.maptiler.com/maps/streets/style.json?key=sAo8rfLAE6oUQoGYYcN4	"
                >
                    <NavigationControl position="top-left" />
                    <Marker longitude={46.0163676} latitude={38.2309805} color="red" />
                </Map>
            </div>
            <div className="login-info">
                <div className="absolute-label">
                    <label>Login Info</label>
                </div>
                <div className="personal-items">
                    <label>UserName : khwegf</label>
                    <label>Password : qwefwqef</label>
                </div>
            </div>
        </div>
    );
}

export default RaandomUser;