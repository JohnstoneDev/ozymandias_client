// Receives props of books from main display and should be responsible 
// for adding a review, edit the review or delete the book from the list of 
// collected items.

import Book from "./Book";

function CollectedBooks({ books }){
    console.log(books)
    return (
        <>
        <div className="py-3 text-slate-500">
            {books.length <= 0 ? <h3> You have no books !</h3> : <h3> This is your collection !</h3>}
            {books.map((book) => {
                return <Book key={book.id} book={book} />
            })}
        </div>
        </>
    )
}

export default CollectedBooks;