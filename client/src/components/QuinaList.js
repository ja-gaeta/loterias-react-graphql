import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getQuinasQuery = gql`
  {
    lastQuina {
      concurso
      data
      sorteio
      id
    }
  }
`;

class QuinaList extends Component {
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
          <h1 className="subtitle">
            <strong>Concurso:</strong> {data.lastQuina[0].concurso}
          </h1>
          <p className="subtitle">
            <strong>Data:</strong> {data.lastQuina[0].data}
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
        <div id="quina-list">{this.displayQuinas()}</div>
      </div>
    );
  }
}

export default graphql(getQuinasQuery)(QuinaList);
