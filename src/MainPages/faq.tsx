import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid';

export default function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 2,
      question: "How do I request a commission?",
      answer:
        "To request a commission, please fill out the form on our contact page with your details and requirements.",
    },
    {
      id: 3,
      question: "What is the turnaround time for a project?",
      answer:
        "The turnaround time depends on the complexity of the project. Typically, it takes 1-2 weeks for photo cleanups and 3-4 weeks for full art edits.",
    },
    {
      id: 4,
      question: "Do you offer discounts for bulk orders?",
      answer:
        "Yes, we offer discounts for bulk orders. Please contact us directly to discuss your requirements and get a custom quote.",
    },
  ];

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="border-b-4 border-white">
      <div className="mx-auto max-w-2xl divide-y divide-gray-900/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-32">
        <h2 className="text-2xl font-bold leading-10 tracking-tight">Frequently asked questions</h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 lg:col-span-5 flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(faq.id)}>
                {faq.question}
                {openFAQ === faq.id ? (
                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </dt>
              {openFAQ === faq.id && (
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7">{faq.answer}</p>
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

        