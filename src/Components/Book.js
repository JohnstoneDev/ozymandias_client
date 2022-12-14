//  import defaultImage  from '../Default-Image.png'

function Book({ book , buttonMessage, clickFunction} ) {

    const { id, volumeInfo } = book; 
    const {title, authors, publisher, publishedDate, imageLinks,  pageCount } = volumeInfo;  
        
    return (
        <>
            <div className="flex gap-2 align-middle justify-center my-3 max-h-30 p-2 max-w-fit">
                <img src={imageLinks ? imageLinks.smallThumbnail : imageLinks.thumbnail } alt="" className="object-cover h-80 w-90 shadow-2xl"/>
                <div className="text-left">
                <h3>{title}</h3>
                <h3>{pageCount} Pages</h3>
                <h4>Authors : {authors}</h4>
                <h5>Published By : {publisher}, {publishedDate}</h5>
                <button 
                onClick={() => clickFunction(id)}
                className="px-3 text-yellow-50 bg-amber-500 border rounded-sm hover:bg-red-900"
                >{buttonMessage}</button>
                </div>
            </div>
        </>
        
    )
}

export default Book;
