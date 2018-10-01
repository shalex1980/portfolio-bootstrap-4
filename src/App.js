import React, { Component } from 'react';
import Header from 'components/Parts/Header/';
import Main from 'components/Pages/Main/';
import Footer from 'components/Parts/Footer/';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
