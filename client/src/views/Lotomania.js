import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import ResLotomania from '../components/resultados/ResLotomania';
import Header from '../components/Header';
import DetalhesLoto from '../components/detalhes/DetalhesLoto';
import TabelaLotomania from '../components/detalhes/TabelaLotomania';

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
          <div className="container loto-body">
            <div className="columns">
              <div className="column is-one-third is-flex">
                <div className="card">
                  <div className="card-image">
                    <img
                      src={require('../img/lotomania.png')}
                      alt="Logo da Mega Sena"
                    />
                  </div>

                  <p className="title is-4">Último Resultado</p>

                  <div className="content">
                    <ResLotomania />
                  </div>
                </div>
              </div>
              <DetalhesLoto
                range=" 50"
                numeros="100"
                premiados=" quinze, quatorze, treze, doze e onze números"
                dias=" às terças e sextas-feiras"
                tabela={<TabelaLotomania />}
              />
            </div>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}
