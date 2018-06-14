import React from "react";
import "./Wrapper.css";

const Wrapper = props => <div style={{ backgroundImage: "./assets/images/space.jpg" }} className="wrapper">{props.children}</div>;

export default Wrapper;
