import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className = "home">
            <div className = "home__container">
                <img className="home__image"
                src = "https://images-na.ssl-images-amazon.com/images/G/01/Events/2019/01112499/concert/en/us_vod_concert_pdp_dt_banner_1500x375_en.jpg" 
                alt=""/>

                <div className="home__row">

                    <Product title='Android phone' 
                    price={250.99}
                    image="https://freepngimg.com/thumb/android/31538-1-android-free-download.png"
                    rating ={4}
                    />

                    <Product
                    title ="Apple phone"
                    price={600.0}
                    rating={5}
                    image="https://purepng.com/public/uploads/medium/purepng.com-apple-iphone-xappleapple-iphonephonesmartphonemobile-devicetouch-screeniphone-xiphone-10electronicsobjects-251530689596pnjba.png"
                    />

                </div>

                <div className="home__row">
                    <Product
                    title='Adidas slides' 
                    price={24.99}
                    image="http://www.pngall.com/wp-content/uploads/2016/06/Adidas-Logo-PNG-Image.png"
                    rating ={2}
                    />
                    <Product
                    title='Nike slides' 
                    price={30.99}
                    image="https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ylkvzp96xqjf1id9xzhq/benassi-jdi-printed-mens-slide-dE3Mvj.jpg"
                    rating ={5}/>
                    <Product
                    title='Cricket bat' 
                    price={50.99}
                    image="https://www.freepngimg.com/thumb/cricket/31767-6-cricket-bat-hd.png"
                    rating ={3}/>
                    
                    
                </div>

                <div className="home__row">
                    <Product
                    title='Glass Bottle' 
                    price={2.99}
                    image="https://pluspng.com/img-png/bottle-png--600.png"
                    rating ={1}/>
                    
                    </div>
            </div>
            
        </div>
    );
}

export default Home;
