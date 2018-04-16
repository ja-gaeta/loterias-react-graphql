import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import TimemaniaList from '../components/TimemaniaList';
import Header from '../components/Header';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

export default class Timemania extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Header />
          <div className="container">
            <h1 className="title top">Loterias CEF - Timemania</h1>
            <h2 className="subtitle">Último Resultado</h2>
            <TimemaniaList />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}
