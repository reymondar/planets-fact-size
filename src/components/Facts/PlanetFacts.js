import React from "react";
import "./Facts.css";

export const PlanetFacts = ({ rotation, revolution, radius, temperature }) => {
  const facts = [
    { title: "Rotation Time", fact: rotation },
    { title: "Revolution Time", fact: revolution },
    { title: "Radius", fact: radius },
    { title: "Average Temp.", fact: temperature },
  ];
  return (
    <div className="planet-facts-container">
      {facts.map((item, i) => {
        return (
          <div key={`${item}${i}`} className="planet-fact-item">
            <h3>{item.title}</h3>
            <h2>{item.fact}</h2>
          </div>
        );
      })}
    </div>
  );
};
