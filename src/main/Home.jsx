import React, { useEffect, useState } from 'react'
import { getBooks } from './infoHandler';
import { Card, Navbar } from './';

function Home() {
  const [init, setInit] = useState(false);
  const [content, setContent] = useState([]);

  useEffect(() => {
    if(localStorage.getItem("user").length < 2) {
      window.location = 'http://localhost:3000/home';
    }
    document.title = "Нүүр хуудас";
    if(!init) {
      initBooks();
      setInit(true);
    }
  }, []);

  const initBooks = async () => {
    const data = await getBooks();
    const temp = [];
    for(var i = 0; i < data.length; i++) {
      temp.push(<Card key={i} content={data[i]}/>)
      //console.log(data[i]);
    }
    setContent(temp);
  }

  return (
    <div>
      <Navbar />
      <div className="flex-col gap-10 w-full px-[50px]">
        {content}
      </div>
    </div>
   
  )
}

export default Home;