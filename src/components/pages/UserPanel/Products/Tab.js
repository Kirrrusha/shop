import React from 'react';

export default function Tab({ name, children }) {
    return (
        <div id={`tab-${name}`} className="tabs-tab">
        {children}
        </div>
    );
}
 