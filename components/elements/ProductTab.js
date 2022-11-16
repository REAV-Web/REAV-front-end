import React, { useState, useEffect } from "react";
import RatingSection from "./RatingSection";
import axios from "axios";

const ProductTab = (props) => {
  const [activeIndex, setActiveIndex] = useState(1);

  // 리뷰자 데이터
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 리뷰 내용
  const [reviewContent, setReviewContent] = useState("");

  // ratingIndex = 받을 평점
  const [ratingIndex, setRatingIndex] = useState(1);
  const [aiRating, setAiRating] = useState(0);

  // 리뷰 목록 데이터
  const [reviews, setReviews] = useState([]);

  // 최대 글자수
  const MAX_LENGTH = 150;

  let ratingList = [0, 0, 0, 0, 0];
  let sumRating = 0;

  let productID = -1;

  const fetchReviews = async () => {
    fetch(
      `http://reav-env-1.eba-vmtxmc2c.ap-northeast-1.elasticbeanstalk.com/review/${productID}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("review Data: ", res);
        setReviews(res);
      });
  };

  const fetchWeight = async () => {
    fetch(
      `http://reav-env-1.eba-vmtxmc2c.ap-northeast-1.elasticbeanstalk.com/weight/${productID}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("weight Data: ", res);
        console.log("상품 ID", props);
        setAiRating(res);
      });
  };

  useEffect(() => {
    //리뷰 데이터 가져오기
    fetchReviews();
    fetchWeight();
    productID = parseInt(props.productID);
  }, []);

  /** 탭 변경 */
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  /** 리뷰 작성 */
  const handleSubmit = () => {
    // null input secure code
    if (name === "" || email === "" || reviewContent === "") {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    console.log("@@@@", name, email, reviewContent, ratingIndex);

    axios
      .post(
        `http://reav-env-1.eba-vmtxmc2c.ap-northeast-1.elasticbeanstalk.com/review/${productID}?user=${name}&email=${email}&review=${reviewContent}&rating=${ratingIndex}`
      )
      .then((res) => {
        console.log(res);
        console.log("리뷰 등록 완료", res);
      })
      .catch((err) => {
        console.log("리뷰 등록 실패", err);
      });

    console.log("name", name);
    console.log("email", email);
  };

  const PrintReviews = reviews.map((review) => {
    //리뷰 갯수 카운트
    ratingList[review.rating - 1] += 1;
    sumRating += review.rating;

    return (
      <div
        key={review.review_no}
        className="single-comment justify-content-between d-flex"
      >
        <div className="user justify-content-between d-flex">
          <div className="thumb text-center">
            <img src="/assets/imgs/page/avatar-6.jpg" alt="" />
            <h6>
              <a href="#">{review.user}</a>
            </h6>
          </div>
          <div className="desc">
            <div className="product-rate d-inline-block">
              <div
                className="product-rating"
                style={{
                  width: `${review.rating * 20}%`,
                }}
              ></div>
            </div>
            <p>{review.review}</p>
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <p className="font-xs mr-30">December 4, 2020 at 3:12 pm</p>
                <a href="#" className="text-brand btn-reply">
                  Reply
                  <i className="fi-rs-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="tab-style3">
        <ul className="nav nav-tabs text-uppercase">
          <li className="nav-item">
            <a
              className={activeIndex === 1 ? "nav-link active" : "nav-link"}
              id="Reviews-tab"
              data-bs-toggle="tab"
              onClick={() => handleOnClick(1)}
            >
              리뷰 ({reviews.length})
            </a>
          </li>
          <li className="nav-item">
            <a
              className={activeIndex === 2 ? "nav-link active" : "nav-link"}
              id="Description-tab"
              data-bs-toggle="tab"
              onClick={() => handleOnClick(2)}
            >
              상품 설명
            </a>
          </li>
          <li className="nav-item">
            <a
              className={activeIndex === 3 ? "nav-link active" : "nav-link"}
              id="Additional-info-tab"
              data-bs-toggle="tab"
              onClick={() => handleOnClick(3)}
            >
              상세정보
            </a>
          </li>
        </ul>
        <div className="tab-content shop_info_tab entry-main-content">
          <div
            className={
              activeIndex === 2 ? "tab-pane fade show active" : "tab-pane fade"
            }
            id="Description"
          >
            <div className="">
              <p>
                "S/S 시즌 필수 아이템", 하와이안 셔츠는 셔츠의 한 종류로 알로하
                셔츠(Aloha shirt)라고도 불린다. 이름에서 알 수 있듯 하와이와
                남쪽 나라스러운 배경에 어울리는 밝은 분위기의 화려한 셔츠이다.
                큼지막한 꽃문양이나 식물 문양(야자수 등)을 화려하고 커다랗게
                가득히 프린트해 주는 것이 포인트이자 사실 거의 유일한 요건이며
                셔츠류임에도 바깥으로 내어 입는 것도 특징. 보통 실제 사이즈보다
                넉넉하게 입으며 남쪽으로 휴가나 관광을 가면 하와이안 셔츠를 입고
                찍은 사진으로 '나 관광 왔음'을 인증하게 된다.
              </p>
              <p>
                하와이 거주인들에게 알로하 셔츠는 공적 자리에서 입을 수 있는
                정장으로 인식되며, 따라서 알로하 셔츠에 면바지를 입고 구두를
                신으면 고급 레스토랑 및 공식 석상에 무난한 옷차림이다. 바지는
                아무거나 걸쳐 입어도 하와이 내에서는 뭘 입을지 고민을 안 해도 될
                정도로 한 방에 해결해주는 옷. 다만, 하와이 거주자들이 입는
                알로하 셔츠의 무늬는 맨 위의 화려한 사진과는 많이 다르며,
                색상이나 디자인이 튀지 않는 아래 사진과 같은 평범한 셔츠를
                입는다. 직장인으로서 알로하 셔츠를 정장으로 입을 수 없는 직업은
                딱 2가지가 있는데, 하나는 변호사·검사이며 다른 하나는 명품 매장
                문 앞에서 일하는 시큐리티 가드뿐이다. 대부분의 공무원은 알로하
                셔츠를 입는다.
              </p>
              <ul className="product-more-infor mt-30">
                <li>
                  <span>배송방법</span> 택배
                </li>
                <li>
                  <span>색상</span> Green, Pink, Powder Blue, Purple
                </li>
                <li>
                  <span>상품무게</span> 700g
                </li>
                <li>
                  <span>폴리에스터</span> 99%
                </li>
                <li>
                  <span>제조국</span> Korea
                </li>
              </ul>
              <hr className="wp-block-separator is-style-dots" />
              <p>
                시원하고 트렌디한 반팔셔츠, 댄디 & 캐주얼 코디에 잘 어울리며
                따로 셔츠만 착용하여도 스타일리쉬한 코디를 연출할 수 있어요!
              </p>
              <h4 className="mt-30">포장 & 배송</h4>
              <hr className="wp-block-separator is-style-wide" />
              <p>
                - 배송일정은 수도권 평균 1~5일, 그 외 지역 평균 6~10일 소요
                됩니다.
                <br />- 수도권 기준, 일요일 / 공휴일 / 매월 1일 배송이
                불가능합니다. <br />
                &nbsp;&nbsp;수도권 외 지역 기준, 일요일 / 공휴일 / 매월 2일
                배송이 불가능합니다. <br />
                - 일시적 재고 부족이나 기상이변으로 배송 지연이 발생할 수
                있습니다.
                <br />
                - 택배 배송되는 일부 상품은 별도 안내 없이 송장을 통한
                배송조회가 가능합니다.
                <br />
                - 일부 지역은 상품에 따라 배송 예정일과 시간이 상이할 수
                있습니다.
                <br />
              </p>
            </div>
          </div>
          <div
            className={
              activeIndex === 3 ? "tab-pane fade show active" : "tab-pane fade"
            }
            id="Additional-info"
          >
            <table className="font-md">
              <tbody>
                <tr className="stand-up">
                  <th>총 기장</th>
                  <td>
                    <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                  </td>
                </tr>
                <tr className="folded-wo-wheels">
                  <th>Folded (w/o wheels)</th>
                  <td>
                    <p>32.5″L x 18.5″W x 16.5″H</p>
                  </td>
                </tr>
                <tr className="folded-w-wheels">
                  <th>Folded (w/ wheels)</th>
                  <td>
                    <p>32.5″L x 24″W x 18.5″H</p>
                  </td>
                </tr>
                <tr className="door-pass-through">
                  <th>Door Pass Through</th>
                  <td>
                    <p>24</p>
                  </td>
                </tr>
                <tr className="frame">
                  <th>Frame</th>
                  <td>
                    <p>Aluminum</p>
                  </td>
                </tr>
                <tr className="weight-wo-wheels">
                  <th>Weight (w/o wheels)</th>
                  <td>
                    <p>20 LBS</p>
                  </td>
                </tr>
                <tr className="weight-capacity">
                  <th>Weight Capacity</th>
                  <td>
                    <p>60 LBS</p>
                  </td>
                </tr>
                <tr className="width">
                  <th>Width</th>
                  <td>
                    <p>24″</p>
                  </td>
                </tr>
                <tr className="handle-height-ground-to-handle">
                  <th>Handle height (ground to handle)</th>
                  <td>
                    <p>37-45″</p>
                  </td>
                </tr>
                <tr className="wheels">
                  <th>Wheels</th>
                  <td>
                    <p>12″ air / wide track slick tread</p>
                  </td>
                </tr>
                <tr className="seat-back-height">
                  <th>Seat back height</th>
                  <td>
                    <p>21.5″</p>
                  </td>
                </tr>
                <tr className="head-room-inside-canopy">
                  <th>Head room (inside canopy)</th>
                  <td>
                    <p>25″</p>
                  </td>
                </tr>
                <tr className="pa_color">
                  <th>Color</th>
                  <td>
                    <p>Black, Blue, Red, White</p>
                  </td>
                </tr>
                <tr className="pa_size">
                  <th>Size</th>
                  <td>
                    <p>M, S</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className={
              activeIndex === 1 ? "tab-pane fade show active" : "tab-pane fade"
            }
            id="Reviews"
          >
            <div className="comments-area">
              <div className="row">
                <div className="col-lg-8">
                  <h4 className="mb-30">구매자 리뷰</h4>
                  <div className="comment-list">
                    {/* 리뷰 출력 */}
                    {reviews.map((review) => {
                      return (
                        <div
                          key={review.review_no}
                          className="single-comment justify-content-between d-flex"
                        >
                          <div className="user justify-content-between d-flex">
                            <div className="thumb text-center">
                              <img src="/assets/imgs/page/default.png" alt="" />
                              <h6>
                                <a href="#">{review.user}</a>
                              </h6>
                            </div>
                            <div className="desc">
                              <div className="product-rate d-inline-block">
                                <div
                                  className="product-rating"
                                  style={{
                                    width: `${review.rating * 20}%`,
                                  }}
                                ></div>
                              </div>
                              <p>{review.review}</p>
                              <div className="d-flex justify-content-between ml-200">
                                <div className="d-flex align-items-center">
                                  <p className="font-xs mr-30"></p>
                                  <a href="#" className="text-brand btn-reply">
                                    Reply
                                    <i className="fi-rs-arrow-right"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-lg-4">
                  <h4 className="mb-20">AI Analysis📡</h4>
                  <div className="d-flex mb-80">
                    <div className="product-rate d-inline-block mr-15">
                      <div
                        className="product-rating"
                        style={{
                          width: `${aiRating * 20}%`,
                        }}
                      ></div>
                    </div>
                    <h6>{aiRating.toFixed(1)} out of 5</h6>
                  </div>

                  <h4 className="mb-20">Customer reviews</h4>
                  <div className="d-flex mb-30">
                    <div className="product-rate d-inline-block mr-15">
                      <div
                        className="product-rating"
                        style={{
                          width: `${(sumRating / reviews.length) * 20}%`,
                        }}
                      ></div>
                    </div>
                    <h6>{(sumRating / reviews.length).toFixed(1)} out of 5</h6>
                  </div>
                  <div className="progress">
                    <span>5 star</span>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${(ratingList[4] / reviews.length) * 100}%`,
                      }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {ratingList[4] / reviews.length !== 0 &&
                        `${(ratingList[4] / reviews.length).toFixed(1) * 100}%`}
                    </div>
                  </div>
                  <div className="progress">
                    <span>4 star</span>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${(ratingList[3] / reviews.length) * 100}%`,
                      }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {ratingList[3] / reviews.length !== 0 &&
                        `${(ratingList[3] / reviews.length).toFixed(1) * 100}%`}
                    </div>
                  </div>
                  <div className="progress">
                    <span>3 star</span>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${(ratingList[2] / reviews.length) * 100}%`,
                      }}
                      aria-valuenow="45"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {ratingList[2] / reviews.length !== 0 &&
                        `${(ratingList[2] / reviews.length).toFixed(1) * 100}%`}
                    </div>
                  </div>
                  <div className="progress">
                    <span>2 star</span>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${(ratingList[1] / reviews.length) * 100}%`,
                      }}
                      aria-valuenow="65"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {ratingList[1] / reviews.length !== 0 &&
                        `${(ratingList[1] / reviews.length).toFixed(1) * 100}%`}
                    </div>
                  </div>
                  <div className="progress mb-30">
                    <span>1 star</span>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${(ratingList[0] / reviews.length) * 100}%`,
                      }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {ratingList[0] / reviews.length !== 0 &&
                        `${(ratingList[0] / reviews.length).toFixed(1) * 100}%`}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="comment-form">
              <h4 className="mb-15">리뷰 작성</h4>
              <RatingSection
                ratingIndex={ratingIndex}
                setRatingIndex={setRatingIndex}
              />
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <form
                    className="form-contact comment_form"
                    action="#"
                    id="commentForm"
                  >
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            name="name"
                            id="name"
                            type="text"
                            placeholder="Name"
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Email"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-12 mb-20">
                        <div className="form-group mb-5">
                          <textarea
                            className="form-control w-100"
                            name="comment"
                            id="comment"
                            cols="30"
                            rows="9"
                            placeholder="Write Comment"
                            onChange={(e) => {
                              if (e.target.value.length > MAX_LENGTH) {
                                // alert("최대 150자까지 입력 가능합니다.");
                                e.target.value = e.target.value.slice(
                                  0,
                                  MAX_LENGTH
                                );
                                return;
                              }
                              setReviewContent(e.target.value);
                            }}
                          ></textarea>
                        </div>
                        <div
                          className="limit_text"
                          style={
                            reviewContent.length >= MAX_LENGTH
                              ? { color: "#ff596d" }
                              : undefined
                          }
                        >
                          ( {reviewContent.length} / {MAX_LENGTH} )
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="button button-contactForm"
                        onClick={() => handleSubmit()}
                      >
                        리뷰 작성
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTab;
