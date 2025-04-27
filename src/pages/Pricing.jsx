import MaxWidth from '@/components/MaxWidth';
import { Button } from '@/components/ui/button';
import React from 'react';

const Pricing = () => {

  const pricingPlans = [
    {
      title: 'Free',
      price: '$0/month',
      features: [
        '✅ Limited monthly usage',
        '✅ Basic AI model',
      ],
      buttonText: 'Continue',
      isHighlighted: false,
    },
    {
      title: 'Pro',
      price: '$9/month',
      features: [
        '✅ Unlimited emails',
        '✅ Advanced AI model',
        '✅ Access to templates',
      ],
      buttonText: 'Get Started',
      isHighlighted: true,
    },
    {
      title: 'Enterprise',
      price: 'Custom Pricing',
      features: [
        '✅ API Access',
        '✅ Team accounts',
        '✅ Priority support',
      ],
      buttonText: 'Contact Sales',
      isHighlighted: false,
    },
  ];

  return (
    <>
      <section>
        <MaxWidth>
          <div className="bg-white py-16 px-6 font-sans">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 font-work-sans">Simple Pricing</h2>
              <p className="text-gray-500 mt-2">Choose a plan that fits your needs</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`${plan.isHighlighted ? 'bg-white border-2 border-primary shadow-lg' : 'bg-gray-50 shadow-md'
                    } rounded-2xl p-8 w-80 text-center hover:shadow-2xl transition`}
                >
                  <h3 className={`text-xl font-semibold ${plan.isHighlighted ? 'text-primary' : 'text-gray-900'}`}>
                    {plan.title}
                  </h3>
                  <p className="text-gray-500 my-2">{plan.price}</p>

                  <ul className="text-gray-500 text-sm space-y-2 mt-6 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>

                  <Button className="px-6 py-2 rounded-lg font-semibold transition">
                    {plan.buttonText}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </MaxWidth>
      </section>
    </>
  )
};

export default Pricing;