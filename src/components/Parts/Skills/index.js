import React from 'react';
import Skill from '../Skill';
import Waypoint from 'react-waypoint';
import { skills } from '../../../data/';
import './style.css';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.list = [];
  }
  handleMakeList = (el) => {
    this.list.push(el);
  }
  handleWaipontEnter = () => {
      this.head.classList.add('fadeInUp');
      this.head.classList.add('animated');
      this.list.map((item, ind ) => item.style.height = `${skills[ind].rate}%`);
  }
  handleWaipontLeave = () => {
      this.head.classList.add('animated');
  }

  render() {
    const tmp = skills.map(item => <Skill key={item.id} rate={item.rate} skill={item.skill} makeList={this.handleMakeList} />)
     return (
    <Waypoint onEnter={this.handleWaipontEnter} onLeave={this.handleWaipontLeave}>
      <section className="pfblock pfblock-gray" id="skills">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                <div className="pfblock-header" ref={el => this.head = el } >
                  <h2 className="pfblock-title">Мои навыки</h2>
                  <div className="pfblock-line"></div>
                  <div className="pfblock-subtitle">
                        Я постоянно изучаю что то нoвое и повышаю свои навыки. 
                        Ниже навыки которыми я обладаю и применяю.

                  </div>
                </div>
              </div>
            </div>
            <div className="row skills">
            {tmp}
            </div>
          </div>
      </section>
    </Waypoint>
    )
  }
 
}

export default Skills;