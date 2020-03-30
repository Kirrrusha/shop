import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

export default function Tabs({children, selectedTab, onChangeTab}) {
  let tabProps = [];
  const content = React.Children.map(children, (child) => {
    if (child.type === Tab) {
      const {title, name} = child.props;
      tabProps.push({title, name});
      if (selectedTab ? (selectedTab !== child.props.name) : (tabProps.length !== 1)) {
        return null;
      }
    }
    return child;
  });

  const finalSelectedTab = selectedTab ||
    (tabProps.length > 0 && tabProps[0].name);

  return (
    <div className="tabs">
      <TabList
        selectedTab={finalSelectedTab}
        onChangeTab={onChangeTab}
        tabs={tabProps}
      />
      <div className="tabs-content">
        {content}
      </div>
    </div>
  );
}

function TabList({tabs, selectedTab, onChangeTab}) {
  const linkClass = selected => {
    const c = 'tabs-tablist-link';
    return selected ? `${c} ${c}-selected` : c;
  };

  return (
    <ul className="tabs-tablist">
      {tabs.map(({name, title}) =>
        <li
          aria-selected={name === selectedTab}
          role="tab"
          key={name}
        >
              <span
                className={linkClass(name === selectedTab)}
                onClick={() => onChangeTab(name)}>

              {title}
              </span>
        </li>
      )}
    </ul>
  );
}

Tab.propTypes = {
  selectedTab: PropTypes.string,
  children: PropTypes.array,
  onChangeTab: PropTypes.func,
  tabs: PropTypes.array
};









