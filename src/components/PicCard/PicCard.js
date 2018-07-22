import React from "react";
import "./PicCard.css";

const FriendCard = props => (
    <div className="imgcard">
        {/* <div className="img-container"> */}
        <img className="img-fluid" alt={props.name} src={props.image} id={props.id} onClick={props.onClick}/>


    </div>
);

export default FriendCard;
