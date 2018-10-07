import React from 'react';
import FirstDisplay from '../../Parts/FirstDisplay/';
import DoingDisplay from '../../Parts/DoingDisplay/';
import Works from '../../Parts/Works/';
import Skills from '../../Parts/Skills/';
import Ready from '../../Parts/Ready/';
import Contact from '../../Parts/Contact/';
import Examples from '../../Parts/Examples/';
import './style.css';

export default () => {
  return (
      <div className="content">
        <FirstDisplay />
        <DoingDisplay />
        <Works />
        <Skills /> 
        <Ready />
        <Examples />
        <Contact />
      </div>
    )
}