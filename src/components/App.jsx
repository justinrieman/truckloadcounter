import React, { useState } from 'react';
import Header from './Header';
import Truck from './Truck';
import TruckForm from './TruckForm';
import Collapse from '@material-ui/core/Collapse';

function App() {
  // Adding a Truck

  const [truckList, setTruckList] = useState([]);

  function addTruck(truck) {
    setTruckList((prevList) => {
      return [...prevList, truck];
    });
  }

  // Form expansion/shrinking

  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  function shrink() {
    setExpanded(false);
  }

  // Truck Counters

  const [totalCount, setTotalCount] = useState(0);

  function increaseCount() {
    setTotalCount(totalCount + 1);
  }

  return (
    <div className="container">
      <Header expand={expand} truckList={truckList} />
      <Collapse in={isExpanded}>
        <div>
          <TruckForm onAdd={addTruck} shrink={shrink} />
        </div>
      </Collapse>

      <h2 className="no-trucks">
        {truckList.length === 0
          ? 'No trucks have been added yet.'
          : 'Truck count: ' + truckList.length}
      </h2>

      {truckList.map((truck, index) => {
        return (
          <Truck
            key={index}
            id={index}
            title={truck.title}
            color={truck.color}
            license={truck.license}
            increaseCount={increaseCount}
            times={truck.times}
          />
        );
      })}

      <h2 className="total-count">
        {truckList.length > 0 && 'Total Count: ' + totalCount}
      </h2>
    </div>
  );
}

export default App;
