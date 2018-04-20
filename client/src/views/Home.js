import React, { Component } from 'react';

import Header from '../components/Header';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="container home">
          <h1 className="title top">Boa Sorte!</h1>
          <p>
            Herdei do meu velho e querido pai o hábito de jogar na loteria e,
            quem sabe, um dia tirar o pé do lôdo...
          </p>
          <p>
            Para tornar mais interessantes meus estudos de Desenvolvimento para
            a Web, resolvi criar este projeto, usando os <em>frameworks</em>{' '}
            para "front-end" atualmente na moda: React JS, GraphQL, Apollo JS,
            Bulma CSS e MongoDB.
          </p>
          <p>
            O ponto alto do projeto é um gerador de palpites, para alimentar o
            sonho de ficar rico... pelo menos até conferir o resultado!
          </p>
          <div className="columns is-centered">
            <img src={require('../img/trevo.png')} />
          </div>
        </div>
      </div>
    );
  }
}
