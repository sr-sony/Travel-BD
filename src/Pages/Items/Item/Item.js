import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Item = () => {
  const item = useLoaderData();
  const { img, price, _id, description, name } = item;
  console.log(item);
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [review]);

  //filterReview
  const reviewFilter = review.filter((obj) => {
    return obj.reviewId === item._id;
  });
  console.log(reviewFilter);

  const handleReviews = (event) => {
    event.preventDefault();
    const form = event.target;
    const reviewerName = user?.displayName || "";
    // console.log("name",reviewerName);
    const userImage = user?.photoURL || "";
    const userEmail = user?.email;
    const userReview = form.review.value;

    const reviews = {
      reviewId: _id,
      userName: reviewerName,
      userReview,
      userImage,
      userEmail,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Order placed Successfully");
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2 className="text-6xl text-center font-bold mt-10">Place Details</h2>
      <div className="card grid lg:grid-cols-2 grid-cols-1 lg:card-side rounded-lg my-10 shadow-xl">
        <figure>
          <img src={img} alt="item img" />
        </figure>
        <div className="card-body">
        <h2 className="card-title text-4xl font-semibold text-red-600 my-5">Place Name: {name}</h2>
          <p className=" text-xl font-semibold">Cost: {price}</p>
          <p className="text-xl">{description}</p>
        </div>
      </div>

      <div>
        {reviewFilter.map((r) => (
          <p r={r}>
            {<img style={{ height: "30px" }} src={r.userImage} alt=""></img>}
            {<p>name: {r.userName}</p>}
            {r.userReview}
          </p>
        ))}
      </div>

      {user?.uid ? (
        <>
          <div>
            <form onSubmit={handleReviews}>
              <textarea
                name="review"
                className="textarea textarea-bordered h-24 w-full"
                placeholder="Your Message"
                required
              ></textarea>

              <input className="btn" type="submit" value="Place Your Order" />
            </form>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Item;
