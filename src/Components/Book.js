function Book( { book } ) {
    console.log(book)
    
    const { id, volumeInfo, imageLinks } = book; 
    const {title, authors, description  } = volumeInfo;
    const { smallTHumbnail, thumbnail } = imageLinks
    
    
    return (
        <>
            <div>
                <h3>{title}</h3>
                <h3>{authors[0]}</h3>
            </div>

        </>
    )
}

export default Book;