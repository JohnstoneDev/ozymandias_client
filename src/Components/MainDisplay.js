import { Link, Switch, Route } from "react-router-dom";
import { useEffect, useState, useRef, useCallback } from 'react';
import CollectedBooks from './CollectedBooks'
<<<<<<< HEAD
import { Link, Switch, Route } from "react-router-dom"
import ReviewList from './ReviewsList'
=======
import ReviewList from './ReviewsList'
import Booklist from './Booklist'
>>>>>>> 8181d0bc04afc23d8668a8c0f5c2e6ec80f17f30


// Main Component, Everything else is nested here and accesses state as props  

// Navigation component that houses the links to the pages. 
function Navigation(){
    return(
<<<<<<< HEAD
        <div className='flex gap-3 items-center justify-center p-3'>
            <Link to="/" className='border-b-2 hover:text-slate-500 hover:border-b-amber-300'>Home</Link>
            <Link to="/collection" className='border-b-2  hover:text-slate-500 hover:border-b-amber-300' >Collection</Link>
            <Link to="/reviews" className='border-b-2 hover:text-slate-500 hover:border-b-amber-300'>Reviews</Link>
        </div>
=======
        <>
            <div className='flex gap-4 items-center align-middle justify-center'>
                <Link to="/">Available Books</Link>
                <Link to="/collection">Collected Books</Link>
                <Link to="/reviews">Reviews</Link>
            </div>
        </>
>>>>>>> 8181d0bc04afc23d8668a8c0f5c2e6ec80f17f30
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
            <form onSubmit={handleSubmit} className="text-slate-700 p-3 ">
                <input ref={criteriaRef} placeholder="Enter book,author or genre name" className='text-black w-100'/>
                <button type='submit' className='px-3 text-white bg-amber-500 border rounded-sm hover:bg-red-900'>Search</button>
            </form>
        )
    }

    useEffect(() => {
        getCollectedBooks();
    },[criteria])

    return (
        <div className='my-4'>
<<<<<<< HEAD
            <Navigation />
            <Switch>
                <Route path="/collection">
                    <CollectedBooks books={collectedBooks}/>
=======
             <Navigation />
          <Switch>
               
                <Route path="/collection">
                    <CollectedBooks books={collectedBooks} />
>>>>>>> 8181d0bc04afc23d8668a8c0f5c2e6ec80f17f30
                </Route>

                <Route path="/reviews">
                    <ReviewList />
                </Route>

                <Route path="/">
<<<<<<< HEAD
                    <SearchBar />
                    <Booklist books={books}/>
                </Route>

            </Switch>
        </div>
=======
                    {/* <SearchBar /> */}
                    <Booklist apiBooks={books} />
                </Route>
                
          </Switch>
 

         </div>
>>>>>>> 8181d0bc04afc23d8668a8c0f5c2e6ec80f17f30
    )
}

export default MainDisplay;


// <Route path="" component={<Booklist apiBooks={books}/>} >
//                     {/* <SearchBar > */}
//                     {/* <Booklist apiBooks={books}/> */}
//                 </Route>