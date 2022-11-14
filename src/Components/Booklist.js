import Book from "./Book";

function Booklist( { books, clickFunction, buttonMessage }){
    
    return (
        <div className="grid grid-cols-2 only:order-first p-2 m-4">
            {books.map((book) => {
                return <Book key={book.id} book={book} clickFunction={clickFunction} buttonMessage={buttonMessage}/>
            })}
        </div>
    )
}

export default Booklist;