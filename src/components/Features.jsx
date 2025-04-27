import React from 'react';
import MaxWidth from './MaxWidth';
import { Pencil, ShieldCheck, Zap } from 'lucide-react';

const Features = () => {

  let featuresDetails = [
    {
      feName: 'Smart Writing',
      fePara: 'AI understand your tone and intent',
      feIcon: <Pencil className='text-primary' size={30} />
    },
    {
      feName: 'Instant Suggestions',
      fePara: 'Improve your writing with AI',
      feIcon: <Zap className='text-primary' size={30} />
    },
    {
      feName: 'Privacy',
      fePara: 'Your data stays private and secure',
      feIcon: <ShieldCheck className='text-primary' size={30} />
    },
  ];

  return (
    <>
      <section>
        <MaxWidth>
          <div>
            <h2 className='text-center text-4xl font-bold'>Features</h2>
            <div className='grid place-items-center gap-2 mt-8' style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
              {
                featuresDetails.map(fe => {
                  return <div className='w-60 rounded-md bg-primary-foreground p-5 flex flex-col items-center border border-primary' key={fe.feName}>
                    {fe.feIcon}
                    <p className='text-xl font-bold mt-2'>{fe.feName}</p>
                    <p className='text-center'>{fe.fePara}</p>
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

export default Features;