import React from 'react'
import { GridHome } from '../../components/GridHome';
import { NavBar } from '../../components/Navbar';



export const Home = () => {
    return (
        <>
            <NavBar/>
            <div direction="horizontal" gap={3}>
                <h1>Rick & Morty APP</h1>
            </div>
            <GridHome/>
        </>
    )
};