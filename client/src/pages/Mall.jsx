import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/MallPage/Header'

const Mall = () => {
    return (
        <>
            <Header />
            <Link to='/mall/3'>Go There</Link>


        </>
    )
}

export default Mall