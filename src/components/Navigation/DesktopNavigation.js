import React from "react";
import "./Navigations.css";

export const DesktopMenu = ({ onClick, planets }) => {
  const sendPlanet = (e) => {
    console.log(e.target.value);
    onClick(e.target.value);
  };

  return (
    <ul className="nav-items">
      {planets.map((planet, i) => {
        return (
          <li value={i} key={planet} onClick={sendPlanet}>
            {planet}
          </li>
        );
      })}
    </ul>
  );
};
