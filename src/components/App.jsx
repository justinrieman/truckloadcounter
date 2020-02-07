import React, { useState } from 'react';
import Header from './Header';
import Truck from './Truck';
import TruckForm from './TruckForm';

function App () {

    const [truckList, setTruckList] = useState([])

    function addTruck(truck) {
        setTruckList(prevList => {
            return [...prevList, truck]
        });
    }

    return(
        
        <div className="container">
            
            <Header />
            <TruckForm 
                onAdd={addTruck}
            />
            {truckList.map((truck, index) => {
                return(
                    <Truck 
                    key={index}
                    id={index}
                    title={truck.title}
                    color={truck.color}
                    license={truck.license}
                    />
                )
            })}
        </div>
       
    )

}

export default App;