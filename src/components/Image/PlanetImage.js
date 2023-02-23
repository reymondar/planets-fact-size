import React from "react";
import "./Image.css";
export const PlanetImage = ({ image }) => {
  return (
    <div className="planet-image">
      {typeof image === "string" ? (
        <img src={image} alt="" />
      ) : (
        <div className="planet-images-compiled">
          <img src={image.img1} alt="" />
          <img src={image.img2} alt="" />
        </div>
      )}
    </div>
  );
};
