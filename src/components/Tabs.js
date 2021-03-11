import React, { useState } from 'react'
import Tab from './Tab'

export default function Tabs({ children }) {
    
    const [activeTab, setActiveTab] = useState(children[0].props.label)

    return (
        <div className="tabs">
            <ul className="tab-list wrapper">
                {children.map((child) => {
                    const { label, image } = child.props;
                    
                    return (
                        <Tab
                            activeTab={activeTab}
                            key={label}
                            label={label}
                            image={image}
                            onClick={setActiveTab}
                        />
                    );
                })}
            </ul>

            <div className="tab-content">
                {children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
            </div>

        </div>
    )
}
