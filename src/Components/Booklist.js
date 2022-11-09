import Book from "./Book";

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
        
 
        </div>
    )
}

export default Booklist;