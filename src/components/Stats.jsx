import React, { useState } from 'react';
import TruckStatsButton from './TruckStatsButton';
import TruckStats from './TruckStats';
import Collapse from '@material-ui/core/Collapse';

function Stats(props) {
  const allTrucks = props.truckList;
  const [selectedTruck, setSelectedTruck] = useState(null);
  const [avgTime, setAvgTime] = useState();
  const [loadTimes, setLoadTimes] = useState([]);

  function selectTruck(id) {
    setSelectedTruck(id);
    const allUnixTimes = allTrucks[id].times.map((time) => time.unixSeconds);
    const timesBetweenLoads = [];

    if (allUnixTimes.length <= 1) {
      setAvgTime('---');
    } else {
      // Calculate average time between each load
      for (let i = 1; i < allUnixTimes.length; i++) {
        timesBetweenLoads.push(allUnixTimes[i] - allUnixTimes[i - 1]);
      }

      //In Seconds
      const averageTimeBetweenLoads = Math.round(
        timesBetweenLoads.reduce((a, b) => a + b) / timesBetweenLoads.length
      );

      //Convert to hh:mm:ss format

      setAvgTime(secondsToHms(averageTimeBetweenLoads));
    }

    setLoadTimes(
      allTrucks[id].times.map(
        (time) =>
          time.hour +
          ':' +
          (time.minutes < 10 ? '0' : '') +
          time.minutes +
          ' ' +
          time.amPM
      )
    );
  }

  return (
    <div className="stats">
      <div className="stat-bar">
        {allTrucks.map((truck, index) => {
          return (
            <TruckStatsButton
              key={index}
              id={index}
              title={truck.title}
              selectTruck={selectTruck}
            />
          );
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
                loadTimes={loadTimes.reverse()}
                avgTime={avgTime}
                show={selectedTruck === index ? true : false}
              />
            </Collapse>
          );
        })}
      </div>
    </div>
  );
}

function secondsToHms(d) {
  d = Number(d);
  const h = Math.floor(d / 3600);
  const m = Math.floor((d % 3600) / 60);
  const s = Math.floor((d % 3600) % 60);

  const hDisplay = h > 0 ? h + ':' : '';
  const mDisplay = m > 0 ? (m < 10 && h > 0 ? '0' : '') + m + ':' : '00:';
  const sDisplay = s > 0 ? (s < 10 ? '0' : '') + s : '00';
  return hDisplay + mDisplay + sDisplay;
}

export default Stats;
