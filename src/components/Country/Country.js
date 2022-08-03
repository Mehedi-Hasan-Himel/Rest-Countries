import React from "react";
import "./Country.css";

const Country = (props) => {
  const { flags, name, population, area, region } = props.country;
  return (
    <div className="country">
      <h2>Name:{name.common}</h2>
      <img src={flags.png} alt="Flag" />
      <p>Population:{population}</p>
      <p>Area:{area}</p>
      <p>
        <small> Region:{region}</small>
      </p>
    </div>
  );
};

export default Country;
