import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import ResTimemania from '../components/resultados/ResTimemania';
import Header from '../components/Header';
import DetalhesLoto from '../components/detalhes/DetalhesLoto';
import TabelaLotomania from '../components/detalhes/TabelaTimemania';
import TabelaTimemania from '../components/detalhes/TabelaTimemania';

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
          <div className="container loto-body">
            <div className="columns">
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
              <DetalhesLoto
                range=" 10"
                numeros="80"
                time=" e um time do coração"
                premiados=" 3 a 7 números e o time do coração"
                dias=" às terças, quintas e sábados"
                tabela={<TabelaTimemania />}
              />
            </div>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}
