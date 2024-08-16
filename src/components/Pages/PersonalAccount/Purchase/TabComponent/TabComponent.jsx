import { useState } from 'react';
import PropTypes from 'prop-types';
import '~/../assets/styles/PersonalAccount/TabComponent.scss';

export const TabComponent = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div className='container m-auto mt-[105px] mb-40'>
      <div className="tab-container gap-4 justify-center">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className={`tab ${activeTab === tab.label ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className='tab-content'>
        {tabs.map((tab) => {
          if (tab.label === activeTab) {
            return <div key={tab.label}>{tab.content}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

TabComponent.propTypes = {
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        content: PropTypes.node.isRequired
      })
    ).isRequired
  };
