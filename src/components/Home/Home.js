import React from "react";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

function Home() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let topTrending = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div id="home" className="home">
      <div className="home__container">
        <div className="home__carrousel">
          <Slider {...settings}>
            <div>
              <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="Home Hero"
              />
            </div>
            <div>
              <img
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjJkZWQ0NTgt/YjJkZWQ0NTgt-NGU5NjdkODIt-w3000._CB406119060_.jpg"
                alt="Home Hero"
              />
            </div>
            <div>
              <img
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/sm/SNK/Phase_3/GW_3000x1200_SNKPhase3._CB406794620_.jpg"
                alt="Home Hero"
              />
            </div>
            <div>
              <img
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/WeeklyBuild/091120/091120_US_NewAlbum_ChristianNodal_GW_Hero_D_CVX_EG_3000x1200._CB405473300_.jpg"
                alt="Home Hero"
              />
            </div>
            <div>
              <img
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/img20/events/bts/gateway/BTS20_GW_Desktop_Hero_DigEdResources_2x_3000x600_v2._CB429427081_.jpg"
                alt="Home Hero"
              />
            </div>
            <div>
              <img
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/IMDbTV/gateway/theoutpost/GW_DHERO_TheOutpost_3000x1200_EN-US_5538_v12x._CB407273330_.jpg"
                alt="Home Hero"
              />
            </div>
          </Slider>
        </div>

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
        <div className="home__row">
          <div className="home__topTrending">
            <h2>Top trending products</h2>
            <Slider {...topTrending}>
              <div className="home__trendingItem">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/615AtrSnJXL._AC_SY400_.jpg"
                  alt="other"
                />
              </div>
              <div className="home__trendingItem">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/51mM8jXFVYL._AC_SY400_.jpg"
                  alt="other"
                />
              </div>
              <div className="home__trendingItem">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/61MwloPMgDL._AC_SY400_.jpg"
                  alt="other"
                />
              </div>
              <div className="home__trendingItem">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/61drB7V+RvL._AC_SY400_.jpg"
                  alt="other"
                />
              </div>
              <div className="home__trendingItem">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/61GSPGb45jL._AC_SY400_.jpg"
                  alt="other"
                />
              </div>
              <div className="home__trendingItem">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/81p41Tq2S9L._AC_SY400_.jpg"
                  alt="other"
                />
              </div>
              <div className="home__trendingItem">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/61sq8OWfUTL._AC_SY400_.jpg"
                  alt="other"
                />
              </div>
              <div className="home__trendingItem">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/91byUGzYWGL._AC_SY400_.jpg"
                  alt="other"
                />
              </div>
              <div className="home__trendingItem">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/61ErvdglFlL._AC_SY400_.jpg"
                  alt="other"
                />
              </div>
              <div className="home__trendingItem">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/714b4iaRInL._AC_SY400_.jpg"
                  alt="other"
                />
              </div>
            </Slider>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
