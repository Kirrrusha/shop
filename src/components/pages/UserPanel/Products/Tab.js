import React from 'react';
import PropTypes from 'prop-types';

export default function Tab({ name, children }) {
    return (
        <div id={`tab-${name}`} className="tabs-tab">
        {children}
        </div>
    );
}

Tab.propTypes = {    
    name: PropTypes.string,
    children: PropTypes.array,
}