import React from 'react';

const Tab = ({ tabs, onTabClick }) => {
    return (
        <div className='tab'>
            <div>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`tab-button ${tab.active ? 'Active' : ''}`}
                        onClick={() => onTabClick(tab.key)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Tab;
