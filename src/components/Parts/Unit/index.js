import React from 'react';
import './style.css';

class Unit extends React.Component {
  render() {
    const {preview, metods, name, source} = this.props.item;
    return (
      <div className="col-xs-12 col-sm-4 col-md-4">
        <div className="grid">
          <a href={source} target="_blank"> 
            <figure className="effect-bubba">
              <img src={preview} alt="img01"/>
              <figcaption>
                  <h2> { name }</h2>
                  <p>{ metods.join(", ") }</p>
              </figcaption>     
            </figure>
          </a>
           
        </div>
      </div>
  )
  }
}

export default Unit;