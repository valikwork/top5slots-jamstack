import React, {useEffect, useState} from 'react'

export default function DropdownWrap({children, className}) {

    const [isOpen, setOpen] = useState(false)
    const [rotation, setRotation] = useState(0)
    const [cssClass] = useState(className ? className : '')

    const headerStyle = {
        transform: `rotateZ(${rotation}deg)`,
        transition: '.3s all'
    }

    useEffect(() => {
        if(isOpen){
            setRotation(180)
        } else {
            setRotation(0)
        }
    }, [isOpen])


    return (
        <div className={`${cssClass} dropdown-wrap ${isOpen ? 'open' : ''}`}>
            <div className="head-wrap" onClick={() => setOpen(!isOpen)}>
                {children[0]}
                <svg style={headerStyle} className="green-arrow" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.4999 0.200012L7.84293 11.6L0.299927 0.200012L15.4999 0.200012Z" fill="#5FCC6A"/>
                </svg>
            </div>
            <div className="body-wrap">
                {children[1]}
            </div>
        </div>
    )
}

