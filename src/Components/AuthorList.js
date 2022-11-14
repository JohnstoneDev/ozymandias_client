import Author from "./Author";

function AuthorList({ authors }){
   
    return (
        <>
        <div className="flex flex-col">
            {authors.length <= 0 ? <h3 className="py-3">You haven't started Reading yet</h3> : <h3 className="py-3">You seem to like this authors</h3>}
            <div className="grid grid-cols-2 gap-2 m-4 p-4">
                {authors.map(author => {
                    return <Author key={author.id} author={author} />
                })}
            </div>
        </div>
        </>
    )
}

export default AuthorList;