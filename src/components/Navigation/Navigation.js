import React, { useState, useRef, useEffect } from "react";
import { DesktopMenu } from "./DesktopNavigation";
import { MobileMenu } from "./MobileNavigation";
import "./Navigations.css";

export const Navigation = ({ changePlanet }) => {
  const [fullMenuOpen, setFullMenuOpen] = useState(false);
  let icon = useRef(null);

  console.log(icon.current);
  const handleChange = (planet) => changePlanet(planet);

  const handleClick = () => {
    setFullMenuOpen(!fullMenuOpen);
  };

  const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];

  return (
    <nav>
      <div>
        <h2>THE PLANETS</h2>
      </div>
      <div className="icon" onClick={handleClick} ref={icon}>
        |||
      </div>
      {fullMenuOpen ? (
        <MobileMenu
          onClick={handleChange}
          planets={planets}
          setFullMenuOpen={setFullMenuOpen}
        />
      ) : (
        <DesktopMenu onClick={handleChange} planets={planets} />
      )}
    </nav>
  );
};
