import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import QuinaList from '../components/QuinaList';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

export default class Quina extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <h1 className="title">Loterias CEF - Quina</h1>
          <h2 className="subtitle">Último Resultado</h2>
          <QuinaList />
        </div>
      </ApolloProvider>
    );
  }
}
