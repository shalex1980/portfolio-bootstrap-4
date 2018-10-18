import React from 'react';
import Waypoint from 'react-waypoint';
import Unit from '../Unit';
import { works } from '../../../data/';
import './style.css';

class Works extends  React.Component {
  handleWaipontEnter = () => {
      this.head.classList.add('fadeInUp');
      this.head.classList.add('animated');
  }

  handleWaipontLeave = () => {
      this.head.classList.add('animated');
  }
  render() {
    const tmp = works.map((item => <Unit key={item.id} item={item} />) );
    return (
      <Waypoint onEnter={this.handleWaipontEnter} onLeave={this.handleWaipontLeave}>
        <section id="works" className="pfblock">
          <div className="container">
            <div className="row">

              <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3">

                <div className="pfblock-header" ref={el => this.head = el} >
                  <h2 className="pfblock-title">Мои работы</h2>
                  <div className="pfblock-line"></div>
                  <p className="pfblock-subtitle">
                    Опыт моей работы вы можете увидеть по некоторым ниже выложенным примерам. 
                    Надеюсь что то  сможет вас заинтересовать.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">           
                {tmp};
                
            </div>
          </div>
        </section>
      </Waypoint>
      )
  }
}

export default Works;