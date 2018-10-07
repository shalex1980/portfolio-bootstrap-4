import React from 'react';
import Waypoint from 'react-waypoint';
import './style.css';

class Contact extends React.Component {
   handleWaipontEnter = () => {
      this.wrap_name.classList.add('fadeInUp');
      this.wrap_name.style.animationDuration = '1.1s';
      this.wrap_email.classList.add('fadeInUp');
      this.wrap_email.style.animationDuration = '1.5s';
      this.wrap_mes.classList.add('fadeInUp');
      this.wrap_mes.style.animationDuration = '1.9s';
      this.btn.classList.add('fadeInUp');
      this.btn.style.animationDuration = '2.1s';
  }

  handleWaipontLeave = () => {
      //this.head.classNameNameList.add('animated');
  }
  render() {
    return (
      <Waypoint onEnter={this.handleWaipontEnter} onLeave={this.handleWaipontLeave}>
        <section id="contact" className="pfblock">
          <div className="container">
            <div className="row">

              <div className="col-sm-6 offset-sm-3">

                <div className="pfblock-header">
                  <h2 className="pfblock-title">Напишите мне</h2>
                  <div className="pfblock-line"></div>
                  <div className="pfblock-subtitle">
                    Если у вас есть вопросы. Вы хотите заказать работу или хотите обсудить проект, есть предложения. Пишите постараюсь быть полезным.
                  </div>
                </div>

              </div>

            </div>

            <div className="row">

              <div className="col-sm-6 offset-sm-3">

                <form id="contact-form" role="form">
                  <div className="ajax-hidden">
                    <div className="form-group " ref={el => this.wrap_name = el}>
                      <label className="sr-only" htmlFor="c_name">Name</label>
                      <input type="text" id="c_name" className="form-control"  name="c_name" placeholder="Name" ></input>
                    </div>

                    <div className="form-group" ref={el => this.wrap_email = el}>
                      <label className="sr-only" htmlFor="c_email">Email</label>
                      <input type="email" id="c_email" className="form-control"  name="c_email" placeholder="E-mail"></input>
                    </div>

                    <div className="form-group" ref={el => this.wrap_mes = el}>
                      <textarea className="form-control" id="c_message"  name="c_message" rows="7" placeholder="Message"></textarea>
                    </div>

                    <button type="submit" className="btn btn-lg btn-block" ref={el => this.btn = el}>Send Message</button>
                  </div>
                  <div className="ajax-response"></div>
                </form>

              </div>

            </div>
          </div>
        </section>
      </Waypoint>
      )
  }
}

export default Contact;
