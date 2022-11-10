import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
    const reviewStore = useLoaderData();
    
    const [item, setItem] = useState(reviewStore);
    const notify = () => toast("Review updated successfully");


    useEffect(() =>{
        fetch('https://sr-studios-server.vercel.app/reviews')
        .then(res => res.json())
        .then(data => setItem(data))
    },[])
    const handleUpdateReview = event =>{
        event.preventDefault();
        
        const form = event.target;
        const review = form.review.value;
        const updateReview = {userReview:review}
        // console.log(reviewData:updatedReview);
        fetch(`https://sr-studios-server.vercel.app/reviews/${reviewStore._id}`,{
            method : "PUT",
            headers :{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updateReview)
        })
        .then(res => res.json())
        .then(data => {
            if(data.matchedCount > 0){
                
            }
            // console.log(data)
        })
        
    }
    return (
        <div className='flex flex-col mx-auto text-center justify-center'>
            
            <p className="text-3xl mx-auto lg:w-[1000px] font-bold my-6 text-center bg-base-200 p-8 shadow-lg rounded-lg">Update Item : {reviewStore.userReview}</p>
            <form onSubmit={handleUpdateReview}>
            <textarea  name="review" className="textarea lg:w-[1000px] textarea-bordered h-24 w-full" placeholder="Your Message" defaultValue={reviewStore.userReview} required></textarea>
            <br></br>
                <button onClick={notify} className="btn flex justify-center mx-auto rounded-lg shadow-lg my-5 text-xl" type="submit">Update Review</button>
                <ToastContainer></ToastContainer>
            </form>
        </div>
    );
};

export default Update;