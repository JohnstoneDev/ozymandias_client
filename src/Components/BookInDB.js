import { useEffect, useRef } from 'react';
import defaultImage  from '../Default-Image.png'

function BookInDB({ book, clickFunction, buttonMessage, updateBookReview }){
    const { id, title, author_name, publisher, published_date, page_count, image_two, image_one, review } = book 
    const comment = ('');
    const commentRef = useRef(comment)

    useEffect(() => {

    },[book])
    
    return (
        <>  
             <div className="flex gap-2 text-slate-300 align-middle justify-center my-3 h-full max-h-30 max-w-fit">
                <img src={ image_one || image_two || defaultImage } alt="" className="object-cover h-80 w-90 shadow-2xl"/>
                <div className="text-left">
                <h3>{title}</h3>
                <h3>{page_count} Pages</h3>
                <h4>Authors : {author_name}</h4>
                <h5>Published By : {publisher}, {published_date}</h5>
                <p>My Comments : {review} </p>
                <form hidden={review !== ""} className="mt-2" onSubmit={(e) => {
                    e.preventDefault()
                    const newComm = commentRef.current.value
                    updateBookReview(id,newComm)
                }}>
                    <input type="text" ref={commentRef} placeholder='Add Comments Here' className='text-black'/>
                    <button type='submit' className='px-3 text-white bg-amber-500 border rounded-sm hover:bg-red-900'>Create Review</button>
                </form>
                <button 
                onClick={() => clickFunction(id)}
                className="px-3 mt-2 text-white bg-red-900 border rounded-sm hover:bg-amber-500"
                >{buttonMessage}</button>
                </div>
            </div>
        </>
    )
}

export default BookInDB;