import React from 'react';

const List = ({ list }) => {
    let total = 0;
    for (const fsdata of list) {
        total = total + fsdata.time;
    }
    return (
      <div>
        <div className="profile">
          <h2>Abeda </h2>
          <h4>Sylhet</h4>
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
            <p>10s</p>
            <p>20s</p>
            <p>30s</p>
            <p>40s</p>
            <p>50s</p>
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
            <p style={{ fontWeight: "bold" }}>Break time </p>
          </div>
        </div>
      </div>
    );
};

export default List;