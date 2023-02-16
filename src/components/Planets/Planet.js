import React, { useState, useEffect } from "react";
import planetsInfo from "../../planetsInfo.json";
import { PlanetFacts } from "../Facts/PlanetFacts";
import { PlanetImage } from "../Image/PlanetImage";
import { PlanetData } from "../Data/PlanetData";
import "./Planets.css";

export const PlanetLanding = ({ planetId }) => {
  const [selectedPlanet, setSelectedPlanet] = useState(0);
  const [text, setText] = useState(planetsInfo[0].overview);
  const [image, setImage] = useState(planetsInfo[0].images.planet);

  //Updates Planet everytime a new planet is selected

  useEffect(() => {
    setSelectedPlanet(planetId);
    setText(planetsInfo[planetId].overview);
    setImage(planetsInfo[planetId].images.planet);
  }, [planetId]);

  //Grabs Planet Info based on index
  const {
    name,
    overview,
    structure,
    geology,
    rotation,
    revolution,
    radius,
    temperature,
    images,
  } = planetsInfo[selectedPlanet];

  const planet = planetsInfo[selectedPlanet];

  //Buttons function to display data
  const handleClick = (num) => {
    if (num === "Overview" || num === "01Overview") {
      debugger;
      setText(overview);
      setImage(images.planet);
    }
    if (num === "Internal Structure" || num === "02InternalStructure") {
      setText(structure);
      setImage(images.internal);
    }
    if (num === "Surface Geology" || num === "03Surface Geology") {
      setText(geology);
      setImage(images.geology);
    }
  };

  return (
    <div>
      <div className="planet-data-container">
        <PlanetImage image={image} />
        <PlanetData
          name={name}
          text={text}
          handleData={handleClick}
          planet={planet}
        />
      </div>
      <PlanetFacts
        rotation={rotation}
        revolution={revolution}
        radius={radius}
        temperature={temperature}
      />
    </div>
  );
};
