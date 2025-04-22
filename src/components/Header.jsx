import React from 'react';
import MaxWidth from './MaxWidth';
import Logo from '@/assets/Logo.svg';
import { Button } from './ui/button';

const Header = () => {
  return (
    <>
      <header>
        <MaxWidth>
          <nav className='py-2 flex justify-between'>
            <div className='w-48'>
              <img src={Logo} alt="Letterly Logo" className='w-full' />
            </div>
            <div>
              <Button className='cursor-pointer'>Login</Button>
            </div>
          </nav>
        </MaxWidth>
      </header>
    </>
  )
}

export default Header;