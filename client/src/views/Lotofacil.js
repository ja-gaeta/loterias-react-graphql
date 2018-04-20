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
            <img
              src={require('../img/lotofacil.png')}
              style={{ width: 20 + '%', marginTop: 10 }}
            />
            <h2 className="subtitle">Último Resultado</h2>
            <LotofacilList />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}
