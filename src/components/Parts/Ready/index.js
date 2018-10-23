import React from 'react';
import Waypoint from 'react-waypoint';
import './style.css';

class Ready extends React.Component {
   handleWaipontEnter = () => {
      this.head.classList.add('slideInRight');
      this.head.style.animationDuration = '1.1s';
     // this.head.classList.add('animated');
      this.free.classList.add('slideInRight');
      this.free.style.animationDuration = '1.3s';
      //this.free.classList.add('animated');
      this.write.classList.add('slideInRight');
      this.write.style.animationDuration = '1.5s';
      //this.write.classList.add('animated');
  }

  handleWaipontLeave = () => {
      //this.head.classNameList.add('animated');
  }
  render() {
    return (
      <Waypoint onEnter={this.handleWaipontEnter} onLeave={this.handleWaipontLeave}>
        <section className="calltoaction">
          <div className="container-fluid">

            <div className="row">

              <div className="col-md-12 col-lg-12">
                <h2 className=""  ref={el => this.head = el }>ГОТОВЫ НАЧАТЬ?</h2>
                <p className="calltoaction-decription " ref={el => this.free = el }>
                  Я свободен для фриланс проектов.
                </p>
              </div>

              <div className="col-md-12 col-lg-12 calltoaction-btn " ref={el => this.write = el }>
                <a href="#contact" className="btn btn-lg">Написать</a>
              </div>

            </div>
          </div>
        </section>
      </Waypoint>
      )
  }
}

export default Ready;
