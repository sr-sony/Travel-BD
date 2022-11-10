import React from "react";

const BannerItem = ({slide}) => {
  const {image, id, next, prev} = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="bannerImage">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-6">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
