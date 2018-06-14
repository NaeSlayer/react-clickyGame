import React from "react";
import "./NavBar.css";

const NavBar = props => (

    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <p className="navbar-text">Clicky Game</p>

        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <p>Clicky Game</p>
                </li>
                <li className="nav-item">
                    <p>Clicky Game</p>
                </li>
                <li>
                    <p>Score: {props.score} | Top Score: {props.topScore}</p>
                </li>
            </ul>
        </div>
    </nav>
)

export default NavBar;