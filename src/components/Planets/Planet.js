import React, { useState, useEffect } from "react";
import planetsInfo from "../../planetsInfo.json";
import { PlanetFacts } from "../Facts/PlanetFacts";
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

  //Buttons function to display data
  const handleClick = (num) => {
    if (num === "OVERVIEW") {
      setText(overview);
      setImage(images.planet);
    }
    if (num === "INTERNAL STRUCTURE") {
      setText(structure);
      setImage(images.internal);
    }
    if (num === "SURFACE GEOLOGY") {
      setText(geology);
      setImage({ img1: images.planet, img2: images.geology });
    }
    console.log(image);
  };

  return (
    <>
      <div className="planet-data-container">
        <PlanetData
          name={name}
          text={text}
          handleData={handleClick}
          image={image}
        />
      </div>
      <PlanetFacts
        rotation={rotation}
        revolution={revolution}
        radius={radius}
        temperature={temperature}
      />
    </>
  );
};
