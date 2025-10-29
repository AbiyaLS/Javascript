let books=[
    {id: 123, name: "Alice in Wonderland", author: "Williom Beck"},
    {id: 345, name: "Beauty and Beast", author: "Robert S"},
    {id: 567, name: "Snow White", author: "Alice James"},
]

export const getBooks = (req,res)=>{
    res.json(books)
}

export const postBook = (req,res)=>{
    const {name,author}=req.body
    if(!name || !author) return res.status(404).json({message: "Book Name and author not found"})
    const newBooks={id: books.length + 1, name, author}
    books.push(newBooks)
    res.status(200).json(newBooks)
}

export const getBook = (req,res)=>{
    const bookId = parseInt(req.params.id)
    const book = books.find(b => b.id === bookId)
    if(!bookId) return res.status(404).json({message : "User Not Found"})
    res.json(book)
}

export const updateBook = (req,res)=>{
    const book = books.find(b => b.id === parseInt(req.params.id))
    if(!book) return res.status(404).json({message : "Book Not Found"})
    
    const {name, author}= req.body
    if(name)  book.name = name
    if(author)  book.author = author
    res.json(book)
}

export const deleteBook = (req,res)=>{
    const index=books.findIndex(b => b.id === parseInt(req.params.id))
    if(index === -1) return res.status(404).json({message : "Book Not Found"})
    
    const dltbooks =books.splice(index,1)
    res.json(dltbooks[0])
}
