import React from 'react';
import './style.css';

export default () => {
  return (
    <section className="do wrap">
      <div className="container">
        <div className="row">

          <div className="col-sm-6 offset-sm-3">

            <div className="do-info text-center">
              <h2 className="">Что я делаю </h2>
              <div className="pfblock-line"></div>
              <p >
                No one lights a lamp in order to hide it behind the door: the purpose of light is to create more light, to open people’s eyes, to reveal the marvels around.
              </p>
            </div>

          </div>

        </div>
        <div className="row">
          <div className="col-sm-3">
            <article className="do-art">
              <header className="do-art__head">
                <p className="do-art__logo">&lt;html/&gt;</p>
                <h4>Верстка</h4>
              </header>
              <div className="do-art__main">
                <ul className="list-unstyled">
                  <li>Фиксированая верстка</li>
                  <li>Адаптивная верстка</li>
                  <li>Резиновая верстка</li>
                </ul>
              </div>
            </article>
          </div>
          <div className="col-sm-3">
            <article className="do-art">
              <header className="do-art__head">
                <p className="do-art__logo">&lt;animation/&gt;</p>
                <h4>Анимация</h4>
              </header>
              <div className="do-art__main">
              </div>
            </article>
          </div>
          <div className="col-sm-3">
            <article className="do-art">
              <header className="do-art__head">
                <p className="do-art__logo">&lt;img/&gt;</p>
                <h4>Слайдеры</h4>
              </header>
              <div className="do-art__main">
              </div>
            </article>
          </div> 
          <div className="col-sm-3">
            <article className="do-art">
              <header className="do-art__head">
                <p className="do-art__logo">&lt;form/&gt;</p>
                <h4>Формы</h4>
              </header>
              <div className="do-art__main">
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    )
}