import React from "react";
import "./Image.css";
export const PlanetImage = ({ image }) => {
  return (
    <div className="planet-image">
      {typeof image === "string" ? (
        <img src={image} alt="" />
      ) : (
        <>
          <img src={image.img1} alt="" className="main-image" />
          <img src={image.img2} alt="" className="secondary-image" />
        </>
      )}
    </div>
  );
};
