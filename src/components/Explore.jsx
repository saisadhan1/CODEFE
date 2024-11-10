import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Explore.css'
import ChallangesContext from '../context/ChallangesContext'

export default function Explore() {

    const { challanges } = useContext(ChallangesContext)
    const { setChallangeImage } = useContext(ChallangesContext)

    return (
        <div className='explore'>
            {
                challanges.map((c) => {
                    return (
                        <>
                            <h3 className='level'>{c.level}</h3>
                            <div className='imaCont'>
                                {c.images.map((i) => {
                                    return (
                                        <div className="challange-container">
                                            < Link to="/explore/editor" key={i} >
                                                <img className='challange-image' src={i} alt="challange" onClick={() => { setChallangeImage(i) }} />
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </>
                    )
                })
            }
        </div >
    )
}
