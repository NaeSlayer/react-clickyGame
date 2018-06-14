import React from "react";
import "./PicCard.css";

const FriendCard = props => (
    <div className="card">
        {/* <div className="img-container"> */}
        <img alt={props.name} src={props.image} id={props.id} onClick={props.onClick} />


    </div>
);

export default FriendCard;
