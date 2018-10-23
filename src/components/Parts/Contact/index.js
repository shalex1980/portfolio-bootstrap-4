import React from 'react';
import Waypoint from 'react-waypoint';
import './style.css';

class Contact extends React.Component {
  state = {
    email : '',
    name: '',
    message: '',
    nameError: false,
    messageError: false,
    btnDefault: "Отправить сообщение",
    btnSucceess: "Сообщение отправлено",
    btnError: "Ошибка отравки ",
  }

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
  _validName () {
    if(! /\d/.test(this.state.name) && this.state.name.length > 2) {
      this.setState({nameError: false});
      return true
    }
    else {
      this.setState({nameError: true});
      return false;
    }
  }
  _validMessage () {
    if(this.state.message.length > 10) {
      this.setState({messageError: false});
      return true;
    }
    else {
      this.setState({messageError: true});
      return false;
    }
  }
  _sendSucceess = () => {
    this.btn.innerHTML = this.state.btnSucceess;
    this.setState({
        name: " ",
        email: " ",
        message: " "
    });
    setTimeout(() => {
      this.btn.innerHTML = this.state.btnDefault;
    }, 3000);
  }
  _sendError = () => {
    this.btn.innerHTML = this.state.btnError;
    this.setState({
        name: " ",
        email: " ",
        message: " "
    });
    setTimeout(() => {
      this.btn.innerHTML = this.state.btnDefault;
    }, 2000);
  }
  _send_mail() {

  //let  bodyPost = 'name=' + encodeURIComponent(this.state.name) +'&message=' + encodeURIComponent(this.state.message);
  let formData = new FormData();
      formData.append('name', this.state.name);
      formData.append('email', this.state.email);
      formData.append('message', this.state.message);

    fetch('./send.php',{
      method: 'POST',
      body: formData
    }).then(this._sendSucceess, this._sendError);
 
  }
  handleChange = (ev) => {
    let name= ev.target.name;
    let value = ev.target.value;
    this.setState({[name]: value});

  }
  handleSubmit = (ev) => {
      ev.preventDefault();
      let valMes = this._validMessage();
      let valNam = this._validName();
      if(valNam && valMes) {
        this._send_mail();
      }
  }
  render() {
    return (
      <Waypoint onEnter={this.handleWaipontEnter} >
        <section id="contact" className="pfblock">
          <div className="container-fluid">
            <div className="row">

              <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3">

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

              <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3">

                <form id="contact-form" onSubmit={this.handleSubmit}>
                  <div className="ajax-hidden">
                    <div className="form-group " ref={el => this.wrap_name = el}>
                      <label className="sr-only" htmlFor="c_name">Name</label>
                      <input type="text" id="c_name" className="form-control"  name="name" placeholder="Name" value = {this.state.name} onChange={this.handleChange} required />
                      <p className={`form-error ${this.state['nameError'] ? 'open' : ' '}`}>
                        Имя должно быть не менее 2-х символов и не содержать цифр
                      </p>
                    </div>

                    <div className="form-group" ref={el => this.wrap_email = el}>
                      <label className="sr-only" htmlFor="c_email">Email</label>
                      <input type="email" id="c_email" className="form-control"  name="email" placeholder="E-mail" value = {this.state.email} onChange={this.handleChange} required />
                    </div>

                    <div className="form-group" ref={el => this.wrap_mes = el}>
                      <textarea className="form-control" id="c_message"  name="message" rows="7" placeholder="Message" value = {this.state.message} onChange={this.handleChange} required ></textarea>
                      <p className={`form-error ${this.state['messageError'] ? 'open' : ' '}`}>
                        Сообщение должно содержать более 10 символов
                      </p>
                    </div>

                    <button type="submit" className="btn btn-lg btn-block" ref={el => this.btn = el} >Отправить сообщение</button>
                  </div>
                  <div className="ajax-response"></div>
                </form>

              </div>

            </div>
            <div className="row contact-soc">
              <div className="col-sm-6 col-md-5 contact-block">
                <p>
                  <i className="fa fa-skype"></i>
                  shalexsandr1980
                </p>
              </div>
              <div className="col-sm-6 col-md-5 offset-md-2 contact-block">
                <p>
                  <i className="fa fa-telegram"></i>
                  @Alek_Sh
                </p>
              </div>
            </div>
          </div>
        </section>
      </Waypoint>
      )
  }
}

export default Contact;
