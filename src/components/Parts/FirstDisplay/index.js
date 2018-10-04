import React from 'react';
import './style.css';

export default () => {
  return (
    <section id="home" className="pfblock pfblock-intro">
      <div className="intro">
        <div className="start">Приветствую меня зовут Александр и я </div>
        <h1>Web Developer <br />
         <small>( Верстальщик - Фронтенд )</small>
         </h1>
        <div className="start">Верстаю проекты на основе ваших макетов</div>
      </div>

          <a href="#services">
      <div className="scroll-down">
              <span>
                  <i className="fa fa-angle-down fa-2x"></i>
              </span>
      </div>
          </a>

    </section>
    )
}