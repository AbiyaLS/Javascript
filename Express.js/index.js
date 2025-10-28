const express = require("express")

const app = express()
const PORT= 5000;

app.use(express.json())

let books=[
    {id: 123, name: "Alice in Wonderland", author: "Williom Beck"},
    {id: 345, name: "Beauty and Beast", author: "Robert S"},
    {id: 567, name: "Snow White", author: "Alice James"},
]

app.get("/books",(req,res)=>{
    res.json(books)
})

app.get("/books/:id",(req,res)=>{
    const bookId = parseInt(req.params.id)
    const book = books.find(b => b.id === bookId)
    if(!bookId) return res.status(404).json({message : "User Not Found"})
    res.json(book)
})

app.post("/books",(req,res)=>{
    const {name,author}=req.body
    if(!name || !author) return res.status(404).json({message: "Book Name and author not found"})
    const newBooks={id: books.length + 1, name, author}
    books.push(newBooks)
    res.status(200).json(newBooks)
})

app.put("/books/:id",(req,res)=>{
    const book = books.find(b => b.id === parseInt(req.params.id))
    if(!book) return res.status(404).json({message : "Book Not Found"})
    
    const {name, author}= req.body
    if(name)  book.name = name
    if(author)  book.author = author
    res.json(book)
})

app.delete("/books/:id",(req,res)=>{
    const index=books.findIndex(b => b.id === parseInt(req.params.id))
    if(index === -1) return res.status(404).json({message : "Book Not Found"})
    
    const dltbooks =books.splice(index,1)
    res.json(dltbooks[0])
})


app.listen(5000,()=>{console.log("Server run at port 5000")})