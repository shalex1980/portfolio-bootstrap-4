import React from 'react';
import { LOGO } from '../../../data/constants';
import './style.css';

export default () => {
  return (
  <header className="header">
    <nav className="navbar navbar-custom" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
                  {/*<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#custom-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>*/}
                  <a className="navbar-brand" href="index.html">{LOGO}</a>
                </div>
        
          <nav  className="nav navbar-nav1 justify-content-end">
            <a className="nav-link" href="#home">Главная </a>
            <a className="nav-link" href="#services">Услуги</a>
            <a className="nav-link" href="#works">Работы</a>
            <a className="nav-link" href="#skills">Навыки</a>
            <a className="nav-link" href="#examples">Примеры</a>
            <a className="nav-link" href="#contact">Контакты</a>
          </nav>
        </div>
    
    </nav>
  </header>


    )
}