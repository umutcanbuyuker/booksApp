import React, { useContext, useEffect, useState } from 'react'
import {getBook, updateSelectedBook} from '../functions/http'
import { useNavigate, useLocation } from 'react-router-dom'
import BookPage from './BookPage'
import { BookContext } from '../context/bookcontext'

export default function BookUpdate() {
  const bookCtx = useContext(BookContext)
  const location = useLocation()
  const navigate =  useNavigate()
  const [selectedBook,setSelectedBook]= useState({
    bookname:"",
    description:"",
    author:"",
    picture:"",
    rcyled:false
  })
  useEffect(()=>{
    getBook(location.state.id).then((res)=>{
      setSelectedBook(res.data)
    })
  },[])

  // useEffect(()=>{
  //   console.log(location.state)
  //  setSelectedBook(location.state.book)
  // },[])

  const onChangeText = (event) => {
    setSelectedBook({...selectedBook, [event.target.name]:event.target.value})
  }
  const updateBook = async () => {
    try {
      await updateSelectedBook(location.state.id, selectedBook)
      await bookCtx.updateBook(location.state.id, selectedBook)
      alert(selectedBook.bookname + " Güncellendi")
      navigate("/")
    } catch (error) {
      alert(error)
    }
  }
  return (
    <BookPage book={selectedBook} text={"Güncelle"} btnclass={"btn btn-success mt-3"} onChangeText={onChangeText} handleBook={updateBook}/>
  )
}
