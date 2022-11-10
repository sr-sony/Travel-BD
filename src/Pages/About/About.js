import React from "react";
import img from '../../assets/image/icon.png';

const About = () => {
  return (
    <div className="my-10">
        <p className="text-4xl font-bold text-center my-10">About Travel BD</p>
      <div className="hero ">
        <div className="hero-content grid lg:grid-cols-2 grid-cols-1 ">
          <div>
          <img
            src={img}
            alt=''
            className="max-w-sm rounded-xl shadow-4xl"
          />
          </div>
          <div>
            <h1 className="text-5xl font-bold ">Travel BD</h1>
            <p className="py-6">
              Travel BD is providing travel and tour guidelines, accesories around Bangladesh. Travel BD is a single person travel community, where I only provide all the services. Travel BD owner is Sharzan Rahman Sony. For any queries and services contact me. <br>
              </br>
              Phone: +8801737579905
              <br>
              </br>
              Email: sr.sony.05@gmail.com
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
