import React, { useEffect, useState } from 'react';
import { Book } from '../main';
import { delBook } from './adminHandler';

function ListElement(props) {
     const [book, setBook] = useState(Book.createDefault());
     const [index, setIndex] = useState(1);

     useEffect(() => {
          console.log(props.books);
          setBook(Book.fromJson(props.content));
          setIndex(props.index + 1);
     }, [])

     const deleteBook = async () => {
        await delBook(book.filename);
        window.location = 'http://localhost:3000/admin';
     }

  return (
    <tr className='align-center h-[50px]'>
      <td className='text-center'>{index}</td>
      <td className='text-center'>{book.name}</td>
      <td className='flex justify-center'><button className='bg-red-400 p-2 rounded-md' onClick={deleteBook}>Delete</button></td>
    </tr>
  )
}

export default ListElement;