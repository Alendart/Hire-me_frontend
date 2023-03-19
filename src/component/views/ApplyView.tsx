import React from "react";

import "./ApplyView.css"

export const ApplyView = () => (
    <>
        <div className="job-overlay">
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
                    <h1>Firma twoich marzeń</h1>
                </div>
                <div className="job job-description" id="desc">
                    PHOENIX CONTACT WIELKOPOLSKA Sp. z o.o.<br/>We achieve a leading position thanks to innovative and
                    modern operation, respect for the natural environment and the implementation of the principle that
                    the most important good of the company are people.<br/><br/><br/><br/>Embedded frontend
                    developer<br/>Please send your CV in English<br/><br/>Your responsibilities<br/>Development of
                    Web-Based-Management (WBM) nterfaces for smart devices (e.g.: power meters, current sensors)<br/>Self-organized
                    development of software solutions regarding given requirements and in cooperation with product owner<br/>Testing,
                    troubleshooting and fixing bugs<br/>Maintenance of existing WBM solutions<br/><br/>Our
                    requirements<br/>Excellent command of written and spoken English (min. B2 level)<br/>Bachelor's
                    Degree (IT or similar)<br/>Practical experience with C++, C, JavaScript, CSS, HTML, GIT<br/>Practical
                    experience with frontend for embedded devices (e.g. configuration pages, status pages)<br/>Basic
                    knowledge about Linux architecture (user perspective)<br/>Ability to solve problems
                    independently<br/>Willingness to travel to company HQ in Germany<br/><br/>Optional<br/>Experience
                    with Angular, Vue.js, NODE. js, REST API, Websocket, Typescript, Python<br/>Experience with Linux
                    based embedded systems<br/>Experience with CI/CD<br/>Experience in electronics (ability to read
                    schematics, basic understanding of voltage and current flows)<br/><br/>What we offer<br/>Challenging
                    work in an innovative production facility<br/>Stable work in an international organization<br/>Participation
                    in interesting, international projects<br/>Development opportunities and a wide training offer<br/>Travel
                    allowance for work above 30 km from PxCW<br/><br/>Benefits<br/>sharing the costs of sports
                    activities<br/>private medical care<br/>sharing the costs of foreign language classes<br/>sharing
                    the costs of professional training & courses<br/>life insurance<br/>remote work opportunities<br/>flexible
                    working time<br/>integration events<br/>preferential loans<br/>coffee / tea<br/>parking space for
                    employees<br/>extra social benefits<br/>pre-paid cards<br/>holiday funds<br/>redeployment
                    package<br/>sharing the costs of holidays for kids<br/>baby layette<br/>school layette<br/>christmas
                    gifts<br/>sharing the commuting costs<br/>employee referral program<br/>opportunity to obtain
                    permits and licenses<br/>charity initiatives<br/>family picnics<br/>extra leave<br/>annual award
                </div>
                <div className="job job-url" id="url">
                    <p className="company-url-text">Link do firmy</p>
                    <a className="company-url" href="">www.fajnafirma.com.pl</a>
                </div>
                <div className="job job-address" id="map">
                    <div className="map-box">
                        Mapka wycentrowana na adresie
                    </div>
                </div>
                <div className="job job-files" id="files">
                    <div className="files-box">
                        Podgląd pliku
                    </div>
                </div>
                <div className="job job-status" id="status">
                    <div className="job-status-display">
                        <p className="status-p">Aktualny status podania:<br/> <strong>Wysłano</strong></p>
                    </div>
                    <div className="job-status-changer">
                        <button className="status-changer">Zmiana statusu</button>
                    </div>
                </div>

            </section>
        </div>
    </>
)