import React, {  useRef } from "react";
import { DesktopMenu } from "./DesktopNavigation";
import { MobileMenu } from "./MobileNavigation";
import "./Navigations.css";

export const Navigation = ({ changePlanet , fullMenuOpen , setFullMenuOpen }) => {
  
  let icon = useRef(null);

  console.log(icon.current);
  const handleChange = (planet) => changePlanet(planet);

  const handleClick = () => {
    setFullMenuOpen(prev => !prev);
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

  console.log(fullMenuOpen)
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
