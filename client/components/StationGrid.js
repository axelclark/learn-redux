import React from 'react';
import Station from './Station';

const StationGrid = React.createClass({
  render() {
    return(
      <div className="photo-grid">
        {this.props.stations.Stations.map((station, i) => <Station {...this.props} key={i} i={i} station={station} />)}
      </div>
    )
  }
})

export default StationGrid;
