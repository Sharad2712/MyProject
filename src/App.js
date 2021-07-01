import { useState } from 'react';
import  './App.css';
import BodyComponent from './Components/BodyComponent';
import Footer from './Components/Footer';
import Header from './Components/Header';
function App() {
  let imgUrl = 'ipl_background.jpg';

  return (
     <div className="App" >
    <Header/>
    <BodyComponent/>
    <Footer/>
    </div> 
  );
}

export default App;
