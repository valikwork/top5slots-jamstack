import React, { useState, useEffect, useRef } from 'react'
import Parser from "html-react-parser"

export default function NonExpandableCard({ heading, text, image, className }) {

    
    return (
        <div className={`${className}__body-each-wrap column custom-small-10 small-centered small-12 medium-10`}>
            <div className={`${className}__body-each`}>

                <div className="number-box">
                    <svg width="132" height="132" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M125.013 0C129.503 11.1111 132 23.2441 132 35.9631C132 89.0025 89.0025 131.997 35.9659 131.997C23.2441 131.997 11.1139 129.501 0.0027771 125.01V0H125.013Z" fill="url(#paint0_linear)"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1="84.7191" y1="84.7181" x2="-79.2881" y2="-79.289" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#30475E"/>
                                <stop offset="1" stop-color="#0B1117"/>
                            </linearGradient>
                        </defs>
                    </svg>

                    <span className="num"><img src={image.mediaItemUrl} alt=""/></span>
                </div>

                <div className="text-box">
                    <h5>{heading}</h5>

                    {text && <p>{Parser(text)}</p>}
                </div>

                

            </div>
        </div>
    )
}
