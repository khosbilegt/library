import React, { useEffect, useState } from 'react';
import { getBooks } from '../main/infoHandler';
import { getUser } from '../auth/authHandler';
import { Navbar, ListElement } from '.';
import { Book } from '../main';
import { postBook } from './adminHandler';

function AdminHome() {
  const [init, setInit] = useState(false);
  const [content, setContent] = useState(<p></p>);

  useEffect(() => {
    authAdmin();
    document.title = "Admin";
    if(!init) {
      setInit(true);
      initBooks();
      //postBook(Book.createDefault());
    }
  }, []);

  const initBooks = async () => {
    //const email = localStorage.getItem("user");
    const data = await getBooks();
    const temp = [];
    for(var i = 0; i < data.length; i++) {
      const row = <ListElement content={data[i]} index={i}/>;
      temp.push(row);
    }
    setContent(temp);
  }

  const authAdmin = async () => {
    const email = localStorage.getItem("user");
    if(email.length < 2) {
      window.location = 'http://localhost:3000/auth/login';
    }
    const user = await getUser(email);
    if(!user.isAdmin) {
      window.location = 'http://localhost:3000/home';
    }
  }

  return (
    <div>
      <Navbar />
      <div className="flex-col gap-10 w-full px-[50px] mt-5">
        <table class="table-auto bg-gray-200 w-full border-collapse border-black">
          <thead>
            <tr>
              <th>No</th>
              <th className=''>Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>

            {content}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminHome;