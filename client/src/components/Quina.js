import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getQuinasQuery = gql`
  {
    quinas {
      concurso
      data
      sorteio
      id
    }
  }
`;

class QuinaList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ul id="quina-list">
          <li>Concurso Quina</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getQuinasQuery)(QuinaList);
