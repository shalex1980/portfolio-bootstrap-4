import React from 'react';
import {LOGO} from '../../../data/constants';
import './style.css';

export default () => {
  return (
    <footer id="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <ul className="social-links">
              <li><a href="index.html#" ><i className="fa fa-facebook"></i></a></li>
              <li><a href="index.html#"  ><i className="fa fa-twitter"></i></a></li>
              <li><a href="index.html#"  ><i className="fa fa-google-plus"></i></a></li>
              <li><a href="index.html#"  ><i className="fa fa-linkedin"></i></a></li>
              <li><a href="index.html#"  ><i className="fa fa-envelope"></i></a></li>
            </ul> 
            <p className="copyright">
                {LOGO} © 2018 
            </p>
          </div>
        </div>
      </div>
    </footer>
    )
}