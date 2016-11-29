import React from 'react';
import { Link } from 'react-router';

const Station = React.createClass({
  render() {
    const { station, i, trains } = this.props;
    return (
      <figure className="grid-figure">
        <figcaption>
          <Link to={`/view/${station.Code}`}>
            <p>{station.Name}</p>
          </Link>
        </figcaption>

      </figure>
    )
  }
});

export default Station;
