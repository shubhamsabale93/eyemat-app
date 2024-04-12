import React from "react";
import "./Info.css";

export default function Info(props) {
    return (
        <div className="card">
           {props.children}
        </div>
    );
}