import React from 'react';
import MaxWidth from './MaxWidth';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <>
      <section id='home-hero' className='w-full py-15'>
        <MaxWidth>
          <div>
            <h1 className='text-center text-7xl font-bold '>Write Better Emails, <br /> <span className='text-primary font-work'>Instantly</span> With AI</h1>
            <p className='text-center mt-4'>Craft professional, engaging emails in seconds. Save time. Communicate smarter.</p>
            <div className='flex justify-center mt-8'>
              <Button variant='outline'>Start Writing</Button>
            </div>
          </div>
        </MaxWidth>
      </section>
    </>
  )
}

export default Hero;