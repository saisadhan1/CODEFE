import React from 'react'
import '../styles/Sidebar.css'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <nav className='sidebar'>
            <div className="menu">
                <li><Link to='/explore'>Explore</Link></li>
                <li><Link to='/IDE'>Editor</Link></li>
            </div>
        </nav>
    )
}
