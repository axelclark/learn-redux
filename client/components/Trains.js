import React from 'react';

const Trains = React.createClass({
  renderTrain(train, i) {
    return(
      <div className="comment" key={i}>
        <p>
          Destination: {train.DestinationName}
        </p>
        <p>
          Arrival in {train.Min} minutes
        </p>
      </div>
    )
  },

  render() {
    return(
      <div className="comments">
        {this.props.stationTrains.map(this.renderTrain)}
      </div>
    )
  }
});

export default Trains;
