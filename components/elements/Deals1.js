import React from "react";
import Timer from "./Timer";
import Link from "next/link";

const Deals1 = () => {
  const fixDate = new Date();
  return (
    <>
      <div
        className="deal wow fadeIn animated mb-md-4 mb-sm-4 mb-lg-0"
        style={{
          backgroundImage: "url('assets/imgs/banner/menu-banner-7.jpg')",
        }}
      >
        <div className="deal-top">
          <h2 className="text-brand">오늘의 특가 상품</h2>
          <h5>수량 한정</h5>
        </div>
        <div className="deal-content">
          <h6 className="product-title">
            <Link href="/products/shop-grid-right">
              <a>여름 시즌 모던 테마 신상품</a>
            </Link>
          </h6>
          <div className="product-price">
            <span className="new-price">$139.00</span>
            <span className="old-price">$160.99</span>
          </div>
        </div>
        <div className="deal-bottom">
          <p>할인 종료까지 남은 시간</p>

          {/* <Timer endDateTime="2023-11-27 00:00:00" /> */}
          <Timer endDateTime={fixDate.setDate(fixDate.getDate() + 2)} />

          <Link href="/products/shop-grid-right">
            <a className="btn hover-up">
              Shop Now <i className="fi-rs-arrow-right"></i>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Deals1;
