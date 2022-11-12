import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Intro1 = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        // loop={false}
        //pagination={true}
        navigation={{
          prevEl: ".custom_prev_i1",
          nextEl: ".custom_next_i1",
        }}
        className="hero-slider-1 dot-style-1 dot-style-1-position-1"
      >
        <SwiperSlide>
          <div className="single-hero-slider single-animation-wrap">
            <div className="container">
              <div className="row align-items-center slider-animated-1">
                <div className="col-lg-5 col-md-6">
                  <div className="hero-slider-content-2">
                    <h4 className="animated">
                      AI Review Emotional Analysis Visualization
                    </h4>
                    <h2 className="animated fw-900">AI 리뷰 평점 분석</h2>
                    <h1 className="animated fw-900 text-brand">REAV</h1>
                    <p className="animated">권민재 / 김동환 / 최정대</p>
                    <Link href="/products/shop-grid-right">
                      <a className="animated btn btn-brush btn-brush-3">
                        Shop Now
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="single-slider-img single-slider-img-1">
                    <img
                      className="animated slider-1-1"
                      src="assets/imgs/slider/slider-1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single-hero-slider single-animation-wrap">
            <div className="container">
              <div className="row align-items-center slider-animated-1">
                <div className="col-lg-5 col-md-6">
                  <div className="hero-slider-content-2">
                    <h4 className="animated">핫 프로모션</h4>
                    <h2 className="animated fw-900">Fashion Trending</h2>
                    <h1 className="animated fw-900 text-7">트렌드 기획전</h1>
                    <p className="animated">
                      Save more with coupons & up to 20% off
                    </p>
                    <Link href="/products/shop-grid-right">
                      <a className="animated btn btn-brush btn-brush-2">
                        Discover Now
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="single-slider-img single-slider-img-1">
                    <img
                      className="animated slider-1-2"
                      src="assets/imgs/slider/slider-2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single-hero-slider single-animation-wrap">
            <div className="container">
              <div className="row align-items-center slider-animated-1">
                <div className="col-lg-5 col-md-6">
                  <div className="hero-slider-content-2">
                    <h4 className="animated">곧 찾아오는</h4>
                    <h2 className="animated fw-900">Big deal from</h2>
                    <h1 className="animated fw-900 text-8">Manufacturer</h1>
                    <p className="animated">
                      Clothing, Shoes, Bags, Wallets...
                    </p>
                    <Link href="/products/shop-grid-right">
                      <a className="animated btn btn-brush btn-brush-1">
                        Shop Now
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="single-slider-img single-slider-img-1">
                    <img
                      className="animated slider-1-3"
                      src="assets/imgs/slider/slider-3.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="slider-arrow hero-slider-1-arrow">
        <span className="slider-btn slider-prev slick-arrow custom_prev_i1">
          <i className="fi-rs-angle-left"></i>
        </span>
        <span className="slider-btn slider-next slick-arrow custom_next_i1">
          <i className="fi-rs-angle-right"></i>
        </span>
      </div>
    </>
  );
};

export default Intro1;
