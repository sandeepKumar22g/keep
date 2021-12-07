import './App.css';
import Header from './Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Note from './Component/Note';
import Footer from './Component/Footer';
import Create from './Component/Create';
import React, { useState } from 'react';

function App() {
  const [addItem, setItem]= useState([])

  const addNote=(note)=>{
    setItem((preData)=>{
      return [...preData, note]
    }); 
  }
  const onDelete=(id)=>{
    setItem((oldData)=>{
      oldData.filter((current, index)=>{
        return  index !== id;
      })
    })
  }
  return (
    <>
        <Header/>
        <Create passNote={addNote}/>
        { addItem.map((val, index)=>{
          return <Note key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete}/>
        })}
        <Footer/>
    </>
  );
} 

export default App;
