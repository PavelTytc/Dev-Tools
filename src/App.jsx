import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import AuthorsPage from './pages/AuthorsPage';
import AccountPage from './pages/AccountPage';
import api from './Api';


function App () {

    return (
        <BrowserRouter>
            <div className='App'>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/new" element={<FormPage />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/authors" element={<AuthorsPage />} />
                </Routes>

                <main className='posts'>
                    <Main/>
                </main>

                <Footer/>
            </div>
        </BrowserRouter>
    )
   
}

export default App;