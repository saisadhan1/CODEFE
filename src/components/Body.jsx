import React from 'react'
import '../styles/Body.css'
import mainImage from '../images/CSSimage.png'
import { Link } from 'react-router-dom'

export default function Body() {
    return (
        <div className='body'>
            <div className="hero">
                <h1>Welcome to CodeFE - Your Playground for Mastering CSS!</h1>
                <p className="sub-text">Discover the magic of CSS through hands-on challenges, interactive learning, and a supportive community.</p>
            </div>
            <div className="introduction">
                <div className="intro-text">
                    <p className="intro">Step into a world where CSS learning is fun and engaging. CodeFE offers an immersive experience filled with exciting challenges and a playground to hone your front-end skills.</p>
                    <p className="intro">Begin your journey toward CSS mastery today. Join our vibrant community!</p>
                    <Link to="explore">
                        <button className='btn-call'>Start Coding</button>
                    </Link>
                </div>
                <div className="best">
                    <img src={mainImage} alt="bestChallange" className='mainImage' />
                </div>
            </div>
        </div>
    )
}
