import React from 'react';
import Button from "../CustomComponents/buttons";

export default function Steps() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 lg:py-16 lg:px-6 dark:text-white">
        <div className="font-light text-gray-500 sm:text-lg dark:text-white lg:order-1">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Easy Booking Process</h2>
          <p className="mb-4">
            Get a quote, we do the clean, add to our list, and send an invoice. Our streamlined process ensures your windows stay spotless with minimal hassle.
          </p>
          <div className="mt-4">
            <Button className="mr-4" to='/contact' variant='primary'>Get A Quote</Button>
          </div>
        </div>
        <div className="hidden md:flex justify-center md:order-2">
          <img className="w-full rounded-lg mt-4 md:mt-0" src="images/beforeafter/patio2.jpeg" alt="office content 1" />
        </div>
      </div>
    </section>
  );
}