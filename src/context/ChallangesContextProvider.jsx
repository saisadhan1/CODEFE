import React, { useState } from "react";
import one from '../images/1.png'
import two from '../images/2.png'
import three from '../images/3.png'
import four from '../images/4.png'
import five from '../images/5.png'
import six from '../images/6.png'
import seven from '../images/7.png'
import eight from '../images/8.png'
import nine from '../images/9.png'
import ten from '../images/10.png'

import ChallangesContext from "./ChallangesContext";

const challanges = [
    {
        "level": "Beginner",
        "images": [
            one,
            two,
            three,
            four
        ]
    },
    {
        "level": "Intermediate",
        "images": [
            five,
            six,
            seven
        ]
    },
    {
        "level": "Master",
        "images": [
            eight,
            nine,
            ten
        ]
    }
]

const ChallangesContextProvider = ({ children }) => {
    const [challangeImage, setChallangeImage] = useState(null)

    return (
        <ChallangesContext.Provider value={{ challanges, challangeImage, setChallangeImage }}>
            {children}
        </ChallangesContext.Provider>
    )
}

export default ChallangesContextProvider;