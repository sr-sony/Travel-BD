import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);


    const handleDelete = review =>{
        const agree = window.confirm(`Are you sure you want to delete : ${review.userReview}`)
        if(agree){
            console.log("Deleting user with id:", review._id)
            fetch(`http://localhost:5000/reviews/${review._id}`,{
                method :'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    alert("User deleted successfully")

                    const remaining = reviews.filter(reviewDlt => reviewDlt._id !== review._id)
                    setReviews(remaining)
                }
                console.log(data)
            })
        }
    }
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    const myAllReviews = reviews.filter(obj => {
        return obj.userEmail === user?.email;
    });
    return (
        <div>
            {
                user?.uid ?
                <>
            {
                myAllReviews.map(allRev => <p allRev={allRev}>{<p>name: {allRev.userName}</p>}{allRev.userReview}
                <button onClick={() => handleDelete(allRev)}>X</button>
                <Link to ={`/update/${allRev._id}`}>
                            <button>Update</button>
                        </Link>
                </p>)
            }
                </>
                :
                <>
                <p>No reviews found</p>
                </>
            }
        </div>
    );
};

export default MyReviews;