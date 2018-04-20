import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getQuinasQuery } from '../queries/queries';

class ResQuina extends Component {
  displayQuinas() {
    var data = this.props.data;

    if (data.loading) {
      return <div>Loading Quinas</div>;
    } else {
      var sorteioSorted = [];
      data.lastQuina[0].sorteio.map(aNum => {
        return sorteioSorted.push(parseInt(aNum, 10));
      });
      sorteioSorted.sort(function(x, y) {
        return x - y;
      });
      return (
        <div>
          <p className="subtitle">
            <strong>Concurso:</strong> {data.lastQuina[0].concurso}
          </p>
          <p className="subtitle">
            <strong>Data:</strong> {data.lastQuina[0].data}
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
        <div id="quina-list">{this.displayQuinas()}</div>
      </div>
    );
  }
}

export default graphql(getQuinasQuery)(ResQuina);
