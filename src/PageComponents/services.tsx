import React from 'react';

interface ServicesProps {
  title: string;
  description: string;
  price: string;
  buttonText: string;
  buttonHref: string;
  images: string[];
  isFlipped?: boolean;
}

const Services: React.FC<ServicesProps> = ({ title, description, price, buttonText, buttonHref, images, isFlipped }) => {
  return (
    <section className='border-b-4 border-white'>
      <div className={`gap-8 items-center py-12 px-4 mx-auto max-w-screen-xl xl:gap-16 sm:py-20 lg:px-6 md:grid md:grid-cols-2 ${isFlipped ? 'lg:grid-flow-row-dense' : ''}`}>
        <div className={`mt-4 md:mt-0 ${isFlipped ? 'lg:col-start-2' : ''}`}>
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold ">
            {title}
          </h2>
          <p className="mb-6 font-light  md:text-lg">
            {price}
          </p>
          <p className="mb-6 font-light  md:text-lg">
            {description}
          </p>
          <a
            href={buttonHref}
            className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            {buttonText}
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className={`relative w-full grid grid-cols-2 gap-4 lg:grid-cols-4 ${isFlipped ? 'lg:col-start-1' : ''}`}>
          {images.map((image, index) => (
            <img
              key={index}
              className="w-full h-full object-cover object-top lg:object-center"
              src={image}
              alt={`Service Image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
