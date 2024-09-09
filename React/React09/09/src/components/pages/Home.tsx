import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0); // 탭 인덱스를 관리하는 상태

  const tabs = [
    { label: "24 FALL", value: 0 },
    { label: "24 FALL 2", value: 1 }
  ];

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <div>
      {/* 상단 슬라이드 배너 */}
      <Swiper
        className="home-banner"
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <img
            className="home-img"
            src="https://live.staticflickr.com/65535/51301635928_7f215121a3_o.jpg"
            alt="이미지1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="home-img"
            src="https://live.staticflickr.com/65535/51300702162_033440c730_o.jpg"
            alt="이미지2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="home-img"
            src="https://live.staticflickr.com/65535/51301635718_9bbcf49f0c_o.jpg"
            alt="이미지3"
          />
        </SwiperSlide>
      </Swiper>
      {/* 상품 설명 */}
      



      {/* 룩북 섹션 */}
      <div className="lookbook-section">
        <h2>룩북</h2>

        {/* 탭 버튼 */}
        <div className="tab-pills" role="listbox">
          <ul className="tabs">
            {tabs.map((tab, index) => (
              <li
                key={index}
                aria-selected={selectedTab === index}
                tabIndex={index + 1}
                onClick={() => handleTabClick(index)}
                className={`tab ${selectedTab === index ? "active" : ""}`}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        {/* 룩북 이미지 슬라이더 */}
        <Swiper
          className="lookbook-slider"
          spaceBetween={30}
          slidesPerView={2}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          <SwiperSlide className="lookbook-slide">
            <img
              className="lookbook-img"
              src="https://img.ssfshop.com/cmd/LL_750x1000/src/https://img.ssfshop.com/display/category/BDM/A07/A01/contents/23417_376370_2_KOR_20240724171952.jpg"
              alt="8 seconds"
            />
            <div className="lookbook-info">8 seconds</div>
          </SwiperSlide>
          <SwiperSlide className="lookbook-slide">
            <img
              className="lookbook-img"
              src="https://img.ssfshop.com/cmd/LL_750x1000/src/https://img.ssfshop.com/display/category/BDM/A07/A01/contents/23417_376370_3_KOR_20240724172032.jpg"
              alt="8 seconds"
            />
            <div className="lookbook-info">8 seconds</div>
          </SwiperSlide>
          <SwiperSlide className="lookbook-slide">
            <img
              className="lookbook-img"
              src="https://img.ssfshop.com/cmd/LL_750x1000/src/https://img.ssfshop.com/display/category/BDM/A07/A01/contents/23417_376370_4_KOR_20240724172105.jpg"
              alt="8 seconds"
            />
            <div className="lookbook-info">8 seconds</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;