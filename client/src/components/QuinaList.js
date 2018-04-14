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
      return (
        <div>
          <h3>Concurso: {data.lastQuina[0].concurso}</h3>
          <h4>Data: {data.lastQuina[0].data}</h4>
          <p>Sorteio: </p>
          {data.lastQuina[0].sorteio.map(num => {
            return (
              <ul key={num}>
                <li>{num}</li>
              </ul>
            );
          })}
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
