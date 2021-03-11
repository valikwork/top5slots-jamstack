import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"

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

    const [expandClass, setExpandClass] = useState(false)

    const HandleMobExpand = () => {

    }

    return (
        <header className="main-header">
            <div className="row large-uncollapse medium-uncollapse small-collapse header-row">
                <div className="large-2 medium-2 columns">
                    <div className="logo small-only-text-center">
                        <Link to="/" className="home">
                            <img src={mediaItemUrl} alt={altText} />
                        </Link>
                    </div>
                </div>
                <div className="large-10 medium-10 columns">
                    <nav className="top-bar"  data-topbar="" role="navigation" data-options="{is_hover: false, mobile_show_parent_link: true}">
                        <ul className="title-area">
                            <li className="name"></li>
                            <li className="toggle-topbar menu-icon">
                                <a className="home">
                                <span>Menu</span>
                                </a>
                            </li>
                        </ul>
                        <section className="top-bar-section">
                            <div className="menu-new-header-menu-container">
                                <ul id="menu-new-header-menu" className="menu">
                                    {filteredItems.map(item => item.children.length ? (
                                        <li key={item.id} className={`menu-item has-dropdown not-click ${item['cssClasses'].map((cl) => cl)} ${title === item.label ? "current-menu-item" : "" }`} >
                                            <Link key={item.url} to={item.url}>
                                                {item.label}
                                            </Link>
                                            <ul className="dropdrown_menu dropdown">
                                                <li className="title back js-generated">
                                                    <h5>
                                                        <a href="javascript:void(0)">Back</a>
                                                    </h5>
                                                </li>
                                                <li className="parent-link show-for-small-only">
                                                    <Link className="parent-link js-generated" to={item.url}>{item.label}</Link>
                                                </li>
                                                {item.children.map(child => (
                                                    <li id="menu-item-595" className="menu-item menu-item-child menu-item-type-post_type menu-item-object-page menu-item-595">
                                                        <Link to={child.url}>{child.label}</Link>
                                                    </li>
                                                ))}
                                                
                                            </ul>
                                        </li>
                                    ) : (
                                        <li key={item.id} className={`menu-item ${item['cssClasses'].map((cl) => cl)} ${title === item.label ? "current-menu-item" : "" }`} >
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
