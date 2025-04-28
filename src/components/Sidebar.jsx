import { LayoutDashboard, Plus, Settings, SidebarIcon } from 'lucide-react';
import React from 'react';

const Sidebar = () => {

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
      <div className='w-[30%] max-w-52 p-2 border bg-primary rounded-xl' style={{
        height: 'calc(100vh - 16px)'
      }}>
        <div>
          {sidebarOptins.map((opt, ind) => {
            return <div className='flex gap-3 cursor-pointer text-white hover:text-black hover:bg-white p-2 rounded-xl transition' key={ind}>
              <p>{opt.icon}</p>
              <p>{opt.name}</p>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default Sidebar;