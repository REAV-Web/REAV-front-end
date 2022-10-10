import { useState } from "react";

import Link from "next/link";
import Timer from "./Timer";
const IntroPopup = () => {
  const [openClass, setOpenClass] = useState(0);

  const handleRemove = () => {
    setOpenClass(!openClass);
  };
  const fixDate = new Date();
  return (
    <>
      <div
        className={
          openClass
            ? "modal fade custom-modal d-none"
            : "modal fade custom-modal  show d-block"
        }
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              onClick={handleRemove}
            ></button>
            <div className="modal-body">
              <div
                className="deal"
                style={{
                  backgroundImage:
                    "url('assets/imgs/banner/menu-banner-7.png')",
                }}
              >
                <div className="deal-top">
                  <h2 className="text-brand">오늘의 할인</h2>
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
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          openClass ? "modal-backdrop fade d-none" : "modal-backdrop fade show"
        }
      ></div>
    </>
  );
};

export default IntroPopup;
