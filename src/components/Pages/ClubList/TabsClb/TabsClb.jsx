import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="">
      <div className="grid grid-cols-12">
        {children.map(child => (
          <button
          key={child.props.label}
          className={`${
            activeTab === child.props.label ? 'text-[#fff] border-gradient' : ''
          } flex-1 text-[#949494] font-medium py-2 col-span-3 lg:col-span-4 w-fit relative`}
          onClick={e => handleClick(e, child.props.label)}
        >
          {child.props.label}
          {activeTab === child.props.label && <div className="absolute left-0 right-0 h-1 bg-gradient-border mt-2"></div>}
        </button>
        ))}
      </div>
      <div className="py-4">
        {children.map(child => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const Tab = ({ label, children }) => {
  return (
    <div label={label} className="hidden">
      {children}
    </div>
  );
};
export { Tabs, Tab };