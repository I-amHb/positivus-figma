import React, { useState } from 'react';

export const Test = () => {
    const [expandTab, setExpandTab] = useState([
        { title: 'Step One', text: 'First process...', expanded: false },
        { title: 'Step Two', text: 'Second process...', expanded: false },
        { title: 'Step Three', text: 'Third process...', expanded: false }
    ]);

    const toggleTab = (index) => {
        setExpandTab(prev =>
            prev.map((item, i) =>
                i === index ? { ...item, expanded: !item.expanded }
                    : item
            )
        );
    };

    return (
        <div className="flex gap-3">
            {expandTab.map((item, index) => (
                <div
                    key={index}
                    className={`w-20 ${item.expanded ? 'h-80' : 'h-40'} border-2`}
                >
                    <div>
                        <h1 className='step'>{item.title}</h1>
                        <p className='title'>{item.text}</p>
                    </div>
                    <button onClick={() => toggleTab(index)}>
                        {item.expanded ? <p>^</p> : <p>v</p>}
                    </button>
                </div>
            ))}
        </div>
    );
};
