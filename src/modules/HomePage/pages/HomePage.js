import React from "react";
import Hero from "./Hero";
import "./HomePage.css";
import Nearby from "./Nearby";
export default function HomePage() {
  return (
    <div className="home__page mb-5">
      <Hero />
      <Nearby />
      <div className="container-xs">
        <h1>Khám phá Trải nghiệm Airbnb</h1>
        <div className="traiNghiem row mt-4">
          <div className="traiNghiem__left  col-lg-12 col-xl-6 ">
            <img src="./img/c2adcb16-6c3f-4041-86a1-afa9c303c500.webp" alt="" />
            <div className="traiNghiem__left__text">
              <p>Những điều nên trải nghiệm trong chuyến đi của bạn</p>
              <button>Trải nghiệm</button>
            </div>
          </div>
          <div className="traiNghiem__right  col-lg-12 col-xl-6  ">
            <img src="./img/c1bdf53f-2a19-4529-aa9b-1b0e6bd8d0ee.webp" alt="" />
            <div className="traiNghiem__right__text">
              <p>Những điều nên trải nghiệm tại nhà</p>
              <button>Trải nghiệm trực tuyến</button>
            </div>
          </div>
        </div>
        <div className="yKien mt-5">
          <img
            src="./img/0528b0f7-4c0c-47bc-9786-d91454f531ba.jpg"
            style={{ width: "100%" }}
            alt=""
          />
          <div className="yKien__absolute">
            <div className="yKien__text">
              <p>Bạn có thắc mắc về việc đón tiếp khách?</p>
            </div>
            <div className="yKien__button">
              <button>Hỏi ý kiến chủ nhà siêu cấp</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
