function Book( { book } ) {
    
    
    // const { id, volumeInfo, imageLinks } = book; 
    // const {title, authors, description  } = volumeInfo;
    // console.log("rrrrrrrr",title)
    // const { smallThumbnail, thumbnail } = imageLinks
    
    // console.log("fghfhfcghf"+book)
    // console.log(book)
    // console.log(typeof book)
    // const{kind,selfLink}=book.volumeInfo
    // console.log(kind)
    console.log('rerender')
    return (
        
            <div>
                <h3>WEREtret</h3>
                <h3>{book.volumeInfo.title}</h3>
            </div>

        
    )
}

export default Book;