const BannerFeatures = () => {
  var data = [
    {
      id: 1,
      title: "자유 쇼핑",
      img: "feature-2.png",
      color: "bg-1",
    },
    {
      id: 2,
      title: "온라인 주문",
      img: "feature-1.png",
      color: "bg-2",
    },
    {
      id: 3,
      title: "돈 절약",
      img: "feature-3.png",
      color: "bg-3",
    },
    {
      id: 4,
      title: "프로모션",
      img: "feature-4.png",
      color: "bg-4",
    },
    {
      id: 5,
      title: "행복 쇼핑",
      img: "feature-5.png",
      color: "bg-5",
    },
    {
      id: 6,
      title: "AI 분석",
      img: "feature-6.png",
      color: "bg-6",
    },
  ];

  return (
    <>
      {data.map((item, i) => (
        <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0" key={i}>
          <div className="banner-features wow fadeIn animated hover-up">
            <img src={`assets/imgs/theme/icons/${item.img}`} alt="" />
            <h4 className={item.color}>{item.title}</h4>
          </div>
        </div>
      ))}
    </>
  );
};

export default BannerFeatures;
