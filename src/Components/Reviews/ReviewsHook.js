import React from 'react'
import { useEffect, useState } from "react"
import ReviewBox from '../reviewBox/ReviewBox';

const ReviewHook = () => {

  const [Review, setReview] = useState([]);
  useEffect(() => {
    
    fetch('Review.json')
      .then(res => res.json())
      .then(data => setReview(data))
  }, []);

  return (
   <div>
        {
            Review.map(Review =>  <ReviewBox Review = {Review}></ReviewBox>) 
        }
    
        {/* console.log(Review) */}
   </div>
        
  );

};

export default ReviewHook;
