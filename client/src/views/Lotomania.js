import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import LotomaniaList from '../components/LotomaniaList';
import Header from '../components/Header';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

export default class Lotomania extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Header />
          <div className="container">
            <img
              src={require('../img/lotomania.png')}
              style={{ width: 20 + '%', marginTop: 10 }}
            />
            <h2 className="subtitle">Último Resultado</h2>
            <LotomaniaList />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}
