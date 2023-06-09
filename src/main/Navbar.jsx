import React, { useEffect, useState } from 'react';

function Navbar(props) {
     const [email, setEmail] = useState("");

     useEffect(() => {
          setEmail(localStorage.getItem("user"));
     }, []);

     const logout = (e) => {
          localStorage.setItem('user', "");
          window.location = 'http://localhost:3000/auth/login';
     }
     
     const toAdmin = (e) => {
          window.location = 'http://localhost:3000/admin';
     }

  return (
    <div className='px-5 w-full flex bg-gray-200 h-[50px] justify-end items-center gap-5'>
          {props.isAdmin ? 
          <button className='h-[30px] px-5 rounded-sm bg-blue-400 text-white' onClick={toAdmin}>Admin Page</button>
           : <p></p>}
          <button className='h-[30px] px-5 rounded-sm bg-blue-400 text-white'>{email}</button>
          <button className='h-[30px] w-[100px] rounded-sm bg-blue-400 text-white' onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar