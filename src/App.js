import React, { Component } from 'react';
import Header from 'components/Parts/Header/';
import Home from 'components/Pages/Home/';
import Footer from 'components/Parts/Footer/';
import 'animate.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
