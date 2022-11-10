import React from "react";
import img1 from "../../assets/image/g1.jpeg";
import img2 from "../../assets/image/gg2.jpg";
import img3 from "../../assets/image/g3.jpeg";

const MyServices = () => {
  return (
    <div className="my-10">
      <p className="text-4xl font-bold text-center">Travel BD Offers</p>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="card shadow-xl rounded-lg">
          <figure className="px-10 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Group Travelling & Guides</h2>
            <p>
              I am providing all the guidelines for a single group tour in
              different areas of Bangladesh & also Foreign Countries. I provide
              all the services needed for whole travel.
            </p>
          </div>
        </div>
        <div className="card shadow-xl rounded-lg">
          <figure className="px-10 pt-10">
            <img src={img2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Family Travelling</h2>
            <p>
              Family tour needs guideline and safety. I provide all the
              necessary guideline, hotel assurance etc. I have successfully
              completed about 20 family tours in different places.
            </p>
          </div>
        </div>
        <div className="card shadow-xl rounded-lg">
          <figure className="px-10 pt-10">
            <img src={img3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Single Tour</h2>
            <p>
              Many people want to travel alone but did not get proper guides and
              all the necessary support. I also provide single person tour plan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
