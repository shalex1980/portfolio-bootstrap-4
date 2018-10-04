import React from 'react';
import FirstDisplay from '../../Parts/FirstDisplay/';
import DoingDisplay from '../../Parts/DoingDisplay/';
import Works from '../../Parts/Works/';
import Skills from '../../Parts/Skills/';
//import Test from '../../Parts/Test/';
//import Footer from '../../Parts/Footer/';
import './style.css';

export default () => {
  return (
      <div className="content">
        <FirstDisplay />
        <DoingDisplay />
        <Works />
        <Skills />
      </div>
    )
}