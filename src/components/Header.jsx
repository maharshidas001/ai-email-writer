import React from 'react';
import MaxWidth from './MaxWidth';
import Logo from '@/assets/Logo.svg';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <MaxWidth>
          <nav className='py-2 flex justify-between'>
            <div className='w-48'>
              <Link to={'/'}>
                <img src={Logo} alt="Letterly Logo" className='w-full' />
              </Link>
            </div>
            <div className='flex items-center gap-8'>
              <ul className='flex gap-2'>
                <Link to={'/pricing'}><li className='cursor-pointer'>Pricing</li></Link>
              </ul>
              <Button className='cursor-pointer'>Login</Button>
            </div>
          </nav>
        </MaxWidth>
      </header>
    </>
  )
}

export default Header;