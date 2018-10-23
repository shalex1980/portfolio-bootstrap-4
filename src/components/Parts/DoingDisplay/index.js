import React from 'react';
import Waypoint from 'react-waypoint';
import icon_html from '../../../assets/img/icons/icon_html.png';
import icon_plagin from '../../../assets/img/icons/icon_plagin.png';
import icon_anim from '../../../assets/img/icons/icon_anim.png';
import icon_form from '../../../assets/img/icons/icon_form.png';
import './style.css';

class DoingDisplay extends React.Component{
  constructor(props) {
    super(props);
    this.articles = [];
  }

  handleWaipontEnter = () => {
      this.head.classList.add('fadeInUp');
      this.head.classList.add('animated');
      this.articles.forEach((item, ind) => {
        if(ind < 2) {
          item.classList.add('slideInLeft');
          item.classList.add('animated');
        }
        else {
          item.classList.add('slideInRight');
          item.classList.add('animated');
        }
      })
  }

  handleWaipontLeave = () => {
      this.head.classList.add('animated');
  }

  render() {
      console.log(this.articles,'!!!!')
  return (
      <Waypoint onEnter={this.handleWaipontEnter} onLeave={this.handleWaipontLeave}>
        <section id="services" className="pfblock pfblock-gray">
          <div className="container-fluid">
            <div className="row">

              <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3 ">

                <div className="pfblock-header" ref={el => this.head = el } >
                  <h2 className="pfblock-title"> Что я делаю</h2>
                  <div className="pfblock-line"></div>
                  <p className="pfblock-subtitle">
                    Верстаю по стандартам W3C (валидный код), 
                    соблюдаю кроссбраузерность. Имею много опыта верстки проектов с адаптивным дизайном (Responsive Web Design). 
                    Семантическая верстка применение современных стандартов HTML5. Подключаю слайдеры, плагины.
                  </p>
                </div>

              </div>

            </div>

            <div className="row align-items-stretch">

              <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-3">

                <article className="iconbox"  ref={el => this.articles.push(el) } >
                  <div className="iconbox-icon">
                   <img src={icon_html} alt=""/>
                  </div>
                  <div className="iconbox-text">
                    <h3 className="iconbox-title">Верстка макетов</h3>
                  </div>
                </article>

              </div>

              <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-3">

                <article className="iconbox"  ref={el => this.articles.push(el)}>
                  <div className="iconbox-icon">
                    <img src={icon_plagin} alt=""/>
                  </div>
                  <div className="iconbox-text">
                    <h3 className="iconbox-title">Подключение плагинов</h3>
                    <div className="iconbox-desc">
                    </div>
                  </div>
                </article>

              </div>

              <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-3">

                <article className="iconbox"   ref={el => this.articles.push(el) }>
                  <div className="iconbox-icon">
                    <img className="icon-anim" src={icon_anim} alt=""/>
                  </div>
                  <div className="iconbox-text">
                    <h3 className="iconbox-title">Анимация</h3>
                    <div className="iconbox-desc">
                     <p>Добавление анимации на сайт по вашему макету</p>
                    </div>
                  </div>
                </article>

              </div>

              <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-3">

                <article className="iconbox"   ref={el => this.articles.push(el)}>
                  <div className="iconbox-icon">
                    <img src={icon_form} alt=""/>
                  </div>
                  <div className="iconbox-text">
                    <h3 className="iconbox-title">Формы</h3>
                    <div className="iconbox-desc">
                     <p>Настройка отправки форм</p>
                    </div>
                  </div>
                </article>

              </div>

            </div>
          </div>
        </section>
      </Waypoint>
    )
  }
}

export default DoingDisplay;