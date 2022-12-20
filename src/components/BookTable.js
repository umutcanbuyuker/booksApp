import React, { useContext, useEffect, useState } from 'react'
import { BookContext } from '../context/bookcontext';
import { deleteSelectedBook, updateSelectedBook } from '../functions/http'
import { useNavigate } from 'react-router-dom';

export default function BookTable({ heading, books }) {
    const date = Date.now();
    console.log(date)
    const context = useContext(BookContext);
    const navigate = useNavigate()

        const deleteBook = async (id) => {
            try {
                await deleteSelectedBook(id)
                await context.deleteBook(id)
            } catch (error) {
                console.log(error)
            }
        }
        const updateBook = async (id) =>{
              navigate("/book/update/"+ id,{
                state : {id: books.id}
              })
        }

    var render = books.map((b) => {
        return (
            
            <tr key={b.id}>
                <td><img src={b.picture} width="75px" /></td>
                <td className='align-middle'>{b.bookname}</td>
                <td className='align-middle'>{b.description}</td>
                <td className='align-middle'>{b.author}</td>
                <td><a className='btn btn-success'>Update</a></td>
                {/* <td><a className='btn btn-danger'>Delete</a></td>         */}
                <td>
                    <button 
                        className='btn btn-danger'
                        onClick={() => {
                            deleteBook(b.id)
                        }}
                    >Delete</button>
                </td>    
                <td>
                <button 
                        className='btn btn-danger'
                        onClick={() => {
                            updateBook(b.id)
                        }}
                    >Update</button>
                </td>     
            </tr>
            
        )
    })
    return (
        <div>
            <div className='row'>
                <div className='col-md-7'>
                    <button className='btn btn-primary' onClick={()=> navigate("/book/create")}>New Book</button>
                    <h3 className='text-center text-uppercase font-weight-bold'>{heading}</h3>
                    <table className='table table-hover table-striped table-bordered shadow-lg p-3 mb-5 bg-white rounded' >
                        <thead className='table-dark'>
                            <tr>
                                <th>Picture</th>
                                <th>Book Name</th>
                                <th>Description</th>
                                <th>Author</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {render}
                            {/* <tr>
                                <td><img src={b.picture} width="75px" /></td>
                                <td>{b.bookname}</td>
                                <td>{b.description}</td>
                                <td>{b.author}</td>
                                <td><a className='btn btn-success'>Update</a></td>
                                <td><a className='btn btn-danger'>Delete</a></td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
