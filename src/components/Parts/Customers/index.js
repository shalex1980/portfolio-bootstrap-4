import React from 'react';
import Waypoint from 'react-waypoint';
import './style.css';

class Customers extends React.Component {
   handleWaipontEnter = () => {
    this.head.classList.add('fadeInUp');
    this.head.classList.add('animated');
    //this.head.style.animationDelay = '.3s';
  }

  handleWaipontLeave = () => {
      //this.head.classNameNameNameList.add('animated');
  }
  render() {
    return (
      <Waypoint onEnter={this.handleWaipontEnter} onLeave={this.handleWaipontLeave}>
        <section id="testimonials" className="pfblock pfblock-gray">
          <div className="container">
                  
                  <div className="row">
            <div className="col-sm-6 offset-sm-3">
              <div className="pfblock-header" ref={el => this.head = el} >
                <h2 className="pfblock-title">What my clients say</h2>
                <div className="pfblock-line"></div>
                <div className="pfblock-subtitle">
                  No one lights a lamp in order to hide it behind the door: the purpose of light is to create more light, to open people’s eyes, to reveal the marvels around.
                </div>
              </div>
              </div>
            </div>
            <div className="row">
              <div id="cbp-qtrotator" className="cbp-qtrotator">
                <div className="cbp-qtcontent">
                  <img src="assets/images/client-1.jpg" alt="client-1" />
                  <blockquote>
                    <p>Work with John was a pleasure. He understood exactly what I wanted and created an awesome site for my company.</p>
                    <footer>Pino Caruso</footer>
                  </blockquote>
                </div>
                <div className="cbp-qtcontent">
                    <img src="assets/images/client-2.jpg" alt="client-2" />
                    <blockquote>
                      <p>I'm really happy with the results. Get 100% satisfaction is difficult but Alex got it without problems.</p>
                      <footer>Jane Doe</footer>
                    </blockquote>
                </div>
              </div>    
            </div>
          </div>
        </section>
      </Waypoint>
      )
  }
}

export default Customers;
