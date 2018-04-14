import React, { Component } from 'react';

import Header from '../components/Header';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h1 className="title top">Home</h1>
        </div>
      </div>
    );
  }
}
