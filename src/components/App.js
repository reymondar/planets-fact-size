import "../App.css";
import React, { useState } from "react";
import { Navigation } from "./Navigation/Navigation.js";
import { PlanetLanding } from "./Planets/Planet";

function App() {
  const [actualPlanet, setActualPlanet] = useState(0);

  const changePlanet = (navPlanet) => setActualPlanet(navPlanet);

  return (
    <>
      <Navigation changePlanet={changePlanet} />
      <PlanetLanding planetId={actualPlanet} />
    </>
  );
}

export default App;
