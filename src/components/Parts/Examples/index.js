import React from 'react';
import Waypoint from 'react-waypoint';
import Tabs from '../Tabs';
import './style.css';

class Examples extends React.Component{

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
        <section id="examples" className="pfblock pfblock-gray">
          <div className="container">
            <div className="row">

              <div className="col-sm-6 offset-sm-3">

                <div className="pfblock-header" ref={el => this.head = el } >
                  <h2 className="pfblock-title"> Примеры кода и сборок </h2>
                  <div className="pfblock-line"></div>
                  <div className="pfblock-subtitle">
                    Для удобства я выложил примеры макета. 
                    Чтобы увидели качество кода, семантическую верстку, структуру файлов сборки.
                    При необходимости структура обсуждается меняется под конкретный проект как требуется заказчику.
                  </div>
                </div>

              </div>

            </div>
              <Tabs />
          </div>
        </section>
      </Waypoint>
    )
  }
}

export default Examples;