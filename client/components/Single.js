import React from 'react';
import Station from './Station';
import Trains from './Trains';


const Single = React.createClass({
  render() {
    const { stationCode } = this.props.params;
    const i = this.props.stations.Stations.findIndex((station) => station.Code === stationCode);
    const station = this.props.stations.Stations[i];
    const stationTrains = this.props.trains.Trains.filter((station) => station.LocationCode === stationCode);
    return(
      <div className="single-photo">
        <Station i={i} station={station} {...this.props} />
        <Trains stationTrains={stationTrains} {...this.props} />
      </div>
    )
  }
})

export default Single;
