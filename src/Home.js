import React from 'react';
import './Home.css';
import Product from './Product';

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bp from './image/bg4.png'
import Bp2 from './image/bp2.png'
import Bp3 from './image/bp3.png'


import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
function Home() {
  return (
    <div className="home">
      <Carousel  className="home__container" autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000}>
          <Link to="/">
            <div>
                <img className='home-image'
                    src={Bp}
                    alt="Amazom_Image"
                />      
          </div>
           </Link>
            <Link to="/">
                <div>
                  <img className='home-image'
                      src={Bp2}
                      alt="Amazom_Image"
                  />
            </div>
            </Link>
           <Link to="/">
                <div>
                  <img className='home-image'
                      src={Bp3}
                      alt="Amazom_Image"
                  />           
            </div>
          </Link>
          <Link to="/">
           <div>
              
                <img className='home-image'
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="Amazom_Image"
                />   
             </div>   
            </Link>
      </Carousel>
        
    
        <div className="home__row">
          <Product
            id="12321341"
            title="New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)"
            price={1669}
            rating={5}
            image="https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_UY218_.jpg"
          />
          <Product
            id="49538094"
            title="Epic Racing Professional Gaming Chair with Adjustable Height, Full Recline and Headrest/Lumbar Support"
            price={159.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71t8UBllIgL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="49038501"
            title="SAM. Women's Carson Bomber"
            price={425.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71Zb+SuPGeL._AC_UL1500_.jpg"
        />
        

          <Product
            id="99903851"
            title="Szory Women's Down Thicken Winter Coat Quilted Warm Puffer Jacket with Removable Fur Hood"
            price={65.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/G/01/AMAZON_FASHION/2022/Premium_Brands/Winter_2022/LoomBubbler/Premium_LoomBubbler_1000x1000_Outerwear.jpg"
          />
          <Product
            id="3254354345"
            title="UGG Women's Frankie Sherpa Trucker Jacket"
            price={198.99}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81ItDVnYylL._AC_UL1500_.jpg"
          />
      </div>
      
 <div className="home__row">
          <Product
            id="903850"
            title="2021 1080P Streaming Business Webcam with Microphone & Privacy Cover, AutoFocus, NexiGo N930P HD USB Web Camera, for Zoom Meeting YouTube Skype FaceTime"
            price={69.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61KFXbnW13L._AC_UY218_.jpg"
          />
          <Product
            id="8903851"
            title="SAMSUNG 85-inch Class QLED Q950T Series  Smart TV with Alexa Built-in (QN85Q950TSFXZA, 2020 Model"
            price={999.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91GMSrYPaHL._AC_SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
        </div>


        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="903850"
            title="adidas Men's Grand Court Sneaker"
            price={59.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61FbqzPD8TL._AC_UL1500_.jpg"
          />
          <Product
            id="8903851"
            title="ASICS Men's Gel-Resolution 8 Tennis Shoes"
            price={120.99}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/5154dNw2l9L._AC_UL1200_.jpg"
          />
          <Product
            id="23445930"
            title="adidas Men's Gamecourt 2 Tennis Shoe"
            price={78.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/610rYYxl+DL._AC_UL1500_.jpg"
          />
        </div>
     
    </div>
  );
}

export default Home;
