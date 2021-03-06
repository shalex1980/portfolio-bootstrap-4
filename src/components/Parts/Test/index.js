import React from 'react';
import Waypoint from 'react-waypoint';
import $ from 'jquery';
//import './jquery.easypiechart.js';
import './style.css';

class Test extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  componentDidMount() {

  }
  handleWaipontEnter = () => {
    console.log('Enter');
  }
  handleWaipontLeave = () => {
    console.log('Leave');
  }
  render() {
  const stylObj = {width: '140px', height: '140px', lineHeight: '140px'};
  return (
    <Waypoint onEnter={this.handleWaipontEnter} onLeave={this.handleWaipontLeave}>
      <section className="pfblock pfblock-gray" id="skills">
      
        <div className="container">
        
          <div className="row skills">
            
            <div className="row">

                          <div className="col-sm-6 col-sm-offset-3">

                              <div className="pfblock-header wow fadeInUp">
                                  <h2 className="pfblock-title">My Skills!!!!</h2>
                                  <div className="pfblock-line"></div>
                                  <div className="pfblock-subtitle">
                                      No one lights a lamp in order to hide it behind the door: the purpose of light is to create more light, to open people’s eyes, to reveal the marvels around.
                                  </div>
                              </div>

                          </div>

                      </div>
            
            <div className="col-sm-6 col-md-3 text-center">
              <span data-percent="80" className="chart easyPieChart" style={stylObj} >
                  <span className="percent">80</span>
              </span>
              <h3 className="text-center">Programming</h3>
            </div>
            <div className="col-sm-6 col-md-3 text-center">
              <span ref={el => this.chart_1 = el} data-percent="90" className="chart easyPieChart" style={stylObj} >
                <span className="percent">90</span>
              </span>
              <h3 className="text-center">Design</h3>
            </div>
            <div className="col-sm-6 col-md-3 text-center">
              <span ref={el => this.chart_2 = el} data-percent="85" className="chart easyPieChart" style={stylObj} >
                <span className="percent">85</span>
              </span>
              <h3 className="text-center">Marketing</h3>
            </div>
            <div className="col-sm-6 col-md-3 text-center">
              <span ref={el => this.chart_3 = el} data-percent="95" className="chart easyPieChart" style={stylObj} >
                <span className="percent">95</span>
              </span>
              <h3 className="text-center">UI / UX</h3>
            </div>
            
          </div>
        
        </div>
      
      </section>
    </Waypoint>
      )

  }
}

export default Test;