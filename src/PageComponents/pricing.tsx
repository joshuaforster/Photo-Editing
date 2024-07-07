import React, { useState, useEffect } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

interface Tier {
  name: string;
  id: string;
  href: string;
  priceMonthly: {
    uk: string;
    us: string;
    eu: string;
  };
  description: string;
  features: string[];
  mostPopular: boolean;
}

const tiers: Tier[] = [
  {
    name: 'Photo Cleanups',
    id: 'tier-photo-cleanups',
    href: '#',
    priceMonthly: { uk: '£18', us: '$22', eu: '€20' },
    description: 'Restore and enhance your cherished photos with our professional cleanup services.',
    features: ['Blemish removal', 'Clarity improvement', 'Color correction'],
    mostPopular: false,
  },
  {
    name: 'Paper Stage Edit',
    id: 'tier-paper-stage-edit',
    href: '#',
    priceMonthly: { uk: '£25', us: '$32', eu: '€30' },
    description: 'Transform your sketches and drafts into polished, high-quality artworks.',
    features: [
      'Refinement of paper-based creations',
      'Detailed enhancements',
      'Extra edits available at £10 / €11 / $12',
    ],
    mostPopular: true,
  },
  {
    name: 'Full Art Edit',
    id: 'tier-full-art-edit',
    href: '#',
    priceMonthly: { uk: '£60', us: '$75', eu: '€70' },
    description: 'Elevate your art with comprehensive editing and enhancement.',
    features: [
      'Color correction',
      'Detailed retouching',
      'Complete overhaul',
    ],
    mostPopular: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  const [selectedLocation, setSelectedLocation] = useState<'uk' | 'us' | 'eu'>('uk');

  useEffect(() => {
    // Load the saved location from localStorage
    const savedLocation = localStorage.getItem('selectedLocation') as 'uk' | 'us' | 'eu';
    if (savedLocation) {
      setSelectedLocation(savedLocation);
    }
  }, []);

  useEffect(() => {
    // Save the selected location to localStorage
    localStorage.setItem('selectedLocation', selectedLocation);
  }, [selectedLocation]);

  return (
    <section className='border-b-4 border-white'>
      <div className="py-12 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7">Pricing</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Pricing plans for teams of&nbsp;all&nbsp;sizes
            </p>
            <p className="mt-4 text-lg">Select your location:</p>
            <div className="flex justify-center mt-4">
              <div className="isolate inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  onClick={() => setSelectedLocation('uk')}
                  className={classNames(
                    'relative inline-flex items-center rounded-l-md px-3 py-2 text-sm font-semibold ring-1 ring-inset focus:z-10',
                    selectedLocation === 'uk'
                      ? 'bg-gray-300 text-gray-900 ring-gray-500'
                      : 'bg-white text-gray-900 ring-gray-300 hover:bg-gray-50'
                  )}
                >
                  United Kingdom
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLocation('us')}
                  className={classNames(
                    'relative -ml-px inline-flex items-center px-3 py-2 text-sm font-semibold ring-1 ring-inset focus:z-10',
                    selectedLocation === 'us'
                      ? 'bg-gray-300 text-gray-900 ring-gray-500'
                      : 'bg-white text-gray-900 ring-gray-300 hover:bg-gray-50'
                  )}
                >
                  United States
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLocation('eu')}
                  className={classNames(
                    'relative -ml-px inline-flex items-center rounded-r-md px-3 py-2 text-sm font-semibold ring-1 ring-inset focus:z-10',
                    selectedLocation === 'eu'
                      ? 'bg-gray-300 text-gray-900 ring-gray-500'
                      : 'bg-white text-gray-900 ring-gray-300 hover:bg-gray-50'
                  )}
                >
                  Eurozone
                </button>
              </div>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 ">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
            in. Explicabo id ut laborum.
          </p>
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier, tierIdx) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                  tierIdx === 0 ? 'lg:rounded-r-none' : '',
                  tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
                  'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10'
                )}
              >
                <div>
                  <div className="flex items-center justify-between gap-x-4">
                    <h3
                      id={tier.id}
                      className={classNames(
                        tier.mostPopular ? 'text-indigo-600' : 'text-gray-900',
                        'text-lg font-semibold leading-8'
                      )}
                    >
                      {tier.name}
                    </h3>
                    {tier.mostPopular ? (
                      <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                        Most popular
                      </p>
                    ) : null}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.priceMonthly[selectedLocation]}</span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">/Per Image</span>
                  </p>
                  <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                      : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                    'mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  )}
                >
                  Find Out More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
