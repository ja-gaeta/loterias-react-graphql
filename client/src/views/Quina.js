import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import ResQuina from '../components/resultados/ResQuina';
import Header from '../components/Header';
import DetalhesLoto from '../components/detalhes/DetalhesLoto';
import TabelaQuina from '../components/detalhes/TabelaQuina';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

export default class Quina extends Component {
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
                      src={require('../img/quina.png')}
                      alt="Logo da Quina"
                    />
                  </div>

                  <p className="title is-4">Último Resultado</p>

                  <div className="content">
                    <ResQuina />
                  </div>
                </div>
              </div>
              <DetalhesLoto
                range=" de 5 a 15"
                numeros="80"
                premiados=" quina, quadra, terno e duque"
                dias=" de segunda a sábado"
                tabela={<TabelaQuina />}
              />
            </div>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}
