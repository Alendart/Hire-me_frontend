import React from "react";

import "./ApplyView.css"

export const ApplyView = () => (
    <>
        <section className="job job-header">
            <div className="job job-navbar">
                <a className="navbar-link" id="logo" href="/">Hire me!</a>
                <div className="navbar-options">
                    <a className="navbar-link" href="#desc">Opis</a>
                    <a className="navbar-link" href="#url">Link</a>
                    <a className="navbar-link" href="#map">Mapa</a>
                    <a className="navbar-link" href="#files">Pliki</a>
                    <a className="navbar-link" href="#status">Status</a>
                </div>
            </div>
        </section>
        <section>
            <div className="job job-name">
                <h1>Nazwa ogłoszenia</h1>
            </div>
            <div className="job job-description" id="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, blanditiis eos explicabo fugit in
                ipsa ipsam labore minima neque odio qui quidem ratione, reiciendis reprehenderit sit temporibus
                totam vero vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, blanditiis eos
                explicabo fugit in
                ipsa ipsam labore minima neque odio qui quidem ratione, reiciendis reprehenderit sit temporibus
                totam vero vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, blanditiis eos
                explicabo fugit in
                ipsa ipsam labore minima neque odio qui quidem ratione, reiciendis reprehenderit sit temporibus
                totam vero vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, blanditiis eos
                explicabo fugit in
                ipsa ipsam labore minima neque odio qui quidem ratione, reiciendis reprehenderit sit temporibus
                totam vero vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, blanditiis eos
                explicabo fugit in
                ipsa ipsam labore minima neque odio qui quidem ratione, reiciendis reprehenderit sit temporibus
                totam vero vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, blanditiis eos
                explicabo fugit in
                ipsa ipsam labore minima neque odio qui quidem ratione, reiciendis reprehenderit sit temporibus
                totam vero vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, blanditiis eos
                explicabo fugit in
                ipsa ipsam labore minima neque odio qui quidem ratione, reiciendis reprehenderit sit temporibus
                totam vero vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, blanditiis eos
                explicabo fugit in
                ipsa ipsam labore minima neque odio qui quidem ratione, reiciendis reprehenderit sit temporibus
                totam vero vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, blanditiis eos
                explicabo fugit in
                ipsa ipsam labore minima neque odio qui quidem ratione, reiciendis reprehenderit sit temporibus
                totam vero vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, blanditiis eos
                explicabo fugit in
                ipsa ipsam labore minima neque odio qui quidem ratione, reiciendis reprehenderit sit temporibus
                totam vero vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, blanditiis eos
                explicabo fugit in
                ipsa ipsam labore minima neque odio qui quidem ratione, reiciendis reprehenderit sit temporibus
                totam vero vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, blanditiis eos
                explicabo fugit in
                ipsa ipsam labore minima neque odio qui quidem ratione, reiciendis reprehenderit sit temporibus
                totam vero vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, blanditiis eos
                explicabo fugit in
                ipsa ipsam labore minima neque odio qui quidem ratione, reiciendis reprehenderit sit temporibus
                totam vero vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, blanditiis eos
                explicabo fugit in
                ipsa ipsam labore minima neque odio qui quidem ratione, reiciendis reprehenderit sit temporibus
                totam vero vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, blanditiis eos
                explicabo fugit in
                ipsa ipsam labore minima neque odio qui quidem ratione, reiciendis reprehenderit sit temporibus
                totam vero vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, blanditiis eos
                explicabo fugit in
                ipsa ipsam labore minima neque odio qui quidem ratione, reiciendis reprehenderit sit temporibus
                totam vero vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, blanditiis eos
                explicabo fugit in
                ipsa ipsam labore minima neque odio qui quidem ratione, reiciendis reprehenderit sit temporibus
                totam vero vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, blanditiis eos
                explicabo fugit in
                ipsa ipsam labore minima neque odio qui quidem ratione, reiciendis reprehenderit sit temporibus
                totam vero vitae.

            </div>
            <div className="job job-url" id="url">
                <a href="">Link do zgłoszenia</a>
            </div>
            <div className="job job-address" id="map">
                <div className="map-box">
                    Mapka wycentrowana na adresie
                </div>
            </div>
            <div className="job job-files" id="files">
                Podgląd pliku
            </div>
            <div className="job job-status" id="status">
                <div className="job-status-display">
                    Aktualny status np. wysłano
                </div>
                <div className="job-status-changer">
                    <button>Przycisk otwierający modal do zmiany statusu</button>
                    albo select
                </div>
            </div>

        </section>
    </>
)