import React from 'react';
import './style.css';

class Skill extends React.Component {
  render() {
    console.log('render');
    const { skill, icon} = this.props;
    return (
      <div className="col-sm-6 col-md-3">
        <article className="skill">    
          <div className="skill-body">
              <img src={icon} alt="skill"/>
          </div>
          <h3 className="skill-title">{ skill }</h3>
        </article>
      </div>
      
    )
  }
}

export default Skill;