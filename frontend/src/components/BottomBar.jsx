import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom'


class NavBar extends React.Component
{
    render()
    {
        return (
            <div className='NavBar'>
                <Link to='/'><FaHome size={50} color='#000000'/></Link>
                <Link to='/learn'><FaUserGraduate size={50} color='#000000'/></Link>
                <Link to='/profile'><FaUser size={50} color='#000000'/></Link>
            </div>
        )
    }
}

export default NavBar