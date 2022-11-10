function Author({ author }){
    const { name , books } = author 

    const authorsBooks = books.map(book => {
        return (
            <div key={book.id}>
            <h3>Their Books</h3>
            <h4>{book.title}</h4>     
        </div>
        )
    })

    return (
        <>
            <div className="h-full flex justify-center gap-4">
                <h2 className="text-slate-400">{name}</h2>
                {authorsBooks}
            </div>
        </>
    )
}

export default Author; 