import React from 'react';
import './Fdata.css';

const Fdata = (props) => {
    const {name, img, age, time} = props.fsdata;

    return (
      <div className="card">
        <img src={img} alt=""></img>
        <div className='e-info'>
          <p className="e_name">Name: {name}</p>
          <p>Age: {age}</p>
          <p>Time: {time}min</p>
            </div>
            <button className='btn'>
                <p>Add to list</p>
            </button>
      </div>
    );
};

export default Fdata;