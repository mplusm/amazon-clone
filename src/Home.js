import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className = "home">
            <div className = "home__container">
                <img className="home__image"
                src = "https://photos5.appleinsider.com/gallery/21285-24150-21211-23951-Screen-Shot-2017-05-05-at-100758-AM-l-xl.jpg" 
                alt=""/>

                <div className="home__row">

                    <Product title='the lean startup' price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating ={5}
                    />

                    <Product
                    title ="Kenwood Mix Stand for Baking"
                    price={239.0}
                    rating={4}
                    image=""
                    />

                </div>

                <div className="home__row">
                    <Product/>
                    <Product/>
                    <Product/>
                    
                    
                </div>

                <div className="home__row">
                    <Product/>
                    
                    </div>
            </div>
            
        </div>
    );
}

export default Home;
