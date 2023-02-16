import React from "react";
import "./PlanetData.css";

export const PlanetData = ({ name, text, handleData, planet }) => {
  const handleChange = (e) => {
    handleData(e.target.innerText);
  };

  return (
    <div className="planet-info-container">
      <div className="planet-info">
        <h1>{name}</h1>
        <p>{text["content"]}</p>
      </div>
      <div>
        <p>
          Source
          <a href={text["source"]}> Wikipedia</a>
        </p>
      </div>
      <div className="planet-buttons">
        <button onClick={handleChange}>
          01<b>Overview</b>
        </button>
        <button onClick={handleChange}>
          02<b>Internal Structure</b>
        </button>
        <button onClick={handleChange}>
          03<b>Surface Geology</b>
        </button>
      </div>
    </div>
  );
};
