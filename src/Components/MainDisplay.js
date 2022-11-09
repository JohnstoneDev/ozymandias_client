import { Link, Switch, Route } from "react-router-dom";
import { useEffect, useState, useRef, useCallback } from 'react';
import CollectedBooks from './CollectedBooks'
import ReviewList from './ReviewsList'
import Booklist from './Booklist'


// Main Component, Everything else is nested here and accesses state as props  

// Navigation component that houses the links to the pages. 
function Navigation(){
    return(
        <>
            <div className='flex gap-4 items-center align-middle justify-center'>
                <Link to="/">Available Books</Link>
                <Link to="/collection">Collected Books</Link>
                <Link to="/reviews">Reviews</Link>
            </div>
        </>
    )
}

function MainDisplay(){ 
    const [books, setBooks ] = useState([]);
    const [collectedBooks, setCollectedBooks ] = useState([]);
    const [criteria, setCriteria ] = useState('philosophy');
    
    const criteriaRef = useRef(criteria);

    let booksUrl = `https://www.googleapis.com/books/v1/volumes?q=philosophy'}`

    function getCollectedBooks(){
        fetch('http://localhost:3000/books')
        .then(r => r.json())
        .then(d => { setCollectedBooks(d)})
        .catch(e => console.log(e))
    }
    
    useEffect(() => {
        fetch(booksUrl)
        .then(r => r.json())
        .then(d => {
            setBooks(d.items)
            console.log("returnnnedddd",d.items)
        })
        .catch(e => console.log(e))
    },[booksUrl]);

    function handleSubmit(e){
        e.preventDefault()
        const typedCriteria = criteriaRef.current.value;

        if(typedCriteria !== " ") setCriteria(typedCriteria); 

        
    }

    
    function SearchBar(){
        return (
            <form onSubmit={handleSubmit}>
                <input ref={criteriaRef} placeholder="Enter book,author or genre name"/>
                <button type='submit'>Search</button>
            </form>
        )
    }

    useEffect(() => {
        getCollectedBooks();
    },[criteria])

    return (
        <div className='my-4'>
             <Navigation />
          <Switch>
               
                <Route path="/collection">
                    <CollectedBooks books={collectedBooks} />
                </Route>

                <Route path="/reviews">
                    <ReviewList />
                </Route>

                <Route path="/">
                    {/* <SearchBar /> */}
                    <Booklist apiBooks={books} />
                </Route>
                
          </Switch>
 

         </div>
    )
}

export default MainDisplay;


// <Route path="" component={<Booklist apiBooks={books}/>} >
//                     {/* <SearchBar > */}
//                     {/* <Booklist apiBooks={books}/> */}
//                 </Route>