import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/MallPage/Header'
import Navbar from '../components/Navbar'

const Mall = () => {
    return (
        <>
            <Header />
            <Link to='/mall/3'>Go There</Link>


        </>
    )
}

export default Mall