import React from 'react';
import Waypoint from 'react-waypoint';
import icon_html from '../../../assets/img/icons/icon_html.png';
import icon_plagin from '../../../assets/img/icons/icon_plagin.png';
import icon_anim from '../../../assets/img/icons/icon_anim.png';
import icon_form from '../../../assets/img/icons/icon_form.png';
import './style.css';

class DoingDisplay extends React.Component{

  handleWaipontEnter = () => {
      this.head.classList.add('fadeInUp');
      this.head.classList.add('animated');
  }

  handleWaipontLeave = () => {
      this.head.classList.add('animated');
  }

  render() {

  return (
      <Waypoint onEnter={this.handleWaipontEnter} onLeave={this.handleWaipontLeave}>
        <section id="services" className="pfblock pfblock-gray">
          <div className="container">
            <div className="row">

              <div className="col-sm-6 offset-sm-3">

                <div className="pfblock-header" ref={el => this.head = el } >
                  <h2 className="pfblock-title"> Что я делаю</h2>
                  <div className="pfblock-line"></div>
                  <div className="pfblock-subtitle">
                    No one lights a lamp in order to hide it behind the door: the purpose of light is to create more light, to open people’s eyes, to reveal the marvels around.
                  </div>
                </div>

              </div>

            </div>

            <div className="row align-items-stretch">

              <div className="col-sm-3 col-md-3">

                <div className="iconbox wow slideInLeft">
                  <div className="iconbox-icon">
                   <img src={icon_html} alt=""/>
                  </div>
                  <div className="iconbox-text">
                    <h3 className="iconbox-title">Верстка макетов</h3>
                  </div>
                </div>

              </div>

              <div className="col-sm-3 col-md-3">

                <div className="iconbox wow slideInLeft">
                  <div className="iconbox-icon">
                    <img src={icon_plagin} alt=""/>
                  </div>
                  <div className="iconbox-text">
                    <h3 className="iconbox-title">Подключение плагинов</h3>
                    <div className="iconbox-desc">
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-sm-3 col-md-3">

                <div className="iconbox wow slideInRight">
                  <div className="iconbox-icon">
                    <img className="icon-anim" src={icon_anim} alt=""/>
                  </div>
                  <div className="iconbox-text">
                    <h3 className="iconbox-title">Анимация</h3>
                    <div className="iconbox-desc">
                     <p>Добавление анимации на сайт по вашему макету</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-sm-3 col-md-3">

                <div className="iconbox wow slideInRight">
                  <div className="iconbox-icon">
                    <img src={icon_form} alt=""/>
                  </div>
                  <div className="iconbox-text">
                    <h3 className="iconbox-title">Формы</h3>
                    <div className="iconbox-desc">
                     <p>Настройка отправки форм</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
      </Waypoint>
    )
  }
}

export default DoingDisplay;