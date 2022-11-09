import Book from "./Book";

function Booklist( { books }){
    
    return (
        <div className="grid grid-cols-2 gap-4 order-first">
            {books.map((book) => {
                return <Book key={book.id} book={book}/>
            })}
        </div>
    )
}

export default Booklist;