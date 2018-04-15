import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getMegasenaQuery = gql`
  {
    lastMegasena {
      concurso
      data
      sorteio
      id
    }
  }
`;

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
          <h1 className="subtitle">
            <strong>Concurso:</strong> {data.lastMegasena[0].concurso}
          </h1>
          <p className="subtitle">
            <strong>Data:</strong> {data.lastMegasena[0].data}
          </p>
          <p className="subtitle">
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
