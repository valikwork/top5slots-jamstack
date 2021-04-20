import React from 'react'

export default function Tab( { label, onClick, activeTab, image, total } ) {

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
        <li
            className={className}
            onClick={() => onClick(label)}
        >
            <img src={image} />
        {label}
        {total !== undefined && ` (${total})`}
        </li>
    )
}
