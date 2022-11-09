import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  const { _id, price, img, name, description } = item;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: {price}</p>
        <p>{description}</p>
        <div className="card-actions justify-end">
          
          <Link to={`/service/${_id}`}>
          <button className="btn btn-primary">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
