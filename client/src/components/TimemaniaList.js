import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getTimemaniaQuery } from '../queries/queries';

class TimemaniaList extends Component {
  displayTimemania() {
    var data = this.props.data;

    if (data.loading) {
      return <div>Carregando Timemania</div>;
    } else {
      var sorteioSorted = [];
      data.lastTimemania[0].sorteio.map(aNum => {
        return sorteioSorted.push(parseInt(aNum, 10));
      });
      sorteioSorted.sort(function(x, y) {
        return x - y;
      });
      return (
        <div>
          <h1 className="subtitle">
            <strong>Concurso:</strong> {data.lastTimemania[0].concurso}
          </h1>
          <p className="subtitle">
            <strong>Data:</strong> {data.lastTimemania[0].data}
          </p>
          <p className="subtitle">
            <strong>Sorteio:</strong>{' '}
          </p>
          <ul>
            {sorteioSorted.map(num => {
              return <li key={num}>{num}</li>;
            })}
          </ul>
          <p className="subtitle">
            <strong>Time:</strong> {data.lastTimemania[0].time}
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div id="timemania-list">{this.displayTimemania()}</div>
      </div>
    );
  }
}

export default graphql(getTimemaniaQuery)(TimemaniaList);