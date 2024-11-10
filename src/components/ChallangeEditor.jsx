import React, { useContext, useState, useEffect } from 'react';
import Editor from './Editor';
import '../styles/ChallangeEditor.css';
import ChallangesContext from '../context/ChallangesContext';

export default function ChallangeEditor() {

    const [srcDoc, setSrcDoc] = useState()

    const { challangeImage } = useContext(ChallangesContext)

    const [code, setCode] = useState('');


    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
                <html>${code}</html>
            `)
        }, 500)

        return () => clearTimeout(timeout)
    }, [code])

    function onChangeCode(newValue) {
        setCode(newValue);
    }

    return (
        <div className='ChallangeEditor'>
            <div>
                <Editor language="html" onChange={onChangeCode} displayName="Code Here" width="600px" height="95%" codes={true} />
            </div>
            <div className="images">
                <img src={challangeImage} alt="challenge" className='compare-image' />
                <iframe
                    style={{ backgroundColor: "white" }}
                    className='challange'
                    title='challange'
                    srcDoc={srcDoc}
                    width="400px"
                    height="300px"
                    frameBorder="0"
                />
                <br />
                <img src={challangeImage} alt="challenge" />
            </div>
        </div>
    );
}
