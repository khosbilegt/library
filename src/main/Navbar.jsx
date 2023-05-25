import React, { useEffect, useState } from 'react';

function Navbar() {
     const [email, setEmail] = useState("");

     useEffect(() => {
          setEmail(localStorage.getItem("user"));
        }, []);

  return (
    <div className='px-5 w-full flex bg-gray-200 h-[50px] justify-end items-center gap-5'>
          <button className='h-[30px] px-5 rounded-sm bg-blue-400 text-white'>{email}</button>
          <button className='h-[30px] w-[100px] rounded-sm bg-blue-400 text-white'>Logout</button>
    </div>
  )
}

export default Navbar