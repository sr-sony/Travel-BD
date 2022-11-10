import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { FaEdit, FaTrash } from "react-icons/fa";
import useTitle from "../../Title/useTitle";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {
    useTitle('My Reviews');
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  const notify = () => toast("Deleted successfully");

  const handleDelete = (review) => {
    const agree = window.confirm(
      `Are you sure you want to delete : ${review.userReview}`
    );
    if (agree) {
      console.log("Deleting user with id:", review._id);
      fetch(`https://sr-studios-server.vercel.app/reviews/${review._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {

            const remaining = reviews.filter(
              (reviewDlt) => reviewDlt._id !== review._id
            );
            setReviews(remaining);
          }
          console.log(data);
        });
    }
  };
  useEffect(() => {
    fetch("https://sr-studios-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const myAllReviews = reviews.filter((obj) => {
    return obj.userEmail === user?.email;
  });
  return (
    <div>

<p className="text-5xl font-bold my-6 text-center bg-base-200 p-8 shadow-lg rounded-lg">My Reviews</p>
      {user?.uid ? (
        <>
          {myAllReviews.map((allRev) => (
            <div allRev={allRev}>
              <div className="lg:w-[1000px] mx-auto card card-side mb-5 rounded-xl shadow-xl grid lg:grid-cols-3 justify-center items-center">
                <figure>
                  <img
                    className="rounded-full ml-5 w-20"
                    src={allRev.userImage}
                    alt="user img"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{allRev.userName}</h2>
                  <p className="font-semibold">Place Name: {allRev.itemName}</p>
                  <p>{allRev.userReview}</p>
                  
                </div>
                <div className="card-actions m-5 justify-center">
                    <Link to={`/update/${allRev._id}`}>
                      <button  className="btn rounded-lg mr-5 text-xl">
                        <FaEdit></FaEdit>
                      </button>

                    </Link>
                    <button
                      className="btn rounded-lg text-xl text-red-600"
                      onClick={() => handleDelete(allRev)}
                    >
                      <FaTrash onClick={notify}></FaTrash>
                      <ToastContainer></ToastContainer>
                    </button>
                  </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <p>No reviews found</p>
        </>
      )}
    </div>
  );
};

export default MyReviews;
