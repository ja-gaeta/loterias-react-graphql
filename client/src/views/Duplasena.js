import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import ResDuplasena from '../components/resultados/ResDuplasena';
import Header from '../components/Header';
import DetalhesLoto from '../components/detalhes/DetalhesLoto';
import TabelaDuplasena from '../components/detalhes/TabelaDuplasena';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

export default class Duplasena extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Header />
          <div className="container loto-body">
            <div className="columns">
              <div className="column is-one-third is-flex">
                <div className="card">
                  <div className="card-image">
                    <img
                      src={require('../img/duplasena.png')}
                      alt="Logo da Duplasena"
                    />
                  </div>

                  <p className="title is-4">Último Resultado</p>

                  <div className="content">
                    <ResDuplasena />
                  </div>
                </div>
              </div>
              <DetalhesLoto
                range=" de 6 a 15"
                numeros="50"
                premiados=" sena, quina, quadra e terno"
                dias=" às terças, quintas e sábados"
                tabela={<TabelaDuplasena />}
              />
            </div>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}
