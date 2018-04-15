import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div
        className="navbar is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img
              src="../img/loterias-caixa.png"
              width="112"
              height="28"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/quina" className="navbar-item">
              <h1 className="subtitle">Quina</h1>
            </Link>
            <Link to="/megasena" className="navbar-item">
              <h1 className="subtitle">Megasena</h1>
            </Link>
            <Link to="/lotofacil" className="navbar-item">
              <h1 className="subtitle">Lotofácil</h1>
            </Link>
            <Link to="/duplasena" className="navbar-item">
              <h1 className="subtitle">Duplasena</h1>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
