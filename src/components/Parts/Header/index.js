import React from 'react';
import { LOGO } from '../../../data/constants';
import './style.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
  }

  handleToggle = ( ) => {
    this.setState({ toggle: !this.state.toggle});
    let links = [].slice.call(this.nav.querySelectorAll('a'));
    let height = links.reduce((sum, link) => (sum + link.offsetHeight), 10 );
    this.nav.style.height = !this.state.toggle ? `${height}px` : '0px';
   
  }
  handleClick = (ev) => {
    if(document.documentElement.clientWidth <= 992) {
      this.setState({ toggle: !this.state.toggle}); 
      this.nav.style.height = '0px';
    }
  }
  
  render() {
    const {toggle} = this.state;
  return (
    <header className="header">
      <nav className="navbar navbar-custom">
        <div className="container-fluid ">
          <div className="navbar-header d-flex justify-content-between">
            <a className="navbar-brand" href="index.html">{LOGO}</a>
            <button type="button" className="header-navbar-toggler" ref={el => this.toggle = el} onClick={this.handleToggle}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <nav  className={`nav nav-header justify-content-end ${toggle ? 'open' : ''}`} ref={el => this.nav = el }>
            <a className="nav-link" href="#home" onClick={this.handleClick}>Главная</a>
            <a className="nav-link" href="#services" onClick={this.handleClick}>Услуги</a>
            <a className="nav-link" href="#works" onClick={this.handleClick}>Работы</a>
            <a className="nav-link" href="#skills" onClick={this.handleClick}>Навыки</a>
            <a className="nav-link" href="#works" onClick={this.handleClick}>Примеры</a>
            <a className="nav-link" href="#contact" onClick={this.handleClick}>Контакты</a>
          </nav>
        </div>
      
      </nav>
    </header>
    )
}
}
 
export default Header;