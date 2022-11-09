import defaultImage  from '../Default-Image.png'

function Book({ book} ) {

    const {id, volumeInfo } = book; 
    const {title, authors, publisher, publishedDate, imageLinks,  pageCount } = volumeInfo;  
        
    return (
        <>
            <div className="flex gap-2 align-middle justify-center my-3 max-h-30">
                <img src={defaultImage || imageLinks ? imageLinks.smallThumbnail : imageLinks.thumbnail } alt="" className="object-cover h-80 w-90 shadow-2xl"/>
                <div className="text-left">
                <h3>{title}</h3>
                <h3>{pageCount} Pages</h3>
                <h4>Authors : {authors}</h4>
                <h5>Published By : {publisher}, {publishedDate}</h5>
                <button>Add To Collection</button>
                </div>
            </div>
        </>
        
    )
}

export default Book;
