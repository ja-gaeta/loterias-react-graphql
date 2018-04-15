import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import LotofacilList from '../components/LotofacilList';
import Header from '../components/Header';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

export default class Lotofacil extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Header />
          <div className="container">
            <h1 className="title top">Loterias CEF - Lotofácil</h1>
            <h2 className="subtitle">Último Resultado</h2>
            <LotofacilList />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}
