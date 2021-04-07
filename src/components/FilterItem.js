import React, { useState, useEffect } from 'react'
import shortid from 'shortid';

export default function FilterItem({ data, name, svg, filterHandle, filtrationCategory }) {

    const [isOpen, setOpen] = useState(false)
    const [rotation, setRotation] = useState(0)
    const [arrayOfCheckedOptions, setArrayOfCheckedOptions] = useState([])
    

    useEffect(() => {
        
        
        filterHandle({ [filtrationCategory] : arrayOfCheckedOptions})
        
    }, [arrayOfCheckedOptions])
    
    useEffect(() => {
        if(isOpen){
            setRotation(180)
        } else {
            setRotation(0)
        }
    }, [isOpen])

    const prepareResult = (slug) => {
        if(!arrayOfCheckedOptions.includes(slug)){
            setArrayOfCheckedOptions(rest => [...rest, slug])
            console.log('added');
        }
        if(arrayOfCheckedOptions.includes(slug)){
            setArrayOfCheckedOptions(rest => rest.filter(item => item !== slug))
            console.log('deleted');
        }
    }

    

    return (
        <div className="filter-item">
            <div onClick={() => setOpen(!isOpen)} className="filter-item__head">
                <span>{name}</span>
                <svg style={{ transform: `rotateZ(${rotation}deg)` }} width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.4999 0.200012L7.84293 11.6L0.299927 0.200012L15.4999 0.200012Z" fill="#5FCC6A"/>
                </svg>
            </div>
            {isOpen && data && (
                <div className="filter-item__body">
                    {data.map(item => {
                        return (
                            <label className="custom-checkbox" key={item.slug}>
                                <input type="checkbox" onClick={() => prepareResult(item.slug)}  />
                                <div className="checkmark">
                                    <svg className="box" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z" fill="#C2A57B"/>
                                    </svg>

                                    <svg className="check" width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.07573 9.29849L0.175729 5.39849C-0.0585762 5.16418 -0.0585762 4.78428 0.175729 4.54996L1.02424 3.70142C1.25854 3.4671 1.63846 3.4671 1.87277 3.70142L4.49999 6.32863L10.1272 0.701424C10.3615 0.46712 10.7414 0.46712 10.9758 0.701424L11.8243 1.54996C12.0586 1.78426 12.0586 2.16416 11.8243 2.39849L4.92426 9.29851C4.68993 9.53281 4.31003 9.53281 4.07573 9.29849Z" fill="#5FCC6A"/>
                                    </svg>

                                </div>
                                <span className="checkbox-name">{item.name || item.title}</span>
                            </label>
                        )
                        
                        
                    })}
                </div>
            )}
            
        </div>
    )
}
