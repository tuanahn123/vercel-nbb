import React, { useState } from 'react';
const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  
  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className='mt-10'>  
        
            <div className='flex justify-center gap-5 lg:mx-60 mx-0'>
            
              {children.map(child => (
                <button
                  key={child.props.label}
                  className={`${
                    activeTab === child.props.label ? 'text-[#fff] font-sora  font-semibold border-b-4 border-gradient ' : ''
                  }  text-[#fff] font-normal font-sora lg:text-lg text-xs sm:text-sm md:text-base py-2 w-max mx-auto`}
                  onClick={e => handleClick(e, child.props.label)}
                >
                  {child.props.label}
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