import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const reviewStore = useLoaderData();
    
    const [item, setItem] = useState(reviewStore);
    // console.log(user)

    useEffect(() =>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setItem(data))
    },[])
    const handleUpdateReview = event =>{
        event.preventDefault();
        
        const form = event.target;
        const review = form.review.value;
        const updateReview = {userReview:review}
        // console.log(reviewData:updatedReview);
        fetch(`http://localhost:5000/reviews/${reviewStore._id}`,{
            method : "PUT",
            headers :{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updateReview)
        })
        .then(res => res.json())
        .then(data => {
            if(data.matchedCount > 0){
                alert("Review Update successfully")
                
            }
            // console.log(data)
        })
        
    }
    return (
        <div>
            <h2>Please Update: {reviewStore.userReview}</h2>
            <form onSubmit={handleUpdateReview}>
            <textarea  name="review" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" defaultValue={reviewStore.userReview} required></textarea>
                <button type="submit">Update Review</button>
            </form>
        </div>
    );
};

export default Update;