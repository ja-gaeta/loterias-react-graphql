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
  displayQuinas() {
    var data = this.props.data;
    if (data.loading) {
      return <div>Loading Quinas</div>;
    } else {
      return data.quinas.map(quina => {
        return <li key={quina.id}>{quina.concurso}</li>;
      });
    }
  }

  render() {
    return (
      <div>
        <ul id="quina-list">{this.displayQuinas()}</ul>
      </div>
    );
  }
}

export default graphql(getQuinasQuery)(QuinaList);
