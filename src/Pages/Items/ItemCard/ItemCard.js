import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';

import 'react-photo-view/dist/react-photo-view.css';

const ItemCard = ({ item }) => {
  const { _id, price, img, name, description } = item;
  return (
    <PhotoProvider>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure className="foo">
        <PhotoView src={img}>
        <img src={img} alt="img" />
        </PhotoView>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: {price}</p>
        <p>{
          description.length > 100 ?
          <p>{description.slice(0,100)+ '...'}</p>
          :
          <p>{description}</p>
          }</p>
        <div className="card-actions justify-end">
          
          <Link to={`/service/${_id}`}>
          <button className="btn btn-primary">View More</button>
          </Link>
        </div>
      </div>
    </div>
    </PhotoProvider>
  );
};

export default ItemCard;
