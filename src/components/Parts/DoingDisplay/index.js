import React from 'react';
import './style.css';

export default () => {
  return (
    <section id="services" className="pfblock pfblock-gray">
    <div className="container">
      <div className="row">

        <div className="col-sm-6 offset-sm-3">

          <div className="pfblock-header wow fadeInUp">
            <h2 className="pfblock-title"> Что я делаю</h2>
            <div className="pfblock-line"></div>
            <div className="pfblock-subtitle">
              No one lights a lamp in order to hide it behind the door: the purpose of light is to create more light, to open people’s eyes, to reveal the marvels around.
            </div>
          </div>

        </div>

      </div>

      <div className="row align-items-stretch">

        <div className="col-sm-3 col-md-6">

          <div className="iconbox wow slideInLeft">
            <div className="iconbox-icon">
              <span className="icon-magic-wand"></span>
            </div>
            <div className="iconbox-text">
              <h3 className="iconbox-title">Верстка макетов</h3>
              <ul className="list-unstyled">
                <li><b>Валидная</b> верстка</li>
                <li><b>Адаптивная</b> верстка</li>
                <li><b>Резиновая</b> верстка</li>
                <li><b>Фиксированая</b> верстка</li>
              </ul>
            </div>
          </div>

        </div>

        <div className="col-sm-3 col-md-6">

          <div className="iconbox wow slideInLeft">
            <div className="iconbox-icon">
              <span className="icon-puzzle"></span>
            </div>
            <div className="iconbox-text">
              <h3 className="iconbox-title">Подключение плагинов</h3>
              <div className="iconbox-desc">
                <ul className="list-unstyled">
                <li>Подключение слайдеров </li>
                <li>Настройка плагинов</li>
              </ul>
              </div>
            </div>
          </div>

        </div>

        <div className="col-sm-3 col-md-6">

          <div className="iconbox wow slideInRight">
            <div className="iconbox-icon">
              <span className="icon-badge"></span>
            </div>
            <div className="iconbox-text">
              <h3 className="iconbox-title">Анимация</h3>
              <div className="iconbox-desc">
               <p>Добавление анимации на сайт по вашему макету</p>
              </div>
            </div>
          </div>

        </div>

        <div className="col-sm-3 col-md-6">

          <div className="iconbox wow slideInRight">
            <div className="iconbox-icon">
              <span className="icon-question"></span>
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
    )
}