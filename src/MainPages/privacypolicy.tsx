import React from 'react';

export default function PrivacyPolicy() {
  return (
    <section className="bg-white dark:bg-dark-gray">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 md:grid-cols-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Privacy Policy</h1> 
        <div className="text-gray-700 dark:text-gray-400 space-y-4">
          <p>Welcome to Holly's Art Gallery. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our services.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Information We Collect</h2>
          <p>We collect various types of information in connection with the services we provide, including:</p>
          <ul className="list-disc list-inside">
            <li><strong>Personal Information:</strong> When you purchase art or subscribe to our newsletter, we collect your name, address, phone number, and email address.</li>
            <li><strong>Purchase Information:</strong> Details about the artwork you purchase, such as the title, price, and date of purchase.</li>
            <li><strong>Payment Information:</strong> Information required to process payments, including credit card details.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. How We Use Your Information</h2>
          <p>The information we collect is used to:</p>
          <ul className="list-disc list-inside">
            <li>Provide and manage our art sales and services.</li>
            <li>Process your payments and manage your orders.</li>
            <li>Communicate with you regarding your purchases, services, and any updates.</li>
            <li>Improve our services based on your feedback and preferences.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. Sharing Your Information</h2>
          <p>We do not share your personal information with third parties except in the following circumstances:</p>
          <ul className="list-disc list-inside">
            <li>With service providers who assist us in operating our business (e.g., payment processors).</li>
            <li>When required by law or to respond to legal processes.</li>
            <li>To protect our rights, property, or safety, or that of our customers and others.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Data Security</h2>
          <p>We implement appropriate security measures to protect your information from unauthorised access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside">
            <li>Access the personal information we hold about you.</li>
            <li>Request corrections to any inaccurate or incomplete information.</li>
            <li>Request deletion of your personal information under certain conditions.</li>
            <li>Opt-out of receiving marketing communications from us.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">6. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
          <ul className="list-inside">
            <li><strong>Email:</strong> <a href="mailto:holly.hipwell@hotmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">holly.hipwell@hotmail.com</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
