import React from 'react'
import { InfoCard } from '../../components/Card';
import { NavBar } from '../../components/Navbar';
import { data } from '../../data/dataBase';



export const Home = () => {
    return (
        <>
            <NavBar/>
                {data.map(info => {return <InfoCard key={info.id} infoPj={info}/>})}
            
        </>
    )
};