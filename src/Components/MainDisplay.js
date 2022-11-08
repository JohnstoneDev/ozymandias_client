import { useEffect, useState, useRef, useCallback } from 'react'
import Booklist from './Booklist'
import CollectedBooks from './CollectedBooks'
import { Link, Switch, Route } from "react-router-dom"


// Main Component, Everything else is nested here and accesses state as props  

// Navigation component that houses the links to the pages. 
function Navigation(){
    return(
        <>
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
        getCollectedBooks();
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
            <SearchBar />
            <Booklist books={books}/>
            <CollectedBooks books={collectedBooks}/>
        </div>
    )
}

export default MainDisplay;