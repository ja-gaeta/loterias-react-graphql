import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getLotomaniaQuery } from '../queries/queries';

class LotomaniaList extends Component {
  displayLotomania() {
    var data = this.props.data;

    if (data.loading) {
      return <div>Carregando Lotomania</div>;
    } else {
      var sorteioSorted = [];
      data.lastLotomania[0].sorteio.map(aNum => {
        return sorteioSorted.push(parseInt(aNum, 10));
      });
      sorteioSorted.sort(function(x, y) {
        return x - y;
      });
      var sorteioSorted1 = sorteioSorted.slice(0, 5);
      var sorteioSorted2 = sorteioSorted.slice(5, 10);
      var sorteioSorted3 = sorteioSorted.slice(10, 15);
      var sorteioSorted4 = sorteioSorted.slice(15, 20);
      return (
        <div>
          <h1 className="subtitle">
            <strong>Concurso:</strong> {data.lastLotomania[0].concurso}
          </h1>
          <p className="subtitle">
            <strong>Data:</strong> {data.lastLotomania[0].data}
          </p>
          <p className="subtitle">
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
          <ul>
            {sorteioSorted4.map(num => {
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
        <div id="lotomania-list">{this.displayLotomania()}</div>
      </div>
    );
  }
}

export default graphql(getLotomaniaQuery)(LotomaniaList);
