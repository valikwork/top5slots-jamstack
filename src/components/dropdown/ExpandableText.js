import React, { useState, useEffect } from 'react'
import Parser from 'html-react-parser'

export default function ExpandableText({ text, textExcerpt }) {

    const textLength = textExcerpt || 371
    const [textThreshold] = useState(textLength)
    const [isTextTooLong, setIsTextTooLong] = useState(false)
    const [excerpt, setExerpt] = useState('')
    const [restText, setRestText] = useState(text)
    const [openRest, setOpenRest] = useState(false)

    useEffect(() => {
        if(text.length >= textThreshold && isTextTooLong === false){
            setIsTextTooLong(true)
            setExerpt(text.slice(0, textThreshold));
            setRestText(text.slice(textThreshold))
        }
    }, [])

    if(isTextTooLong){
        return (
            <div className={`expandable-box ${openRest ? 'open' : ''}`}>
                <p className="excerpt">{Parser(excerpt)}</p>
                <button onClick={() => setOpenRest(!openRest)} className="show-more">Show more</button>
                <p className="restText">{Parser(restText)}</p>
            </div>
        )
    }

    return <p>{Parser(restText)}</p>
}
