import React from 'react';
import './List.css';
import logo from '../../images/images.png'

const List = ({ list }) => {
  const toast = () => {
    alert("Activitity Complete")
  }
  let total = 0;
  let n;
    for (const fsdata of list) {
        total = total + fsdata.time;
  }
  function update(name) {
    localStorage.setItem('BreakTime', name);
  }
    return (
      <div>
        <div className="profile">
          <div className="pic">
            <div>
              <img className="icon" src={logo} alt="" />
            </div>
            <div>
              <h2 className="detail">Abeda </h2>
              <h4 className="detail">Sylhet</h4>
            </div>
          </div>
          <div className="about">
            <div>
              <h3>
                50
                <small style={{ color: "black", fontWeight: "normal" }}>
                  kg
                </small>
              </h3>
              <p>Weight</p>
            </div>
            <div>
              <h3>5.1</h3>
              <p>Height</p>
            </div>
            <div>
              <h3>
                24
                <small style={{ color: "black", fontWeight: "normal" }}>
                  year
                </small>
              </h3>
              <p>Age</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Add A Break</h3>
          <div className="break">
            <button onClick={() => update(10)}>10s</button>
            <button onClick={() => update(20)}>20s</button>
            <button onClick={() => update(30)}> 30s</button>
            <button onClick={() => update(40)}>40s</button>
            <button onClick={() => update(50)}>50s</button>
          </div>
        </div>
        <div>
          <h3>Exercize Details</h3>
          <div className="details">
            <p style={{ fontWeight: "bold" }}>
              Exercize time <span style={{ paddingRight: 20 }}></span>
              {total}
            </p>
          </div>
          <div className="details">
            <p style={{ fontWeight: "bold" }}>Break time {n} </p>
          </div>
        </div>
        <button className="btn1" onClick={toast}>
          Activity Completed
        </button>
      </div>
    );
};

export default List;