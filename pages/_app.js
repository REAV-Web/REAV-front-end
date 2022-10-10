import "react-perfect-scrollbar/dist/css/styles.css";
import { Provider } from "react-redux";
import "react-responsive-modal/styles.css";
import store from "../redux/store";
import StorageWrapper from "../components/ecommerce/storage-wrapper";
import "../public/assets/css/main.css";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// Swiper Slider
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Preloader from "./../components/elements/Preloader";

// npm run build
// npm run start
// npm run dev

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, []);
  return (
    <>
      {!loading ? (
        <Provider store={store}>
          <StorageWrapper>
            <ToastContainer />
            <Component {...pageProps} />
          </StorageWrapper>
        </Provider>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default MyApp;
