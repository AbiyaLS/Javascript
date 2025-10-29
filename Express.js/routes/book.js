import express from "express"
import { deleteBook, getBook, getBooks, postBook, updateBook } from "../controller/bookController"

const router =express.Router()


router.get("/",getBooks)

router.get("/:id",getBook)

router.post("/",postBook)

router.put("/:id",updateBook)

router.delete("/:id",deleteBook)

export default router