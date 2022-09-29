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
    <div>
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

      <div className="ques">
        <div>
          <h3>How does react work?</h3>
          <p>
            React is a declarative, efficient, and flexible JavaScript library
            for building user interfaces. To make DOM faster, React implements a
            virtual DOM that is basically a DOM tree representation in
            JavaScript. So when it needs to read or write to the DOM, it will
            use the virtual representation of it. Then the virtual DOM will try
            to find the most efficient way to update the browsers DOM. Unlike
            browsers DOM elements, React elements are plain objects and are
            cheap to create. React DOM takes care of updating the DOM to match
            the React elements. The reason for this is that JavaScript is very
            fast and it worth keeping a DOM tree in it to speed up its
            manipulation. Although React was conceived to be used in the
            browser, because of its design it can also be used in the server
            with Node.js.
          </p>
          <hr />
        </div>
        <div>
          <h3>What are the differences between props and state ?</h3>
          <p>
            (i) In props the Data is passed from one component to another. In
            state the Data is passed within the component only. <br />
            (ii) Props is Immutable (cannot be modified). On other hand, State
            is Mutable ( can be modified). <br />
            (iii) Props can be used with state and functional components. State
            can be used only with the state components/class component.
            <br />
            (iv) Props are read-only. But State is both read and write.
            <br />
          </p>
          <hr />
        </div>
        <div>
          <h3>Why useEffect is used without data loading?</h3>
          <p>
            We specify useEffect when we are basically requesting react to
            execute the function that we pass in the useEffect function as an
            argument, everytime the component renders. The second thing is that useeffect is used inside the component as by doing
            this we can easily access the components state and props without
            having to write any additional code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
