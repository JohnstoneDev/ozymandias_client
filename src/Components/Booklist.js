import Book from "./Book";

<<<<<<< HEAD
function Booklist( { books }){
    
    return (
        <div className="grid grid-cols-2 gap-4 order-first">
            {books.map((book) => {
                return <Book key={book.id} book={book}/>
            })}
=======
function Booklist({ apiBooks }){
    // console.log("booklist => passed down as props",apiBooks);
    
    const listItems = apiBooks.map((book) => {
       return ( <Book book={book}/>)
    })
    console.log(listItems[0])
    return (
        <div className="h-screen">
            <h2>A list of collected books from the api</h2>
            <div>
            l{listItems}
            </div>
        
 
>>>>>>> 8181d0bc04afc23d8668a8c0f5c2e6ec80f17f30
        </div>
    )
}

export default Booklist;