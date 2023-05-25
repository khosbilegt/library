import React, { useEffect, useState } from 'react'
import { getBooks } from './infoHandler';
import { getUser } from '../auth/authHandler';
import { Card, Navbar } from './';

function Home() {
  const [init, setInit] = useState(false);
  const [content, setContent] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("user").length < 2) {
      window.location = 'http://localhost:3000/auth/login';
    }
    document.title = "Нүүр хуудас";
    if(!init) {
      initBooks();
      setInit(true);
    }
  }, []);

  const initBooks = async () => {
    const email = localStorage.getItem("user");
    const user = await getUser(email);
    setIsAdmin(user.isAdmin);
    const data = await getBooks();
    const temp = [];
    for(var i = 0; i < data.length; i++) {
      temp.push(<Card key={i} content={data[i]} user={user}/>)
      //console.log(data[i]);
    }
    setContent(temp);
  }

  return (
    <div>
      <Navbar isAdmin={isAdmin}/>
      <div className="flex-col gap-10 w-full px-[50px]">
        {content}
      </div>
    </div>
   
  )
}

export default Home;