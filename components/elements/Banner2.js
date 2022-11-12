import React from "react";

import Link from "next/link";

const Banner2 = () => {
  return (
    <>
      <div className="banner-img banner-big wow fadeIn animated f-none">
        <img src="assets/imgs/banner/AIbanner-4.png" alt="" />
        <div className="banner-text d-md-block d-none">
          <h4 className="mb-15 mt-40 text-brand">
            AI Review Analysis Services
          </h4>
          <h1 className="fw-600 mb-20">
            우리는 AI를 이용해 <br />
            당신에게 객관적인 리뷰를 제공합니다.
          </h1>

          <Link href="/products">
            <a className="btn">
              Learn More <i className="fi-rs-arrow-right"></i>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Banner2;
