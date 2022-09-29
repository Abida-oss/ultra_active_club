import React, { useEffect, useState } from "react";
import Fdata from "../Fdata/Fdata";
import "./Exercise.css";

const Exercise = () => {
  const [fdata, setFdata] = useState([]);
  useEffect(() => {
    fetch("fdata.json")
      .then(res => res.json())
      .then(data => setFdata(data));
  }, []);
  return (
    <div className="main">
      <div className="exercise-container">
        {fdata.map(fsdata => (
            <Fdata
                key={fsdata.id}
                fsdata={fsdata}
            ></Fdata>
        ))}
      </div>
      <div className="cart-container">
        <h1>hello</h1>
      </div>
    </div>
  );
};

export default Exercise;
