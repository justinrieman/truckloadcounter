import React from 'react';

function Truck(props) {

    return(
        <div className="truck">
            <div className="truck-info">
                <h1>{props.title}</h1>
                <div className="description">
                    <div className="truck-color">
                        <p>Color:</p>
                        <p>{props.color}</p>
                    </div>
                    <div className="license">
                        <p>License:</p>
                        <p>{props.license}</p>
                    </div>
                </div>                   
            </div>  
            <div className="counter">
                <h1>13</h1>
            </div>
        </div>
    )
}

export default Truck;