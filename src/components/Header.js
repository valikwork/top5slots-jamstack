import React, { useState, useRef } from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import shortid from 'shortid';

export default function Header(props) {
    const menu = useStaticQuery(graphql`
        query {
            wpgraphql {
                generalSettings {
                    url
                }
                menu(id: "dGVybToy") {
                    menuItems {
                        nodes {
                            url
                            label
                            parentId
                            id
                            cssClasses
                        }
                    }
                }
                themeGeneralSettings {
                    option_header {
                        headerLogo {
                            mediaItemUrl
                            altText
                        }
                    }
                }
            }
        }
    `)

    const { url } = menu.wpgraphql.generalSettings
    const { title } = props
    const { mediaItemUrl, altText } = menu.wpgraphql.themeGeneralSettings.option_header.headerLogo

    // loop through the menu items and make the links relative
    const items = menu.wpgraphql.menu.menuItems.nodes.map(item => ({
        ...item,
        url: item.url.replace(url, ""),
    }));
    
    //Sort for submenu items
    items.forEach((item, index) => {
        item['children'] = Array();
        item['hasChildren'] = false;

        if(item['parentId'] !== null){
            
            //Find parent by id
            items.find((el, i) => {
                if(el['id'] === item['parentId']){
                    el['hasChildren'] = true;
                    el['children'].push({...item});
                }
            })
            // items.splice(index, 1);
        }
    });

    const filteredItems = [];
    for (let index = 0; index < items.length; index++) {
        if(items[index]['parentId'] === null){
            filteredItems.push(items[index])
        }
    }

    const [isMenuOpen, setMenuOpen] = useState(false)
    const [isSubMenuOpen, setSubMenuOpen] = useState(false)
    const refNavBar = useRef('');
    const subMenuParent = useRef([]);
    const expandedClass = 'expanded';

    const HandleMobExpand = () => {
        if(!isMenuOpen){
            refNavBar.current.classList.add(expandedClass)
            setMenuOpen(true)
        } else {
            refNavBar.current.classList.remove(expandedClass)
            setMenuOpen(false)
        }
    }

    const handleSubMenu = (e) => {
        if(!isSubMenuOpen){
            e.target.parentNode.classList.add(expandedClass)
            setSubMenuOpen(true)
        } else {
            e.target.parentNode.classList.remove(expandedClass)
            setSubMenuOpen(false)
        }
        e.preventDefault()
    }

    return (
        <header className="main-header">
            <div className="row large-uncollapse medium-uncollapse small-collapse header-row">
                <div className="large-2 medium-2 small-12 columns">
                    <div className="logo small-only-text-center">
                        <Link to="/" className="home">
                            <img src={mediaItemUrl} alt={altText} />
                        </Link>
                    </div>
                </div>
                <div className="large-10 medium-10 small-12 columns">
                    <nav className="top-bar" ref={refNavBar} data-topbar="" role="navigation">
                        <ul className="title-area">
                            <li className="name"></li>
                            <li className="toggle-topbar menu-icon">
                                <a className="home" onClick={() => HandleMobExpand()}>
                                <span>Menu</span>
                                </a>
                            </li>
                        </ul>
                        <section className="top-bar-section">
                            <div className="menu-new-header-menu-container">
                                <ul id="menu-new-header-menu" className="menu">
                                    {filteredItems.map(item => item.children.length ? (
                                        <li key={shortid.generate()} className={`menu-item has-dropdown not-click ${item['cssClasses'].map((cl) => cl)} ${title === item.label ? "current-menu-item" : "" }`} >
                                            <a key={item.url} onClick={(e) => handleSubMenu(e)}>
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
                </div>
            </div>
        </header>
    )
}
