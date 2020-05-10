import React from 'react';

function LoadTime(props) {
  return <p>{props.time}</p>;
}

function TruckStats(props) {
  return (
    <div
      style={{ display: props.show === false ? 'none' : null }}
      className="stat-info"
    >
      <h2>{props.title}</h2>
      <br />
      <h3>Avg Time Between Loads</h3>
      <p>{props.avgTime}</p>
      <br />
      <h3>Load Times</h3>
      {props.loadTimes.map((time, index) => {
        return <LoadTime key={index} time={time} />;
      })}
    </div>
  );
}

export default TruckStats;
