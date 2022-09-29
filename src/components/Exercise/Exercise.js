import React, { useEffect, useState } from "react";
import Fdata from "../Fdata/Fdata";
import List from "../List/List";
import "./Exercise.css";

const Exercise = () => {
  const [fdata, setFdata] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("fdata.json")
      .then(res => res.json())
      .then(data => setFdata(data));
  }, []);

  const handleClick = fsdata => {
      console.log(fsdata);
      const newList = [...list, fsdata]
      setList(newList);
  };

  return (
    <div className="main">
      <div className="exercise-container">
        {fdata.map(fsdata => (
          <Fdata
            key={fsdata.id}
            fsdata={fsdata}
            handleClick={handleClick}
          ></Fdata>
        ))}
      </div>
      <div className="cart-container">
        <List list={list}></List>
      </div>
    </div>
  );
};

export default Exercise;
