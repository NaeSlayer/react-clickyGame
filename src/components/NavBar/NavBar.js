import React from "react";
import "./NavBar.css";

const NavBar = props => (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top my-nav">
        <p>Clicky Game</p>

        <div className="collapse navbar-collapse justify-content-around">
            <ul className="nav navbar-nav d-flex justify-content-between">
                <li className="nav-item m-3">
                    <p>{props.guess}</p>
                </li>
                

                <li className="nav-item m-3">
                    <p> Score: {props.score} | Top Score: {props.topScore}</p>
                </li>
            </ul>
        </div>
    </nav>
)

export default NavBar;