import React, { useContext, useState } from 'react'
import BookPage from './BookPage'
import { addSelectedBook } from '../functions/http'
import { useNavigate } from 'react-router-dom'
import { BookContext } from '../context/bookcontext'

export default function BookCreate() {
const bookCtx = useContext(BookContext)
const navigate = useNavigate()
  const [newBook, setNewBook] = useState({
    id:"",
    bookname:"",
    description:"",
    author:"",
    picture:"",
    recyled:false
})
  const onChangeText = (event)=>{
    setNewBook ({...newBook, [event.target.name]: event.target.value})
  }
  const createBook = async ()=> {
    console.log("new Book", newBook)
    try {
      const id = await addSelectedBook(newBook)
      bookCtx.addBook({...newBook, id:id })
      navigate("/")
    } catch (error) {
      
    }
  }
  return (
    <BookPage book={newBook} btnclass={"btn btn-success mt-3"} onChangeText={onChangeText} handleBook={createBook} text={"Ekle"}/>
  )
}
