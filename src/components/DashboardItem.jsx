import React from 'react';
import { Button } from './ui/button';
import { Pencil } from 'lucide-react';

const DashboardItem = ({ text, select = true }) => {
  return (
    <>
      <div className='w-full p-2 border rounded-md hover:bg-accent flex justify-between items-center'>
        <p className=' cursor-pointer'>Title</p>
        <Button variant='ghost'>
          <Pencil />
        </Button>
      </div>
    </>
  )
}

export default DashboardItem;