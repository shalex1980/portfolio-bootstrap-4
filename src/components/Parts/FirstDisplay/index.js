import React from 'react';
import './style.css';

export default () => {
  return (
    <section id="home" className="pfblock-image screen-height">
      <div className="home-overlay"></div>
      <div className="intro">
        <div className="start">Hello, my name is John Doe and I am</div>
        <h1>Full Stack Web Developer</h1>
        <div className="start">creating modern and responsive Web Application</div>
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