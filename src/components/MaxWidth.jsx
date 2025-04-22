import React from 'react';
import { cn } from '@/lib/utils';

const MaxWidth = ({ children, className }) => {
  return (
    <>
      <div className={cn('w-full max-w-screen-xl mx-auto px-3', className)}>
        {children}
      </div>
    </>
  )
}

export default MaxWidth;