import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = () => {
  const item = useLoaderData();
  const { img, price, _id, description, name } = item;
  
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState([]);
  const notify = () => toast("Review added successfully");

  useEffect(() => {
    fetch("https://sr-studios-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [review]);

  //filterReview
  const reviewFilter = review.filter((obj) => {
    return obj.reviewId === item._id;
  });
  

  const handleReviews = (event) => {
    event.preventDefault();
    const form = event.target;
    const reviewerName = user?.displayName || "";
    
    const userImage = user?.photoURL || "";
    const userEmail = user?.email;
    const itemName = item.name;
    const userReview = form.review.value;
    console.log(itemName)

    const reviews = {
      reviewId: _id,
      itemName,
      userName: reviewerName,
      userReview,
      userImage,
      userEmail,
    };

    fetch("https://sr-studios-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
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
        <h2 className="card-title text-4xl font-semibold my-5">Place Name: <span className="text-red-600 font-extrabold">{name}</span></h2>
          <p className=" text-2xl font-semibold">Cost: <span className="font-extrabold text-orange-600">${price}</span></p>
          <p className="text-xl">{description}</p>
        </div>
      </div>

      <div>
      <p className="text-5xl font-bold my-6 text-center bg-base-200 p-8 shadow-lg rounded-lg">Reviews</p>
        {reviewFilter.map((r) => (
          <div r={r}>
            

            <div className="lg:w-[1000px] mx-auto card card-side mb-5 rounded-xl shadow-xl grid lg:grid-cols-3 justify-center items-center">
                <figure>
                  <img
                    className="rounded-full ml-5 w-20"
                    src={r.userImage}
                    alt="user img"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{r.userName}</h2>
                  <p>{r.userReview}</p>
                  
                </div>
                
              </div>
          </div>
        ))}
      </div>

      {user?.uid ? (
        <>
        
          <p className="text-3xl mx-auto lg:w-[1000px] font-bold my-6 text-center bg-base-200 p-8 shadow-lg rounded-lg">Post Your Review</p>
        
          <div className="flex justify-center">
            <form onSubmit={handleReviews}>
              <textarea
                name="review"
                className="textarea textarea-bordered h-24 lg:w-[1000px] mx-auto border w-full"
                placeholder="Your Message"
                required
              ></textarea>
              
              <button  onClick={notify} className="btn flex justify-center mx-auto rounded-lg shadow-lg my-5 text-xl" type="submit" value="Place Your Order" >Review</button>
              <ToastContainer></ToastContainer>
              
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
