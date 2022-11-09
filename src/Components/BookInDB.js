import { useRef , useState } from 'react';
import defaultImage  from '../Default-Image.png'

function BookInDB({ book, clickFunction, buttonMessage, updateBookReview }){
    const { id, title, author, publisher, published_date, page_count, image_two, image_one, review, } = book 
    const comment = ('');
    const commentRef = useRef(comment)
    
    return (
        <>  
             <div className="flex gap-2 text-slate-300 align-middle justify-center my-3 max-h-30">
                <img src={ image_one || image_two || defaultImage } alt="" className="object-cover h-80 w-90 shadow-2xl"/>
                <div className="text-left">
                <h3>{title}</h3>
                <h3>{page_count} Pages</h3>
                <h4>Authors : {author}</h4>
                <h5>Published By : {publisher}, {published_date}</h5>
                <p>My Comments : {review} </p>
                <form hidden={review !== ""} onSubmit={(e) => {
                    e.preventDefault()
                    const newComm = commentRef.current.value
                    updateBookReview(id,newComm)
                }}>
                    <input type="text" ref={commentRef} placeholder='Add Comments Here'/>
                    <button type='submit'>Update Review</button>
                </form>
                <button onClick={() => clickFunction(id)}>{buttonMessage}</button>
                </div>
            </div>
        </>
    )
}

export default BookInDB;