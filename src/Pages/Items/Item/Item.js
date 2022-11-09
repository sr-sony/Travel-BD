import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Item = () => {
  const item = useLoaderData();
  const { img, price, _id, description, name } = item;
  console.log(item)
  return (
    <div>
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
    </div>
  );
};

export default Item;
