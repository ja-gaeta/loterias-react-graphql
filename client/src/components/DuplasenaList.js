import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getDuplasenaQuery } from '../queries/queries';

class DuplasenaList extends Component {
  displayDuplasena() {
    var data = this.props.data;

    if (data.loading) {
      return <div>Carregando Duplasena</div>;
    } else {
      var sorteioSorted1 = [];
      data.lastDuplasena[0].sorteio1.map(aNum => {
        return sorteioSorted1.push(parseInt(aNum, 10));
      });
      sorteioSorted1.sort(function(x, y) {
        return x - y;
      });
      var sorteioSorted2 = [];
      data.lastDuplasena[0].sorteio2.map(aNum => {
        return sorteioSorted2.push(parseInt(aNum, 10));
      });
      sorteioSorted2.sort(function(x, y) {
        return x - y;
      });
      return (
        <div>
          <p className="subtitle">
            <strong>Concurso:</strong> {data.lastDuplasena[0].concurso}
          </p>
          <p className="subtitle">
            <strong>Data:</strong> {data.lastDuplasena[0].data}
          </p>
          <p className="subtitle" style={{ marginBottom: 0 }}>
            <strong>Primeiro Sorteio:</strong>{' '}
            <span>
              <ul id="duplasena-list1">
                {sorteioSorted1.map(num => {
                  return <li key={num}>{num}</li>;
                })}
              </ul>
            </span>
          </p>
          <p className="subtitle" style={{ marginBottom: 0 }}>
            <strong>Segundo Sorteio:</strong>{' '}
            <span>
              <ul id="duplasena-list2">
                {sorteioSorted2.map(num => {
                  return <li key={num}>{num}</li>;
                })}
              </ul>
            </span>
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div id="duplasena-list">{this.displayDuplasena()}</div>
      </div>
    );
  }
}

export default graphql(getDuplasenaQuery)(DuplasenaList);
