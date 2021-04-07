import React, { useState } from 'react'
import Filter from './Filter';
import Tab from './Tab'

export default function Tabs(props) {
    
    const children = props.children
    const [activeTab, setActiveTab] = useState(children[0].props.label)

    return (
        <div className="tabs">
            <ul className="tab-list wrapper">
                {children.map((child) => {
                    
                    const { label, image, total } = child.props;
                    
                    return (
                        <Tab
                            activeTab={activeTab}
                            key={label}
                            label={label}
                            image={image}
                            total={total}
                            onClick={setActiveTab}
                        />
                    );
                })}
            </ul>

            <div className="tab-content-with-filter-wrap">
                <div className="tab-content-with-filter row">
                    <div className="tab-content column custom-medium-9">
                        {children.map((child) => {
                            if (child.props.label !== activeTab) return undefined;
                            return child.props.children;
                        })}
                    </div>
                    <div className="tab-filter column custom-medium-3">
                        <Filter filterSettings={props.filterSettings} setFilterSettings={props.setFilterSettings} />
                    </div>
                </div>
            </div>

        </div>
    )
}
