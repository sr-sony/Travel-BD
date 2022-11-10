import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";

const ItemCard = ({ item }) => {
  const { _id, price, img, name, description } = item;
  return (
    <PhotoProvider>
      <div className="card card-compact w-[500px] shadow-xl rounded-lg mx-auto">
        <figure className="foo p-5 rounded-lg">
          <PhotoView src={img}>
            <img className="rounded-lg" src={img} alt="img" />
          </PhotoView>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl font-semibold">{name}</h2>
          <p className=" text-xl font-semibold">Price: {price}</p>
          {/* <p>
              {
                description.length > 100 ?
                  <p>{description.slice(0, 100) + '...'}</p>
                    :
                  <p>{description}</p>
              }
          </p> */}
          <p> {description}</p>
          <div className="card-actions justify-start">
            <Link to={`/service/${_id}`}>
              <button className="btn btn-primary rounded-lg text-xl">View More</button>
            </Link>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default ItemCard;
