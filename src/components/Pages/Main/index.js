import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/';
import './style.css';

export default () => {
  return (
      <main>
        <h1>Main</h1>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    )
  
}