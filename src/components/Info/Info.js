import React from "react";
import "./Info.css";
import { PlanetImage } from "../Image/PlanetImage";

export const Info = ({ image, name, text }) => {
  return (
    <>
      <PlanetImage image={image} />

      <div className="planet-info">
        <div className="paragraph">
          <h1>{name}</h1>
          <p>{text["content"]}</p>
        </div>
        <div className="source">
          <p>
            Source :<a href={text["source"]}> Wikipedia</a>
          </p>
        </div>
      </div>
    </>
  );
};
