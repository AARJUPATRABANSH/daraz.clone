"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const banners = [
  {
    id: 2,
    link: "https://icms-image.slatic.net/images/ims-web/d01caa71-9c68-4c12-a35e-f6c10c53e73d.jpg",
  },
  {
    id: 3,
    link: "https://icms-image.slatic.net/images/ims-web/0d216dd2-08fd-450a-bf84-0a60fbdf3459.jpg",
  },
  {
    id: 4,
    link: "https://icms-image.slatic.net/images/ims-web/73224314-a9a0-453e-ae94-a15d546d4a7a.png",
  },
];

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768, // Adjust this value based on the device width where you want to change the number of slides to show
        settings: {
          slidesToShow: 1, // Number of slides to show on laptops
          slidesToScroll: 1, // Number of slides to scroll on laptops
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {banners.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.link} className="md:h-40 " />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
