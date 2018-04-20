import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getLotofacilQuery } from '../queries/queries';

class LotofacilList extends Component {
  displayLotofacil() {
    var data = this.props.data;

    if (data.loading) {
      return <div>Carregando Lotofácil</div>;
    } else {
      var sorteioSorted = [];
      data.lastLotofacil[0].sorteio.map(aNum => {
        return sorteioSorted.push(parseInt(aNum, 10));
      });
      sorteioSorted.sort(function(x, y) {
        return x - y;
      });
      var sorteioSorted1 = sorteioSorted.slice(0, 5);
      var sorteioSorted2 = sorteioSorted.slice(5, 10);
      var sorteioSorted3 = sorteioSorted.slice(10, 15);
      return (
        <div>
          <p className="subtitle">
            <strong>Concurso:</strong> {data.lastLotofacil[0].concurso}
          </p>
          <p className="subtitle">
            <strong>Data:</strong> {data.lastLotofacil[0].data}
          </p>
          <p className="subtitle" style={{ marginBottom: 0 }}>
            <strong>Sorteio:</strong>{' '}
          </p>
          <ul>
            {sorteioSorted1.map(num => {
              return <li key={num}>{num}</li>;
            })}
          </ul>
          <ul>
            {sorteioSorted2.map(num => {
              return <li key={num}>{num}</li>;
            })}
          </ul>
          <ul>
            {sorteioSorted3.map(num => {
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
        <div id="lotofacil-list">{this.displayLotofacil()}</div>
      </div>
    );
  }
}

export default graphql(getLotofacilQuery)(LotofacilList);
