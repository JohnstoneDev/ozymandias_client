// Review Component should receive a prop of a review item from review list and display it

import { useState, useRef, useEffect } from "react";

function Review( { review , updateSpecificReview }){
    const { id, book_title, comment, created_at, updated_at } = review 

    const [ clicked, setClicked ] = useState(false)
    const reviewComment = ''
    const reviewCommRef = useRef(reviewComment);

    useEffect(() => {

    },[review])

    return (
        <>
            <div className="flex flex-col">
                <h3 className="text-slate-400">Book Title : {book_title}</h3>
                <div className="flex flex-row gap-4 align-middle justify-center">
                <h3>Comments :</h3>
                <p className="">
                    {comment}
                </p>
                </div>
                <div className="p-2">
                    <p>created at: <span className="text-neutral-500">{created_at}</span></p>
                     <p>updated at : <span className="text-neutral-500">{updated_at}</span></p>
                    <button onClick={() => setClicked(true)}> Update This Review</button>
                </div>
            </div>

            <form hidden={!clicked} 
                    onSubmit={(e) => {
                        e.preventDefault()
                        const newComm = reviewCommRef.current.value
                        updateSpecificReview(id,newComm)
                        setClicked(false)
                    }}>
                <input type="text" ref={reviewCommRef} placeholder={"Write the new Comment here"} className="text-black"/>
                <input type="submit" />
            </form>
        </>
    )
}

export default Review;
