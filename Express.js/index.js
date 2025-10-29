import express from "express"
import booksRoutes from "../Express.js/routes/book.js"

const app = express()
const PORT= 5000;

app.use(express.json())
app.use("/books",booksRoutes)


app.listen(5000,()=>{console.log("Server run at port 5000")})