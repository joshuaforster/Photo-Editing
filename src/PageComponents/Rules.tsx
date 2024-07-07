import { CheckIcon } from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Payments Policy',
    description: 'Payments must be made over PayPal, 10% upfront with the rest at the end.',
  },
  {
    name: 'No NSFW Material',
    description: 'We do not accept or work on any NSFW (Not Safe For Work) material.',
  },
  {
    name: 'Photo Quality',
    description: 'Photos must be of decent quality, with good lighting, composition, and size.',
  },
  {
    name: 'Credit Requirement',
    description: 'Please be aware it takes time to create edits, also please credit me when posting up.',
  },
  {
    name: 'Promotional Use',
    description: 'I have the right to use an edit as promotional material.',
  },
  {
    name: 'Right to Refuse or Cancel',
    description: 'I also have the right to refuse or cancel any work at any time. Payment will be refunded if this happens.',
  },
];

export default function Rules() {
  return (
    <section className='border-b-4 border-white'>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
              <h2 className="text-base font-semibold leading-7">Commission Rules</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Please read before requesting</p>
              <p className="mt-6 text-base leading-7">
                Ensure you understand and agree to the following rules before submitting your commission request.
              </p>
            </div>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 sm:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="font-semibold">
                    <CheckIcon aria-hidden="true" className="absolute left-0 top-1 h-5 w-5" />
                    {feature.name}
                  </dt>
                  <dd className="mt-2">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
