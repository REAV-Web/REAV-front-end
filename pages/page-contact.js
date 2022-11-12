import Layout from "../components/layout/Layout";

import Link from "next/link";

function Contact() {
  return (
    <>
      <Layout parent="Home" sub="Contact">
        <section className="hero-2 bg-green">
          <div className="hero-content">
            <div className="container">
              <div className="text-center">
                <h4 className="text-brand mb-20">KU-REAV</h4>
                <h1 className="mb-20 wow fadeIn animated font-xxl fw-900">
                  당신의 <span className="text-style-1">솔직한 마음</span> 을
                  <br />
                  마음껏 펼쳐보세요
                </h1>
                <p className="w-50 m-auto mb-50 wow fadeIn animated">
                  REAV는 AI 모델을 이용해 사용자들의 리뷰 속에 담긴 솔직한
                  마음을 <br />
                  이끌어 내어서 솔직한 리뷰를 제공합니다. <br />
                  요즘,&nbsp; 사람들은 솔직함을 표현하기 어려워합니다.
                  <br /> 두려워하지 마세요, 당신의 솔직한 마음을 마음껏
                  펼쳐보세요.
                </p>
                <p className="wow fadeIn animated">
                  <Link href="/page-about">
                    <a className="btn btn-brand btn-lg font-weight-bold text-white border-radius-5 btn-shadow-brand hover-up">
                      About Us
                    </a>
                  </Link>
                  <Link href="/page-purchase-guide">
                    <a className="btn btn-outline btn-lg btn-brand-outline font-weight-bold text-brand bg-white text-hover-white ml-15 border-radius-5 btn-shadow-brand hover-up">
                      Support Center
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Contact;
