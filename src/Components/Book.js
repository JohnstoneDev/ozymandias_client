function Book( { book} ) {
    console.log(book)
    
    const {id, volumeInfo } = book; 
    const {title, authors, publisher, publishedDate, description  } = volumeInfo;
    
    
    return (
        <>
            <div>
                <h3>{title}</h3>
            </div>

        </>
    )
}

export default Book;