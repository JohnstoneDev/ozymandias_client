import { useEffect, useState, useRef, useCallback } from 'react'
import Booklist from './Booklist'
import CollectedBooks from './CollectedBooks'
import ReviewList from './ReviewsList'
import { Link, Switch, Route } from "react-router-dom"


// Main Component, Everything else is nested here and accesses state as props  

// Navigation component that houses the links to the pages. 
function Navigation(){
    return(
        <>
            <div>
                <Link to="/">Book List</Link>
                <Link to="/collection">Collected Books</Link>
                <Link to="/reviews">Reviews</Link>
            </div>
        </>
    )
}

function MainDisplay(){ 
    const [criteria, setCriteria ] = useState('philosophy')
    const [books, setBooks ] = useState([]);
    const [collectedBooks, setCollectedBooks ] = useState([]);

    const criteriaRef = useRef(criteria);

    let booksUrl = `https://www.googleapis.com/books/v1/volumes?q=${criteria}`

    const getBooks = useCallback(() => {
            fetch(booksUrl)
            .then(r => r.json())
            .then(d => {
                setBooks(d.items)
                })
            .catch(e => console.log(e))
        },[booksUrl]);

    useEffect(() => {
        getBooks();
        getCollectedBooks();
    },[getBooks,criteria])


    function getCollectedBooks(){
        fetch('http://localhost:3000/books')
        .then(r => r.json())
        .then(d => {
            console.log(d)
            setCollectedBooks(d)
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        const typedCriteria = criteriaRef.current.value;

        if(typedCriteria !== " ") setCriteria(typedCriteria); 

        getBooks()
    }

    function SearchBar(){
        return (
            <form onSubmit={handleSubmit}>
                <input ref={criteriaRef} placeholder="Enter book,author or genre name"/>
                <button type='submit'>Search</button>
            </form>
        )
    }

    return (
        <div className='my-4 '>
            <Switch>
                <Route exact path="/">
                    <SearchBar />
                    <Booklist books={books}/>

                </Route>

                <Route exact path="/collections">
                    <CollectedBooks books={collectedBooks}/>

                </Route>

                <Route exact path="/reviews" >
                    <ReviewList />
                </Route>
                
            </Switch>
        </div>
    )
}

export default MainDisplay;