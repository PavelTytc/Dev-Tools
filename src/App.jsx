import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import api from './Api';


function App () {
    return (
    <div className='App'>
       <Header/>
       <main className='posts'>
       <Main/>
       </main>
        <Footer/>
       
    </div>
    )
   
}

export default App;