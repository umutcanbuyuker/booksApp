import React, { useEffect, useContext, useState } from 'react'
import { BookContext } from '../context/bookcontext';
import { getBooks } from '../functions/http'
import BookTable from './BookTable';

export default function BookList() {
  // const [blist, setBlist] = useState([]); // Buraya global olarak blist tanımlamazsak return içerisinde blist i kullanamıyorduk. Bu sayede map fonksiyonunu return de kullanabileceğiz.
  const user = JSON.parse(localStorage.getItem("user"))
  const bookCtx = useContext(BookContext)
  console.log(user)
//   const [user,setUser] = useState({
//     "id":1,
//     "name":"samil@abc.com",
//     "role":"user"
// })
// useEffect(()=>{
//   let text = localStorage.getItem("testJSON")
//   let obj = JSON.parse(text)
// },[])

// const [loggedin,setLoggedin]= useState(false)

  useEffect(() => {
    async function getAllBooks() {
      try {
        const books = await getBooks();
        // setBlist(books) 
        bookCtx.sortDesc(books); // context te saklamış olduk.
        console.log(bookCtx.books)
      } catch (error) {
        console.log(error)
      }
    }
    getAllBooks()
  },[])


  // console.log(blist)

  return (
    <div>
      <BookTable books={bookCtx.books} heading={"Book List"} />
    </div>
  )
}
