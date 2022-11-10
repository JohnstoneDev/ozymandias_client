// Review List component should render individual review items
import { useEffect } from "react";
import Review from "./Review";

function ReviewList({ reviews, updateSpecificReview }){

    useEffect(() => {

    },[reviews])
    
    return (
        <div className="h-screen">
            {reviews.length <=0 ? <h3>There are no reviews!</h3> : <h3> This are your reviews </h3>}
            <div className="p-3">
                {reviews.map(review => {
                    return <Review key={review.id} review={review} updateSpecificReview={updateSpecificReview} />
                    })}
            </div>
        </div>
    )
}

export default ReviewList;