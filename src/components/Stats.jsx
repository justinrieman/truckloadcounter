import React, { useState } from 'react';
import TruckStatsButton from './TruckStatsButton';
import TruckStats from './TruckStats';
import Collapse from "@material-ui/core/Collapse";


function Stats(props) {

    const allTrucks = props.truckList;
    const [selectedTruck, setSelectedTruck] = useState(null);
    const [truckTimes, setTruckTimes] = useState();
    const [loadTimes, setLoadTimes] = useState([]);


    function selectTruck(id) {
        setSelectedTruck(id);
        setTruckTimes(allTrucks[id].times)
        setLoadTimes(allTrucks[id].times.map(time => 
            time.hour + ':' + (time.minutes<10 ? '0': '') + time.minutes + ' ' + time.amPM
            ))
    }


    

    return (
        <div className="stats">
            <div className="stat-bar">
                { allTrucks.map((truck, index) => {
                    return(
                    <TruckStatsButton 
                    key={index}
                    id={index}
                    title={truck.title}
                    selectTruck={selectTruck}
                    />
                    )
                })}             
            </div>

            {allTrucks.length === 0 ? <h3>There are no stats yet.</h3> : <hr></hr>}    
            
            <div>
                {allTrucks.map((truck, index) => {
                
                    return (
                        <Collapse in={selectedTruck === index ? true : false} key={index}>
                        <TruckStats 
                            key={index}
                            id={index}
                            title={truck.title}
                            allTrucks={allTrucks}
                            loadTimes={loadTimes}
                            show={selectedTruck === index ? true : false}
                        />
                        </Collapse>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Stats;


  