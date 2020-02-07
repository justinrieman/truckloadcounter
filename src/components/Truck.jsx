import React, { useState } from 'react';



function Truck(props) {

    const [truckCounter, setTruckCounter] = useState(0)

    function increase() {
        setTruckCounter(truckCounter + 1);
        props.increaseCount();
    }

    return(
        
        <div className="truck">
            
            <div className="truck-info">
                <h1>{props.title !== '' ? props.title : 'N/A'}</h1>
                <div className="description">
                    <div className="truck-color">
                        <p>Color:</p>
                        <p>{props.color !== '' ? props.color : 'N/A'}</p>
                    </div>
                    <div className="license">
                        <p>License:</p>
                        <p>{props.license !== '' ? props.license : 'N/A'}</p>
                    </div>
                </div>                   
            </div>  
            <div className="counter">
                <h1 onClick={increase}>{truckCounter}</h1>
            </div>
           
        </div>
        
    )
}

export default Truck;