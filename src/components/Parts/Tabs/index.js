import React from 'react';
import './style.css';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "maket"
    }
    this.tab; 
  }

  handleClick(name) {
    return (el) => {
      if(this.tab !== el.target ) {
        if(this.tab) {
          this.tab.classList.remove('active');
        }
        this.tab = el.target;
        this.tab.classList.add('active');
      } 
      this.setState({tab: name});
    }
  } 

  render() {
    const tabName = this.state.tab;
    return (
      <div className="tabs row">
       <div className="col-3">
          <div className="list-group" >
            <a className="list-group-item " onClick={this.handleClick('maket')}>Макет</a>
            <a className="list-group-item" onClick={this.handleClick('html5')}> HTML5</a>
            <a className="list-group-item " onClick={this.handleClick('style')}>Стили</a>
            <a className="list-group-item " onClick={this.handleClick('file')}>Файлы</a>
            <a className="list-group-item " onClick={this.handleClick('place')}>Сборка</a>
            <a className="list-group-item " onClick={this.handleClick('bem')}>БЕМ</a>
          </div>
        </div>
        <div className="col-8">
          <div className="tab-content">
            <div className={`tab-pane fade ${tabName === 'maket' ? 'show active': ' '}` }>This fierst Page</div>
            <div className={`tab-pane fade ${tabName === 'html5' ? 'show active': ' '}` } >HTML5</div>
            <div className={`tab-pane fade ${tabName === 'style' ? 'show active': ' '}` } >STyle</div>
            <div className={`tab-pane fade ${tabName === 'file' ? 'show active': ' '}` } >File</div>
            <div className={`tab-pane fade ${tabName === 'place' ? 'show active': ' '}` } >Webpack</div>
            <div className={`tab-pane fade ${tabName === 'bem' ? 'show active': ' '}` } >BEM</div>
          </div>
        </div>
      </div>
      )
  }
}

export default Tabs;