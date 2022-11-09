import { Link, Switch, Route } from "react-router-dom";
import { useEffect, useState, useRef, useCallback } from 'react';
import CollectedBooks from './CollectedBooks'
import ReviewList from './ReviewsList'
import Booklist from './Booklist'


// Main Component, Everything else is nested here and accesses state as props  

// Navigation component that houses the links to the pages. 
function Navigation(){
    return(
        <div className='flex gap-3 items-center justify-center p-3'>
            <Link to="/" className='border-b-2 hover:text-slate-500 hover:border-b-amber-300'>Home</Link>
            <Link to="/collection" className='border-b-2  hover:text-slate-500 hover:border-b-amber-300' >Collection</Link>
            <Link to="/reviews" className='border-b-2 hover:text-slate-500 hover:border-b-amber-300'>Reviews</Link>
        </div>
    )
}

function MainDisplay(){ 
    const [books, setBooks ] = useState([]);
    const [collectedBooks, setCollectedBooks ] = useState([]);
    const [criteria, setCriteria ] = useState('philosophy');
    
    const criteriaRef = useRef(criteria);

    let booksUrl = `https://www.googleapis.com/books/v1/volumes?q=${criteria}`

    function getCollectedBooks(){
        fetch('http://localhost:3000/books')
        .then(r => r.json())
        .then(d => { setCollectedBooks(d)})
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

    useEffect(() => {
        getCollectedBooks();
        getBooks()
    },[getBooks,criteria])

    return (
        <div className='my-4'>
            <Navigation />
            <Switch>
                <Route path="/collection">
                    <CollectedBooks books={collectedBooks}/>
                </Route>

                <Route path="/reviews">
                    <ReviewList />
                </Route>

                <Route path="/">
                    <SearchBar />
                    <Booklist books={books}/>
                </Route>

            </Switch>
        </div>
    )
}

export default MainDisplay;
