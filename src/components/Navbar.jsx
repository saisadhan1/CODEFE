import React, { useState } from 'react'
import "../styles/Navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [checked, setChecked] = useState(false)

    const mode = (e) => {
        if (e.target.checked === true) {
            setChecked(!checked)
        }
    }

    return (
        <nav className="navbar">
            <div className="logo-section">
                <Link to='/'>
                    <p className="logo">CodeFE</p>
                    <p className="sub-title-nav">Practice CSS</p>
                </Link>
            </div>
            <input type="radio" className='mode' checked={checked} onClick={mode} />
        </nav>
    )
}
