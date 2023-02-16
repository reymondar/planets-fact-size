import React from "react";
import "./Navigations.css";
export const Navigation = ({ changePlanet }) => {
  const handleChange = (e) => changePlanet(e.target.value);

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
      <ul className="nav-items">
        {planets.map((planet, i) => {
          return (
            <li value={i} key={planet} onClick={handleChange}>
              {planet}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
