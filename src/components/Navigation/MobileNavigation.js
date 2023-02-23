import React from "react";
import "./Navigations.css";

export const MobileMenu = ({ onClick, planets, setFullMenuOpen }) => {
  const sendPlanet = (e) => {
    onClick(e.currentTarget.value);
    setFullMenuOpen(false);
  };
  return (
    <ul className="mobile-nav-items">
      {planets.map((planet, i) => {
        return (
          <li value={i} key={planet} onClick={sendPlanet}>
            <div>
              <span
                className="nav-circle"
                style={{ backgroundColor: `var(--${planet})` }}
              ></span>
              {planet}
            </div>
            <span className="arrow"></span>
          </li>
        );
      })}
    </ul>
  );
};
