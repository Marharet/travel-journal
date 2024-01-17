import React from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function TravelItem(props) {
  return (
    <div className="card">
        <img src={require(`../img/${props.img}`)}/>
        <div className="information-box">
            <div className="title">
                <FaLocationDot className="location-img"/>
                <div className="title-box">
                    <span>{props.country}</span>
                    <a href={props.googleLink}>View on Google Maps</a>
                </div>
            </div>
            <h1>{props.placeTitle}</h1>
            <h5>{props.date}</h5>
            <p>{props.description}</p>
        </div>
    </div>
  );
}

