import { Link, Switch, Route } from "react-router-dom";
import { useEffect, useState, useRef, useCallback } from 'react';
import CollectedBooks from './CollectedBooks'
import ReviewList from './ReviewsList'
import Booklist from './Booklist'
import AuthorList from "./AuthorList";


// Main Component, Everything else is nested here and accesses state as props  

// Navigation component that houses the links to the pages. 
function Navigation(){
    return(
        <div className='flex gap-3 items-center justify-center p-3'>
            <Link to="/" className='border-b-2 hover:text-slate-500 hover:border-b-amber-300'>Home</Link>
            <Link to="/collection" className='border-b-2  hover:text-slate-500 hover:border-b-amber-300' >Collection</Link>
            <Link to="/reviews" className='border-b-2 hover:text-slate-500 hover:border-b-amber-300'>Reviews</Link>
            <Link to="/authors" className='border-b-2 hover:text-slate-500 hover:border-b-amber-300'>My Authors</Link>        
        </div>
    )
}

function MainDisplay(){ 
    const [books, setBooks ] = useState([]);
    const [collectedBooks, setCollectedBooks ] = useState([]);
    const [criteria, setCriteria ] = useState('philosophy');
    const [reviews, setReviews ] = useState([]);
    const [authors, setAuthors ] = useState([]);

    const criteriaRef = useRef(criteria);

    let booksUrl = `https://www.googleapis.com/books/v1/volumes?q=${criteria}`

    function getCollectedBooks(){
        fetch('http://localhost:9292/books')
        .then(r => r.json())
        .then(d => { setCollectedBooks(d)})
        .catch(e => console.log(e))
    }

    function getReviews(){
        fetch('http://localhost:9292/reviews')
        .then(r => r.json())
        .then(d => setReviews(d))
        .catch(e => console.log(e))
    }
    
    function getAuthors(){
        fetch('http://localhost:9292/authors')
        .then(r => r.json())
        .then(d => setAuthors(d))
        .catch(e => console.log(e))
    }

    const getBooks = useCallback(()=> {
        fetch(booksUrl)
        .then(r => r.json())
        .then(d => {setBooks(d.items)})
        .catch(e => console.log(e))
    },[booksUrl])


    function handleSubmit(e){
        e.preventDefault()
        const typedCriteria = criteriaRef.current.value;
        if(typedCriteria !== " ") setCriteria(typedCriteria); 
        getBooks()        
    }

   
    function SearchBar(){
        return (
            <form onSubmit={handleSubmit} className="text-slate-700 p-3 ">
                <input ref={criteriaRef} placeholder="Enter book,author or genre name" className='text-black w-100'/>
                <button type='submit' className='px-3 text-white bg-amber-500 border rounded-sm hover:bg-red-900'>Search</button>
            </form>
        )
    }

    function addBookToCollection(receivedId){

        const selectedBook = books.find((book) => book.id === receivedId )
        
        const { volumeInfo } = selectedBook; 
        const {title, authors, publisher, publishedDate, imageLinks,  pageCount } = volumeInfo;  

        const bookData ={
            title : title,
            author : authors[0],
            publisher : publisher,
            published_date : publishedDate,
            page_count : pageCount,
            image_one : imageLinks.smallThumbnail,
            image_two : imageLinks.thumbnail,
            review : ""
        }

        console.log(bookData);

        fetch(`http://localhost:9292/books`,{
            method : "POST",
            headers : {
                'Content-Type' : "application/json",
            },
            body : JSON.stringify(bookData)
        })
        .then(r => r.json())
        .then(d =>  setCollectedBooks([...collectedBooks,d]))
        .catch(e => console.log(e))
    }

    function removeBookFromCollection(passedId){            
        fetch(`http://localhost:9292/books/${passedId}`,{
            method : "DELETE",
            headers : { "Content-Type" : "application/json"},
        })
        .then(r => r.json())
        .then(() =>  setCollectedBooks(collectedBooks.filter(book => book.id !== passedId)))
        .catch(e => console.log(e))
    }

        function updateBookReview(passedId,updatedComment){  
            fetch(`http://localhost:9292/books/${passedId}`,{
                method : 'PATCH',
                headers : {
                    'Content-Type' : "application/json"
                },
                body : JSON.stringify({
                    review : updatedComment
                })
            })
            .then(r => r.json())
            .then(d => {
                console.log(d)

                const newBooks = collectedBooks.map(b => {
                   return  b.id === passedId ? b = d : b
                 })

                setCollectedBooks(newBooks)
            })
            .catch(e => console.log(e))
        }


        function deleteAllBooks(){
            fetch('http://localhost:9292/books',{
                method : "DELETE",
                headers : {
                    'Content-Type' : "application/json"
                }
            })
            .then(r => r.json())
            .then(d => {
                console.log(d)
                setCollectedBooks([])
                setAuthors([])
                setReviews([])
            })
            .catch(e => console.log(e))
        }

        function updateSpecificReview(receivedId,string){
            fetch(`http://localhost:9292/reviews/${receivedId}`,{
                method : "PATCH",
                headers : { 'Content-Type' : "application/json" },
                body : JSON.stringify( { 
                    comment : string
                })
            })
            .then(r => r.json())
            .then(d => {
                console.log(d)
                const newReviews = reviews.map(review => {
                    return review.id === receivedId ? review = d : review
                })
                setReviews(newReviews)
            })
            .catch(e => console.log(e))
        }

    useEffect(() => {
        getCollectedBooks();
        getBooks()
        getReviews()
        getAuthors()
    },[getBooks,criteria])

    return (
        <div className='my-4 min-h-full bg-zinc-800'>
            <Navigation />
            <Switch>
                <Route path="/collection">
                    <CollectedBooks books={collectedBooks} clickFunction={removeBookFromCollection} buttonMessage={"Delete Book"} updateBookReview={updateBookReview} deleteAllBooks={deleteAllBooks}/>
                </Route>

                <Route path="/reviews">
                    <ReviewList reviews={reviews} updateSpecificReview={updateSpecificReview}/>
                </Route>

                <Route path="/authors">
                    <AuthorList authors={authors}/>
                </Route>

                <Route path="/">
                    <SearchBar />
                    <Booklist books={books} clickFunction={addBookToCollection} buttonMessage={"Add To Collection"}/>
                </Route>

            </Switch>
        </div>
    )
}

export default MainDisplay;
