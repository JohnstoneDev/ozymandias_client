// Review List component should render individual review items
import { useEffect } from "react";
import Review from "./Review";

function ReviewList({ reviews, updateSpecificReview }){

    useEffect(() => {

    },[reviews])
    
    return (
        <div className="min-h-screen">
            {reviews.length <=0 ? <h3>There are no reviews!</h3> : <h3> This are your reviews </h3>}
            <div className="p-3 grid grid-cols-2 text-left">
                {reviews.map(review => {
                    return <Review key={review.id} review={review} updateSpecificReview={updateSpecificReview} />
                    })}
            </div>
        </div>
    )
}

export default ReviewList;