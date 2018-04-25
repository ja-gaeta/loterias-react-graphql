import React, { Component } from 'react';

export default class DetalhesLoto extends Component {
  state = {
    isActive: false
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  render() {
    return (
      <div>
        <div className="column is-flex">
          <div className="card">
            <div className="content">
              <h1>Detalhes</h1>
              <p>
                Escolha {this.props.range} números dentre os{' '}
                {this.props.numeros} do volante{this.props.time}. São premiados
                os acertadores de
                {this.props.premiados}. Os sorteios ocorrem
                {this.props.dias}.
              </p>
              <a
                id="preco-apostas"
                className="button is-link"
                onClick={this.toggleModal}
              >
                Preço das Apostas
              </a>
            </div>
          </div>
        </div>
        <div className={this.state.isActive ? 'modal is-active' : 'modal'}>
          <div className="modal-background" onClick={this.toggleModal} />
          <div className="modal-content">
            <div className="columns is-centered">{this.props.tabela}</div>
          </div>
          <button
            class="modal-close is-large"
            aria-label="close"
            onClick={this.toggleModal}
          />
        </div>
      </div>
    );
  }
}
