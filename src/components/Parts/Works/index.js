import React from 'react';
import item_1 from 'assets/img/images/item-1.jpg';
import item_2 from 'assets/img/images/item-2.jpg';
import item_3 from 'assets/img/images/item-3.jpg';
import item_4 from 'assets/img/images/item-4.jpg';
import item_5 from 'assets/img/images/item-5.jpg';
import item_6 from 'assets/img/images/item-6.jpg';
import './style.css';

export default () => {
  return (
    <section id="portfolio" className="pfblock">
    <div className="container">
      <div className="row">

        <div className="col-sm-6 col-sm-offset-3">

          <div className="pfblock-header wow fadeInUp">
            <h2 className="pfblock-title">My works</h2>
            <div className="pfblock-line"></div>
            <div className="pfblock-subtitle">
              No one lights a lamp in order to hide it behind the door: the purpose of light is to create more light, to open people’s eyes, to reveal the marvels around.
            </div>
          </div>

        </div>

      </div>
            
            
            <div className="row">
                
                <div className="col-xs-12 col-sm-4 col-md-4">
                    
                    <div className="grid wow zoomIn">
                        <figure className="effect-bubba">
                            <img src={item_1} alt="img01"/>
                            <figcaption>
                                <h2>Crazy <span>Shark</span></h2>
                                <p>Lily likes to play with crayons and pencils</p>
                            </figcaption>     
                        </figure>
                    </div>
                    
                </div>

                <div className="col-xs-12 col-sm-4 col-md-4">
            
                    <div className="grid wow zoomIn">
                        <figure className="effect-bubba">
                            <img src={item_2} alt="img01"/>
                            <figcaption>
                                <h2>Funny <span>Tortoise</span></h2>
                                <p>Lily likes to play with crayons and pencils</p>
                            </figcaption>     
                        </figure>
                    </div>
                    
                </div>
                
                <div className="col-xs-12 col-sm-4 col-md-4">
            
                    <div className="grid wow zoomIn">
                        <figure className="effect-bubba">
                            <img src={item_3} alt="img01"/>
                            <figcaption>
                                <h2>The <span>Hat</span></h2>
                                <p>Lily likes to play with crayons and pencils</p>
                            </figcaption>     
                        </figure>
                    </div>
                    
                </div>
                
                <div className="col-xs-12 col-sm-4 col-md-4">
            
                    <div className="grid wow zoomIn">
                        <figure className="effect-bubba">
                            <img src={item_4} alt="img01"/>
                            <figcaption>
                                <h2>Bang <span>Bang</span></h2>
                                <p>Lily likes to play with crayons and pencils</p>
                            </figcaption>     
                        </figure>
                    </div>
                    
                </div>
                
                <div className="col-xs-12 col-sm-4 col-md-4">
            
                    <div className="grid wow zoomIn">
                        <figure className="effect-bubba">
                            <img src={item_5} alt="img01"/>
                            <figcaption>
                                <h2>Crypton <span>Dude</span></h2>
                                <p>Lily likes to play with crayons and pencils</p>
                            </figcaption>     
                        </figure>
                    </div>
                    
                </div>
                
                <div className="col-xs-12 col-sm-4 col-md-4">
            
                    <div className="grid wow zoomIn">
                        <figure className="effect-bubba">
                            <img src={item_6} alt="img01"/>
                            <figcaption>
                                <h2>Don't <span>Poke</span></h2>
                                <p>Lily likes to play with crayons and pencils</p>
                            </figcaption>     
                        </figure>
                    </div>
                    
                </div>
                
            </div>


    </div>

  </section>
    )
}