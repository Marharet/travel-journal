import React from "react";
import { FaEarthAmericas } from "react-icons/fa6";


export default function Header() {
  return (
    <div className="header">
      <FaEarthAmericas className="earth"/>
      <h1>my travel journal</h1>
    </div>
  );
}

