import React, { useState } from 'react'
import Parser from "html-react-parser"

export default function FAQPanel({ className, item, index }) {

    const [panelOpen, setPanelOpen] = useState(index === 0 ? true : false)

    return (
        <div className={`column small-12 ${className}__each-item-wrap`}>
            <div className={`${className}__each-item ${panelOpen ? 'open' : ''}`}>
                <div onClick={() => setPanelOpen( panelOpen ? false : true )} className={`${className}__each-item-head`}>
                    <span className="toggle-indicator">{panelOpen ? '-' : '+'}</span>
                    <h6>{item.question}</h6>
                </div>

                <div className={`${className}__each-item-body`}>
                    {Parser(item.answer ? item.answer : '')}
                </div>
            </div>
        </div>
    )
}
