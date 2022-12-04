import React, { useEffect, useState } from 'react';
import axios from "axios";
import Characters from './Characters';
import Header from './Header';
import './App.css';

function App() {

  const [users, setUsers] = useState([])
  const url = 'https://breakingbadapi.com/api/characters'

  useEffect(()=>{
    axios.get(url).then((response) => {
      setUsers(response.data)
      console.log(response.data[0])
    })
  }, [url])

  return (
    <div className='container'>
      <Header />
      <Characters users={users}/>
    </div>
  );
}

export default App;
