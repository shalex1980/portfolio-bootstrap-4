import React from 'react';
import './style.css';

class Skill extends React.Component {
  componentDidMount () {
    
    /*setTimeout(() => {
      this.fon.style.height = `${this.props.rate}%`;
    },1000);*/
  }
  render() {
    console.log('render');
    const {rate, skill} = this.props;
    //const style = {height: `${rate}%`};
    return (
      <div className="col-sm-6 col-md-3">
        <article className="skill ">
          <div className="skill-fon" ref={this.props.makeList}></div>
          <header className="skill-header"><h3>{ skill }</h3></header>
          <div className="skill-body">
            <span className="skill-rate">{ rate }</span>
          </div>
        </article>
      </div>
      
    )
  }
}

export default Skill;