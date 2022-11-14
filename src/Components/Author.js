function Author({ author }){
    const { name , books } = author 

    const authorsBooks = books.map(book => {
        return (
            <div key={book.id} className="flex flex-col mt-2">
            <h4>{book.title}</h4>     
        </div>
        )
    })

    return (
        <>
            <div className="h-full justify-center gap-4  text-left max-w-fit">
                <div className="">
                    <h2 className="text-slate-400">{name}</h2>
                    <h3 className="text-slate-500">Their Books :</h3>
                </div>
                {authorsBooks}
            </div>
        </>
    )
}

export default Author; 