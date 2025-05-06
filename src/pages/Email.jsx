import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { BookmarkXIcon, Check, Pencil, Trash } from 'lucide-react';
import React, { useState } from 'react';

const Email = () => {

  const [isEditMode, setIsEditMode] = useState(false);

  const handleUpdate = () => {
    setIsEditMode(false);
  };

  return (
    <>
      <div className='w-full border rounded-xl p-2 max-h-screen'>
        <h2 className='font-bold mt-8'>For the job vacancy of frontend Web Developer</h2>
        <Textarea className='mt-2'>Email</Textarea>
        <div className='mt-4 flex gap-2 justify-end'>
          {/* If edit mode on */}
          {!isEditMode ? (
            <>
              <Button variant='outline' className='hover:bg-primary hover:text-white' onClick={() => setIsEditMode(true)}><Pencil /> Edit</Button>
              <Button className='bg-red-500 hover:bg-red-400'><Trash /> Delete</Button>
            </>
          ) : (
            <>
              <Button onClick={handleUpdate}><Check /> Update</Button>
              <Button variant='outline' onClick={() => setIsEditMode(false)}><BookmarkXIcon /> Cancel</Button>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Email;