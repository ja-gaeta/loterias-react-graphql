import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import ResLotofacil from '../components/resultados/ResLotofacil';
import Header from '../components/Header';
import DetalhesLoto from '../components/detalhes/DetalhesLoto';
import TabelaLotofacil from '../components/detalhes/TabelaLotofacil';

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
          <div className="container loto-body">
            <div className="columns">
              <div className="column is-one-third is-flex">
                <div className="card">
                  <div className="card-image">
                    <img
                      src={require('../img/lotofacil.png')}
                      alt="Logo da Lotofácil"
                    />
                  </div>

                  <p className="title is-4">Último Resultado</p>

                  <div className="content">
                    <ResLotofacil />
                  </div>
                </div>
              </div>
              <DetalhesLoto
                range=" de 15 a 18"
                numeros="25"
                premiados=" quinze, quatorze, treze, doze e onze números"
                dias=" às segundas, quartas e sextas-feiras"
                tabela={<TabelaLotofacil />}
              />
            </div>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}
