import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getMegasenaQuery } from '../queries/queries';

class MegasenaList extends Component {
  displayMegasena() {
    var data = this.props.data;

    if (data.loading) {
      return <div>Carregando Megasena</div>;
    } else {
      var sorteioSorted = [];
      data.lastMegasena[0].sorteio.map(aNum => {
        return sorteioSorted.push(parseInt(aNum, 10));
      });
      sorteioSorted.sort(function(x, y) {
        return x - y;
      });
      return (
        <div>
          <p className="subtitle">
            <strong>Concurso:</strong> {data.lastMegasena[0].concurso}
          </p>
          <p className="subtitle">
            <strong>Data:</strong> {data.lastMegasena[0].data}
          </p>
          <p className="subtitle" style={{ marginBottom: 0 }}>
            <strong>Sorteio:</strong>{' '}
          </p>
          <ul>
            {sorteioSorted.map(num => {
              return <li key={num}>{num}</li>;
            })}
          </ul>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div id="megasena-list">{this.displayMegasena()}</div>
      </div>
    );
  }
}

export default graphql(getMegasenaQuery)(MegasenaList);
