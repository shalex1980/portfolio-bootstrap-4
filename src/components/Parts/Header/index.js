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
    let height = links.reduce((hgt, link) => (hgt + link.offsetHeight), 0 );
    this.nav.style.height = !this.state.toggle ? `${height}px` : '0px';
    console.log( 'toggle', links.length, "  == ", height);
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
}
 
export default Header;