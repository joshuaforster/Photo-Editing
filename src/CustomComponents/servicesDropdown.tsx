import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceDropdownProps {
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
  handleLinkClick: () => void; // Add this line
}

const services = [
  { name: "Window Cleaning", path: "/services/windows" },
  { name: "Frames and Sills", path: "/services/frames-sills" },
  { name: "Conservatories", path: "/services/conservatories" },
  { name: "Gutters and Fascias", path: "/services/gutters-fascias" },
  { name: "Solar Panels", path: "/services/solar-panels" },
  { name: "Caravan Cleaning", path: "/services/caravan-cleaning" },
  { name: "Domestic and Commercial", path: "/services/domestic-commercial" },
  { name: "Patio and Regular Cleans", path: "/services/patio-regular-cleans" },
  { name: "Mini Digger", path: "/services/mini-digger" }
];

const ServiceDropdown: React.FC<ServiceDropdownProps> = ({ isDropdownOpen, toggleDropdown, closeDropdown, handleLinkClick }) => {
  return (
    <div className="relative">
      <div
        className={`${
          isDropdownOpen ? 'block' : 'hidden'
        } absolute left-1/2 transform -translate-x-1/2 lg:block w-full lg:w-auto bg-white dark:bg-gray-800 text-base z-10 divide-y divide-gray-100 dark:divide-gray-600 rounded shadow-lg`}
      >
        <ul className="py-1 text-center">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              onClick={() => {
                handleLinkClick(); // Ensure mobile menu closes
                closeDropdown();
              }}
              className="text-gray-700 dark:text-white block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {service.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDropdown;

