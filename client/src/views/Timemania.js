import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import ResTimemania from '../components/ResTimemania';
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
            <div className="column is-one-third is-flex">
              <div className="card">
                <div className="card-image">
                  <img
                    src={require('../img/timemania.png')}
                    alt="Logo da Timemania"
                  />
                </div>

                <p className="title is-4">Último Resultado</p>

                <div className="content">
                  <ResTimemania />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}
