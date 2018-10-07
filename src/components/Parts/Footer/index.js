import React from 'react';
import {LOGO} from '../../../data/constants';
import './style.css';

export default () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <ul className="social-links">
              <li><a href="index.html#" className="wow fadeInUp"><i className="fa fa-facebook"></i></a></li>
              <li><a href="index.html#" className="wow fadeInUp" data-wow-delay=".1s"><i className="fa fa-twitter"></i></a></li>
              <li><a href="index.html#" className="wow fadeInUp" data-wow-delay=".2s"><i className="fa fa-google-plus"></i></a></li>
              <li><a href="index.html#" className="wow fadeInUp" data-wow-delay=".4s"><i className="fa fa-pinterest"></i></a></li>
              <li><a href="index.html#" className="wow fadeInUp" data-wow-delay=".5s"><i className="fa fa-envelope"></i></a></li>
            </ul> 
            <p className="copyright">
                {LOGO} © 2015 
            </p>
          </div>
        </div>
      </div>
    </footer>
    )
}