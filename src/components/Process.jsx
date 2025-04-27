import React from 'react';
import MaxWidth from './MaxWidth';
import { Lightbulb, Mail, MoveRight, Smile } from 'lucide-react';

const Process = () => {

  let processMap = [
    {
      proIcon: <Lightbulb size={26} />,
      proText: 'Enter your idea'
    },
    {
      proIcon: <Smile size={26} />,
      proText: 'Select a tone'
    },
    {
      proIcon: <MoveRight size={26} />,
      proText: 'Generate email'
    },
    {
      proIcon: <Mail size={26} />,
      proText: 'Copy & Send'
    },
  ];

  return (
    <>
      <section>
        <MaxWidth>
          <div className='mt-10'>
            <h2 className='text-4xl font-bold text-center'>How it works</h2>
            <div className='grid place-items-center gap-2 mt-8' style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
              {
                processMap.map((process, index) => {
                  return <div className='flex flex-col justify-center items-center gap-1' key={index}>
                    <div className='flex justify-center items-center w-10 h-10 rounded-full bg-primary-foreground text-primary'>
                      {process.proIcon}
                    </div>
                    <p>{process.proText}</p>
                  </div>
                })
              }
            </div>
          </div>
        </MaxWidth>
      </section>
    </>
  )
}

export default Process;