import React, { useState, useEffect, useRef } from 'react'

export default function Expandable({ heading, text, count, className }) {

    const textThreshold = 371;
    const [isTextTooLong, setIsTextTooLong] = useState(false)
    const [excerpt, setExerpt] = useState('')
    const [restText, setRestText] = useState(text)

    useEffect(() => {
        if(text.length >= textThreshold){
            setIsTextTooLong(true)
        }
    }, [])

    const extendBoxRef = useRef(null);

    const expandHandle = () => {
        
        if(extendBoxRef.current.classList.contains('open')){
            extendBoxRef.current.classList.remove('open')
        } else {
            extendBoxRef.current.classList.add('open')
        }
        
    }

    const TextUI = () => {
        
        if(isTextTooLong){

            setExerpt(text.slice(0, textThreshold));
            setRestText(text.slice(textThreshold))

            return(
                <div ref={extendBoxRef} className="expandable-box">
                    <p className="excerpt">{excerpt}</p>
                    <button onClick={() => expandHandle()} className="show-more">Show more</button>
                    <p className="restText">{restText}</p>
                </div>
            )
        } else {
            return <p>{restText}</p>
        }
    }
    
    return (
        <div className={`${className}__body-each-wrap column custom-small-10 small-centered small-12 medium-10`}>
            <div className={`${className}__body-each`}>

                <div className="number-box">
                    <svg width="132" height="132" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M125.013 0C129.503 11.1111 132 23.2441 132 35.9631C132 89.0025 89.0025 131.997 35.9659 131.997C23.2441 131.997 11.1139 129.501 0.0027771 125.01V0H125.013Z" fill="#C2A57B"/>
                    </svg>
                    <span className="num">{++count}</span>
                </div>

                <div className="text-box">
                    <h5>{heading}</h5>

                    <TextUI />
                </div>
                
            </div>
        </div>
    )
}
