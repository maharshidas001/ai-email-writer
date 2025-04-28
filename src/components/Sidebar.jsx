import { LayoutDashboard, Plus, Settings, SidebarIcon } from 'lucide-react';
import React, { useState } from 'react';

const Sidebar = () => {

  const [showSidebar, setShowSidebar] = useState(true);

  let sidebarOptins = [
    {
      name: 'Dashboard',
      icon: <LayoutDashboard />
    },
    {
      name: 'Create Email',
      icon: <Plus />
    },
    {
      name: 'Setting',
      icon: <Settings />
    },
  ];

  return (
    <>
      <div className={`w-full ${showSidebar ? 'max-w-52' : 'max-w-[58px]'} p-2 border bg-primary rounded-xl transition-all sticky`} style={{
        height: 'calc(100vh - 16px)'
      }}>
        <div className='p-2'>
          <SidebarIcon size={24} className='text-white cursor-pointer' onClick={() => setShowSidebar(!showSidebar)} />
        </div>
        <div>
          {sidebarOptins.map((opt, ind) => {
            return <div className='flex gap-3 cursor-pointer text-white hover:text-black hover:bg-white p-2 rounded-xl transition' key={ind}>
              <p>{opt.icon}</p>
              {showSidebar ? <p>{opt.name}</p> : ''}
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default Sidebar;