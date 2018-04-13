import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import QuinaList from './Quina';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h1>Loterias CEF</h1>
          <QuinaList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
