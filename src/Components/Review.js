// Review Component should receive a prop of a review item from review list and display it

function Review( { review }){
    const { title, comment } = review 
    return (
        <>
            <div>
                <h3>Book Title : {title}</h3>
                <div className="flex flex-row gap-4 align-middle justify-center">
                <h3>Comments :</h3>
                <p>
                    {comment}
                </p>
                </div>
            </div>
        </>
    )
}

export default Review;