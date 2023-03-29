import React from "react";

import "./NavBar.css"

interface Props {
    class: string;
    links: string[][];
}


export const NavBar = (props: Props) => (
    <div className={`${props.class} ${props.class}-navbar`}>
        <a className="navbar-link" id="logo" href="/">Hire me!</a>
        <div className="navbar-options">
            {props.links.map((e,i) => <a key={i} className="navbar-link" href={`#${e[0]}`}>{e[1]}</a>)}
        </div>
    </div>
)