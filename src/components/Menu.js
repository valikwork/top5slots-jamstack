import React, { useState } from 'react'
import { Link } from "gatsby"
import shortid from 'shortid';

export default function Menu({title, filteredItems}) {

    const [menuOpen, setMenuOpen] = useState(false)
    const [subMenuOpen, setSubMenuOpen] = useState('')
    const expandedClass = 'expanded';


    const handleWholeMenu = (toggle) => {
        setMenuOpen(toggle)
        if(toggle === false){
            setSubMenuOpen('')
        }
    }


    return (
        <nav className={`top-bar ${ menuOpen ? expandedClass : '' }`} data-topbar="" role="navigation">
            <ul className="title-area">
                <li className="name"></li>
                <li className="toggle-topbar menu-icon">
                    <a className="home" onClick={() => handleWholeMenu(!menuOpen)}>
                    <span>Menu</span>
                    </a>
                </li>
            </ul>
            <section className="top-bar-section">
                <div className="menu-new-header-menu-container">
                    <ul id="menu-new-header-menu" className="menu">
                        {filteredItems.map(item => item.children.length ? (
                            <li key={shortid.generate()} className={`${item.label === subMenuOpen ? 'expanded' : ''} menu-item has-dropdown not-click ${item['cssClasses'].map((cl) => cl)} ${title === item.label ? "current-menu-item" : "" }`} >
                                {/* {console.log(item)} */}
                                <a key={item.url} label={item.label} onClick={(e) => setSubMenuOpen(subMenuOpen === e.target.attributes.label.value ? '' : e.target.attributes.label.value)}>
                                    {item.label}
                                </a>
                                <ul className="dropdrown_menu dropdown">
                                    
                                    {item.children.map(child => (
                                        <li key={shortid.generate()} className="menu-item menu-item-child menu-item-type-post_type menu-item-object-page menu-item-595">
                                            <Link to={child.url}>{child.label}</Link>
                                        </li>
                                    ))}
                                    
                                </ul>
                            </li>
                        ) : (
                            <li key={shortid.generate()} className={`menu-item ${item['cssClasses'].map((cl) => cl)} ${title === item.label ? "current-menu-item" : "" }`} >
                                <Link key={item.url} to={item.url}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </nav>
    )
}
