import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  state = {
    isActive: false
  };

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  render() {
    return (
      <div
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        style={{
          borderBottom: 'solid 1px #dddddd'
        }}
      >
        <div className="navbar-brand" id="brand">
          <Link to="/" className="navbar-item">
            <img src={require('../img/trevo-logo.png')} />
            <h1 className="title" style={{ marginLeft: 1 + 'rem' }}>
              <em>Loterias G++</em>
            </h1>
          </Link>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            style={{ color: '#fff' }}
            onClick={this.toggleNav}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div
          className={
            this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'
          }
          id="navMenu"
        >
          <div className="navbar-end">
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
            <Link to="/lotomania" className="navbar-item">
              <h1 className="subtitle">Lotomania</h1>
            </Link>
            <Link to="/timemania" className="navbar-item">
              <h1 className="subtitle">Timemania</h1>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
