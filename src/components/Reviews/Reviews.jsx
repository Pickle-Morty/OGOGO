import React, { useState } from "react";
import { useGet } from "../../hooks/get.hook";
import Styles from "./Reviews.module.css";

// import Thumbnail from './../../assets/images/reviews/review1.png'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";

import "swiper/swiper-bundle.min.css";
import { Video } from "../Video/Video";

SwiperCore.use([Pagination, Navigation]);

export const Reviews = ({ link }) => {
  const { data, loading } = useGet("reviews");
  const [video, setVideo] = useState({
    opened: false,
    link: "",
    author: "",
  });

  const openVideo = (link, author) => {
    setVideo({
      opened: true,
      link: link,
      author: author,
    });
  };

  return (
    <div className={Styles.reviews} ref={link}>
      <div className="container">
        <h3 className={Styles.heading}>Отзывы</h3>
        {loading ? (
          <div className="center">
            <div className="loading"></div>
          </div>
        ) : (
          <Swiper
            data-aos="fade-right"
            speed={1000}
            // centeredSlides={true}
            // allowTouchMove={false}
            grabCursor={true}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{ clickable: true }}
            pagination={{ clickable: true }}
            style={{ padding: "20px 70px 70px 70px" }}
            breakpoints={{
              600: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3,
                // allowTouchMove: false,
              },
            }}
          >
            {data.map(({ thumbnail, author, description, link }, i) => {
              return (
                <SwiperSlide className={Styles.slide} key={i}>
                  <div
                    className={Styles.thumbnail}
                    onClick={() => {
                      openVideo(link, author);
                    }}
                  >
                    <img src={thumbnail} alt="thumbnail" />
                  </div>
                  <div className={Styles.desc}>
                    <h4>{author}</h4>
                    <p>{description}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
      {video.opened === true ? (
        <Video video={video} setVideo={setVideo} />
      ) : null}
    </div>
  );
};
