import DashboardItem from '@/components/DashboardItem';
import NothingMessage from '@/components/NothingMessage';
import { Button } from '@/components/ui/button';
import { Plus, Trash } from 'lucide-react';
import React, { useState } from 'react';

const Dashboard = () => {

  const [selectItems, setSelectItems] = useState([]);

  return (
    <>
      <div className='w-full p-2 bg-white border rounded-xl !max-h-screen'>
        <div className='flex gap-2'>
          <Button variant='outline'><Plus /> Create Email</Button>
          <Button variant='outline' disabled={!selectItems.length == 0 ? false : true}><Trash /> Delete</Button>
        </div>

        {/* Horizontal Line */}
        <div className='border-b w-full mt-4'></div>

        {/* If there isn't any emails */}
        <div className='py-30'>
          <NothingMessage message='No Email Available' />
          <p className='text-center'>Create a new email just by clicking the "Creat Email" Button.</p>
        </div>

        {/* If email */}
        <div className='mt-2 grid gap-2 overflow-y-scroll self-start'></div>
      </div>
    </>
  )
};

export default Dashboard;