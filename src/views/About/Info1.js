import React from "react";
import "./Info1.css";

export default function Info1(props) {
    return (
        <div className="card1">
           {props.children}
        </div>
    );
}