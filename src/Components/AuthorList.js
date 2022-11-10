import { useEffect } from "react";
import Author from "./Author";

function AuthorList({ authors }){
    console.log(authors)

    useEffect(() => {

    },[authors])

    return (
        <>
        <div className="h-screen">
            {authors.length <= 0 ? <h3 className="py-3">You haven't started Reading yet</h3> : <h3 className="py-3">You seem to like this authors</h3>}
            {authors.map(author => {
                return <Author key={author.id} author={author} />
            })}
        </div>
        </>
    )
}

export default AuthorList;