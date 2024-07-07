import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface AboutProps {
  headline: string;
  body: any; // RichTextDocument type from Contentful
  image: string;
}

const About: React.FC<AboutProps> = ({ headline, body, image }) => {

  return (
    <section className="bg-gray-100 dark:bg-dark-gray">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 md:grid-cols-12">
        <div className="mr-auto place-self-center md:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center md:text-left">
            {headline}
          </h1>
          <div className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 dark:text-white text-center md:text-left">
            {body ? documentToReactComponents(body) : null}
          </div>
        </div>
        <div className="md:col-span-5 flex items-center justify-center md:justify-end">
          <img
            className="w-full md:w-auto"
            src={image}
            alt="abstract art"
            style={{ maxHeight: '75vh' }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
