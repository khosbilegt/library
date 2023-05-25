import React, { useEffect, useState } from 'react'
import { getBooks } from '../main/infoHandler';
import { getUser } from '../auth/authHandler';
import { Card, Navbar } from '.';

function AdminHome() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    authAdmin();
    document.title = "Нүүр хуудас";
    if(!init) {
      setInit(true);
    }
  }, []);

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
      <div className="flex-col gap-10 w-full px-[50px]">

      </div>
    </div>
  )
}

export default AdminHome;