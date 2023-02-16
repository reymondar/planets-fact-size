import React from "react";
import "./Image.css";
export const PlanetImage = ({ image }) => {
  return (
    <div className="container">
      <img src={image} alt="" />
    </div>
  );
};
