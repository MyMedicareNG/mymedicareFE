import React, { useState } from 'react'

const Tabs = ({children, tab1, tab2, tab3, tab4, tab5}) => {
    const [currentTab, setCurrentTab] = useState("1");
    const tabs = [
        {
            id: 1,
            tab1 : tab1,
        },
        {
            id: 2,
            tab2 : tab2,
        },
        {
            id: 3,
            tab3 : tab3,
        },
        {
            id: 4,
            tab4 : tab4,
        },
        {
            id: 5,
            tab5 : tab5,
        },
        
    ];

    const handleTabClick = (e) =>{
        setCurrentTab(e.target.id)
    }
  return (
    <div>
      {
        tabs.map((item, id) =>(
            <button
                key={id}
                id={item.id}
                disabled={currentTab === `${item.id}`}
                ocClick={(handleTabClick)}
            >
                <div className='content'>
                    {
                        tabs.map((item, id) =>(
                            <div key={id}>
                                {
                                    currentTab === `${item.id}` &&
                                    <div>
                                        {children}
                                    </div>
                                }
                            </div>
                        ))
                    }
                </div>
            </button>
        ))
      }
    </div>
  )
}

export default Tabs
