import React, { useEffect, useState } from "react";
import { Info } from "../Info/Info";
import "./PlanetData.css";


// const Button = () => {
//   <button
//               style={
//                 active === content ? { backgroundColor: `var(--${name})` } : {}
//               }
//               className={name}
//               onClick={handleChange}
//               key={i}
//             >
//               {content}
//   </button>
// }

export const PlanetData = ({ name, text, handleData, image }) => {
  const [active, setActive] = useState("OVERVIEW");

  //Sets overview as default when new planet changes

  useEffect(() => {
    setActive("OVERVIEW");
  }, [name]);

  const buttons = ["OVERVIEW", "INTERNAL STRUCTURE", "SURFACE GEOLOGY"];

  const handleChange = (e) => {
    let element = e.target.innerText;

    handleData(element);

    setActive(element);
  };

  return (
    <>
      <Info name={name} text={text} image={image} />

      <div className="planet-buttons">
        {buttons.map((content, i) => {
          return (
            <button
              style={
                active === content ? { backgroundColor: `var(--${name})` } : {}
              }
              className={`${name} ${i}`}
              onClick={handleChange}
              key={i}
            >
              {content}
            </button>
          );
        })}
      </div>
    </>
  );
};
