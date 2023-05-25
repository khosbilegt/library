import React, { useEffect, useState } from 'react';
import { Book } from './';
import { postRent } from './infoHandler';

function Card(props) {
  const [book, setBook] = useState(Book.createDefault());
  const [isRented, setIsRented] = useState(false);

  useEffect(() => {
    document.title = "Нүүр хуудас";
    setBook(Book.fromJson(props.content));
  }, []);

  useEffect(() => {
    const arr = props.user.rented;
    for(var i = 0; i < arr.length; i++) {
      if(book.filename === arr[i]) {
        setIsRented(true);
      }
      console.log(book.filename);
    }
  }, book)

  const rentBook = () => {
    if(!isRented) {
      const email = localStorage.getItem('user');
      postRent(email, book.filename);
    }
  }

  return (
    <div className='flex  mt-5'>
      <img src={book.img} className='bg-teal-200 w-[200px] h-[100%]'/>
      <div className='ml-5'>
        <p className='font-semibold text-lg'>{book.name}</p>
        <p className='font-light text-md'>
          {book.authors.map((val, index) => {
          return val;
          })}
        </p>
        <div className='flex-col w-full text-sm my-3'>
          {book.genres.map((val, index) => {
            return <button className='bg-blue-200 rounded-md p-2 mr-5'>{val}</button>;
          })}
        </div>
        <p className='text-sm'>{book.synopsis}</p>
        <button className='mt-5 p-2 text-sm bg-blue-600 rounded-md text-white' onClick={rentBook}>{isRented ? "Түрээсэлсэн" : "Түрээслэх"}</button>
      </div>
    </div>
  )
}

export default Card;


