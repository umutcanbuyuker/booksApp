import React, { useEffect, useState } from 'react'
import {getBook} from '../functions/http'
import { useLocation } from 'react-router-dom'
import BookPage from './BookPage'

export default function BookUpdate() {
  const location = useLocation()
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


  return (
    <BookPage book={selectedBook} text={"Book Update"} />
  )
}
