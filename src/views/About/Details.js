import React from "react";
import "./Details.css";

export default function Details(props) {
    return (
        <div className="newCard">
           {props.children}
        </div>
    );
}