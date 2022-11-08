import Book from "./Book";

function Booklist( { books }){

    console.log(books)

    return (
        <>
            {books.map((book) => {
                return <Book key={book.id} book={book}/>
            })}
        </>
    )
}

export default Booklist;