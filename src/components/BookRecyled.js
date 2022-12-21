import React, { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BookContext } from '../context/bookcontext';
import BookTable from './BookTable';

export default function BookRecyled() {
  const navigate = useNavigate()
  const bookCtx = useContext(BookContext);

  const rclBooks = bookCtx.books.filter((c) => {
    return (c.recyled === true)
  })

  useEffect(() => {
    if (rclBooks.length == 0) {
      navigate("/")
    }
  },[rclBooks.length])

  return (
    <div>
      <BookTable books={rclBooks} heading="Recyled Books" />
    </div>
  )
}
