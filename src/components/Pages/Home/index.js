import React from 'react';
import FirstDisplay from '../../Parts/FirstDisplay/';
import DoingDisplay from '../../Parts/DoingDisplay/';
import Works from '../../Parts/Works/';
import Footer from '../../Parts/Footer/';
import './style.css';

export default () => {
  return (
      <div className="content">
        <FirstDisplay />
        <DoingDisplay />
        <Works />
      </div>
    )
}