// Receives props of books from main display and should be responsible 
// for adding a review, edit the review or delete the book from the list of 
// collected items.

import { useEffect } from "react";
import BookInDB from "./BookInDB";

function CollectedBooks({ books, buttonMessage, clickFunction , updateBookReview, deleteAllBooks }){

    useEffect(() => {

    },[books])

    return (
        <>
        <div className="py-3 text-slate-500 bg-zinc-800 h-screen">
            {books.length <= 0 ? <h3> You have no books !</h3> : <h3> This is your collection !</h3>}
            {books.map((book) => {
                return <BookInDB key={book.id} book={book} buttonMessage={buttonMessage} clickFunction={clickFunction} updateBookReview={updateBookReview}/>
            })}

            <button hidden={books.length <= 0} onClick={deleteAllBooks}>Delete All Books</button>
        </div>
        </>
    )
}

export default CollectedBooks;