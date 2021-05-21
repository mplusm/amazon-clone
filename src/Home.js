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
                    <Product/>
                    
                </div>

                <div className="home__row">
                    {/*product*/}
                    {/*product*/}
                </div>

                <div className="home__row">
                    {/*product*/}
                </div>
            </div>
            
        </div>
    );
}

export default Home;
