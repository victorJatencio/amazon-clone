import React from "react";
import Product from "../Product/Product";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Home Hero"
        />

        <div className="home__row">
          <Product
            id="19283746"
            title="The Lean Startup: How Constant Innovation Vreates Radically Successful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49230461"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={349.99}
            image="https://m.media-amazon.com/images/I/81lgrkGGbAL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="97593446"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={129.99}
            image="https://m.media-amazon.com/images/I/71916r38cNL._AC_UY436_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="12435693"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={129.99}
            image="https://m.media-amazon.com/images/I/61Gob-M3snL._AC_UL640_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="22435612"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={399.99}
            image="https://m.media-amazon.com/images/I/81FH2j7EnJL._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1501.73}
            image="https://m.media-amazon.com/images/I/71RC3o90shL._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
