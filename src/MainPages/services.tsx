import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../CustomComponents/buttons';  // Make sure to import your custom button component

type Service = {
  title: string;
  description: string;
  image: string;
  details?: string;
  moreInfoLink?: string;
};

const services: { [key: string]: Service } = {
  cleaning: {
    title: 'Cleaning Services',
    description: 'We provide top-notch cleaning services...',
    image: '/images/windowclean.jpg',
    details: `Our cleaning services include window cleaning, gutter cleaning, pressure washing, and more.<br /><br />
    We use eco-friendly products to ensure the safety of your home and the environment.<br /><br />
    Our team is trained to handle all types of cleaning tasks efficiently and professionally. Whether you need a one-time deep clean or regular maintenance, we have the expertise to meet your needs.<br /><br />
    We pride ourselves on delivering exceptional results and exceeding customer expectations.`,
    moreInfoLink: '/services/cleaning'
  },
  windows: {
    title: 'Windows',
    description: 'Professional window cleaning services...',
    image: '/images/windowclean.jpg',
    details: `Our window cleaning services include both exterior and interior window cleaning.<br /><br />
    We use pure water technology to leave your windows sparkling clean without any streaks.<br /><br />
    Our team ensures thorough cleaning to enhance the appearance of your windows. Regular window cleaning can improve the lifespan of your windows and prevent damage from dirt and grime build-up.<br /><br />
    We offer flexible scheduling to suit your needs and guarantee satisfaction with every service.`,
    moreInfoLink: '/services/windows'
  },
  'frames-sills': {
    title: 'Frames and Sills',
    description: 'Cleaning of frames and sills...',
    image: '/images/beforeafter/sill1.JPG',
    details: `We provide detailed cleaning of window frames and sills to remove dirt, grime, and mildew.<br /><br />
    Our services help in maintaining the longevity and appearance of your window frames. Clean frames and sills can significantly enhance the overall look of your windows and home.<br /><br />
    Regular cleaning ensures your windows look great and last longer. We use specialized tools and techniques to ensure a thorough clean without damaging the surfaces.<br /><br />
    Trust us to keep your frames and sills in pristine condition.`,
    moreInfoLink: '/services/frames-sills'
  },
  conservatories: {
    title: 'Conservatories',
    description: 'Comprehensive conservatory cleaning...',
    image: '/images/conservatories.jpg',
    details: `Our conservatory cleaning services include roof, frame, and glass cleaning.<br /><br />
    We ensure your conservatory remains bright and welcoming all year round. A clean conservatory can improve natural light and create a more pleasant living space.<br /><br />
    Our thorough cleaning approach helps in maintaining the beauty and functionality of your conservatory. We tackle dirt, algae, and moss build-up to ensure a spotless finish.<br /><br />
    Enjoy your conservatory to the fullest with our professional cleaning services.`,
    moreInfoLink: '/services/conservatories'
  },
  'gutters-fascias': {
    title: 'Gutters and Fascias',
    description: 'Cleaning of gutters and fascias...',
    image: '/images/gutters.jpg',
    details: `We clean gutters and fascias to prevent blockages and maintain the integrity of your property.<br /><br />
    Regular cleaning can prevent water damage and extend the lifespan of your gutters. Blocked gutters can lead to serious issues like roof damage and leaks.<br /><br />
    Our services ensure efficient water flow and protect your property from potential damage. We use high-quality tools to remove debris and dirt, ensuring your gutters and fascias are functioning properly.<br /><br />
    Keep your home safe and secure with our expert gutter and fascia cleaning services.`,
    moreInfoLink: '/services/gutters-fascias'
  },
  'solar-panels': {
    title: 'Solar Panels',
    description: 'Solar panel cleaning services...',
    image: '/images/cleanhouse.jpeg',
    details: `Our solar panel cleaning services ensure that your panels are free of dirt and debris.<br /><br />
    Clean panels maximize their efficiency and energy production. Dust and grime can significantly reduce the performance of your solar panels.<br /><br />
    Regular cleaning helps in maintaining the performance and longevity of your solar panels. We use gentle, yet effective methods to clean your panels without causing any damage.<br /><br />
    Trust us to keep your solar panels operating at peak efficiency.`,
    moreInfoLink: '/services/solar-panels'
  },
  'caravan-cleaning': {
    title: 'Caravan Cleaning',
    description: 'Professional caravan cleaning...',
    image: '/images/caravan.jpg',
    details: `We offer comprehensive cleaning services for caravans, including exterior washing and interior cleaning.<br /><br />
    Our services ensure your caravan remains in top condition for your travels. Clean caravans not only look better but also provide a healthier environment for your trips.<br /><br />
    Regular cleaning helps in maintaining the appearance and value of your caravan. We use specialized products and techniques to tackle all areas of your caravan, from the bodywork to the interior surfaces.<br /><br />
    Get ready for your next adventure with our professional caravan cleaning services.`,
    moreInfoLink: '/services/caravan-cleaning'
  },
  'domestic-commercial': {
    title: 'Domestic and Commercial',
    description: 'Cleaning services for homes and businesses...',
    image: '/images/about.jpg',
    details: `Our cleaning services cater to both domestic and commercial properties.<br /><br />
    We ensure a clean and healthy environment for your home or business. Clean spaces can improve productivity, health, and overall well-being.<br /><br />
    Our team provides customized cleaning solutions to meet your specific needs. From regular office cleaning to one-off residential deep cleans, we have you covered.<br /><br />
    Trust us to deliver exceptional results and keep your spaces spotless.`,
    moreInfoLink: '/services/domestic-commercial'
  },
  'patio-regular-cleans': {
    title: 'Patio and Regular Cleans',
    description: 'Patio cleaning and regular maintenance...',
    image: '/images/patio.jpeg',
    details: `Our patio cleaning services remove dirt, algae, and stains, restoring your patio to its original condition.<br /><br />
    We also offer regular maintenance to keep it looking great throughout the year. Clean patios can enhance the appearance and usability of your outdoor space.<br /><br />
    Our services enhance the appearance and safety of your patio area. We use high-pressure washing and other techniques to ensure a thorough clean.<br /><br />
    Enjoy your outdoor spaces with our professional patio cleaning services.`,
    moreInfoLink: '/services/patio-regular-cleans'
  },
  'mini-digger': {
    title: 'Mini Digger',
    description: 'Mini digger cleaning services...',
    image: '/images/digger.HEIC',
    details: `We offer mini digger hire and cleaning services for construction and landscaping projects.<br /><br />
    Our services ensure your equipment is clean and ready for use, improving efficiency and safety. Clean equipment operates better and lasts longer.<br /><br />
    Regular maintenance and cleaning extend the lifespan of your mini digger. We provide thorough cleaning to remove dirt, grease, and debris from your machinery.<br /><br />
    Trust us to keep your mini digger in excellent condition and ready for your next project.`,
    moreInfoLink: '/services/mini-digger'
  }
};

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();

  if (!id || !services[id]) {
    return <div>Service not found</div>;
  }

  const service = services[id];

  return (
    <section className="bg-white dark:bg-dark-gray">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-white">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {service.title}
          </h2>
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: service.details || '' }} />
          <h3 className="mt-8 mb-4 text-2xl tracking-tight font-bold text-gray-900 dark:text-white">
            Are you interested?
          </h3>
          <Button variant="primary" to="/contact">Get a Quote</Button>
        </div>
        <div className="grid gap-4 mt-8">
          <img
            className="w-full object-cover"
            style={{ maxHeight: '50vh' }}
            src={service.image}
            alt={service.title}
          />
        </div>
      </div>
    </section>
  );
}
