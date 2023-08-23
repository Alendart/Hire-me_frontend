import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../../../Hire_me_logo.png"

import "./NavBar.css"


interface Props {
    class: string;
    links: string[][];
}


export const NavBar = (props: Props) => (
    <div className={`${props.class} ${props.class}-navbar`}>
        <NavLink className="navbar-home-link" to='/'><img className="navbar-link" id="logo" src={logo}
                                                          alt="hire me logo"/></NavLink>
        <div className="navbar-options">
            {props.links.map((e,i) => <a key={i} className="navbar-link" href={`#${e[0]}`}>{e[1]}</a>)}
        </div>
    </div>
)