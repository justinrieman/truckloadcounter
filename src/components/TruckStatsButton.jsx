import React from 'react';

function TruckStatsButton(props) {
    return (
        <button onClick={() => {
            return props.selectTruck(props.id)
        }}>{props.title}</button>
    )
}

export default TruckStatsButton;