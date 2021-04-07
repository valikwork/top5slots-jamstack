import React, { useState, useRef } from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import shortid from 'shortid';
import Menu from './Menu';

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
                    <Menu filteredItems={filteredItems} title={title} />
                </div>
            </div>
        </header>
    )
}
