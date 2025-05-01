import { LayoutDashboard, Plus, Settings, SidebarIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const [showSidebar, setShowSidebar] = useState(true);

  let sidebarOptins = [
    {
      name: 'Dashboard',
      icon: <LayoutDashboard />,
      link: '/dashboard',
    },
    {
      name: 'Create Email',
      icon: <Plus />,
      link: '/create',
    },
    {
      name: 'Setting',
      icon: <Settings />,
      link: '/setting',
    },
  ];

  return (
    <>
      <div className={`w-full ${showSidebar ? 'max-w-52' : 'max-w-[58px]'} p-2 border bg-primary rounded-xl transition-all sticky`} style={{
        height: 'calc(100vh - 16px)'
      }}>
        <div className='p-2'>
          <p><SidebarIcon size={24} className='text-white cursor-pointer' onClick={() => setShowSidebar(!showSidebar)} /></p>
        </div>
        <div>
          {sidebarOptins.map((opt, ind) => {
            return <Link to={opt.link} key={ind}>
              <div className='flex gap-3 cursor-pointer text-white hover:text-black hover:bg-white p-2 rounded-md transition'>
                <p>{opt.icon}</p>
                {showSidebar ? <p>{opt.name}</p> : ''}
              </div>
            </Link>
          })}
        </div>
      </div>
    </>
  )
}

export default Sidebar;