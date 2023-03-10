import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from '../components/Navbar';
import { Home } from './home/Home';
import { Login } from './login/Login';
import { Register } from './register/Register';
import { Character } from './character/Character';
import { Detail } from './detail/Detail';
import { About } from './about/About';

export const MainApp = () => {
    return (
        <>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/character' element={<Character/>}></Route>
            <Route path='/detail' element={<Detail/>}></Route>
            <Route path='/about' element={<About/>}></Route>
        </Routes>
        </>
    );
};
