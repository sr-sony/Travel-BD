import React from "react";

const BannerItem = ({slide}) => {
  const {image, id, next, prev} = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="bannerImage">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="text-6xl font-bold text-white">
          Make Your <br></br>
          Sweet Moments<br></br>
          Memorable<br></br>
          With Us
        </h1>
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
        <p className="font-bold text-white">
          There are many variations of passages of available, but <br></br> the
          majority have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-3/4">
        <button className="btn btn-warning mr-5">Warning</button>
        <button className="btn btn-outline btn-warning">Warning</button>
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
