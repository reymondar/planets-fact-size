import React, { useState } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation/Navigation.js";
import { PlanetLanding } from "./components/Planets/Planet";

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
