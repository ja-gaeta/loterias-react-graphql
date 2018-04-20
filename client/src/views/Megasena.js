import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import ResMegasena from '../components/ResMegasena';
import Header from '../components/Header';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

export default class Megasena extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Header />
          <div className="container">
            <div className="column is-one-third is-flex">
              <div className="card">
                <div className="card-image">
                  <img
                    src={require('../img/mega-sena.png')}
                    alt="Logo da Mega Sena"
                  />
                </div>

                <p className="title is-4">Último Resultado</p>

                <div className="content">
                  <ResMegasena />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}
