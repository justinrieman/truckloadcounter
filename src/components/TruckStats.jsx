import React from 'react';

function LoadTime(props) {
    return (
        <p>{props.time}</p>
    )
}

function TruckStats (props) {

    function showTrucks() {
        console.log(props.loadTimes)
    }

    return (
        <div style={{display: props.show === false ? 'none' : null}} className="stat-info">
            <h2>{props.title}</h2>
            <br/>
            <h3>Avg Time Between Loads</h3>
            <p>49:17</p>
            <br/>
            <h3>Load Times</h3>
            {props.loadTimes.map((time, index) => {
                return (
                    <LoadTime 
                    key={index}
                    time={time}
                    />
                )
            })}
            
            <button onClick={showTrucks}>Click Me</button>
        </div>
    );
}

export default TruckStats;