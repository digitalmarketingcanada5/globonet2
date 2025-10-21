import React from 'react';
import { contactInfo } from '@/data/constants';
import { formatPhoneLink, formatEmailLink } from '@/lib/utils';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-20 lg:py-24 mt-20 border-t border-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold">Contact Us</h2>
        <p className="text-gray-400 mt-4">We're here to help you achieve your aspirations.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold text-lime-400 mb-4">{contactInfo.canada.title}</h3>
          <p className="text-gray-300">{contactInfo.canada.address}</p>
          <p className="text-gray-300 mt-2">
            Mob/Text/WhatsApp: <a href={formatPhoneLink(contactInfo.canada.phone)} className="hover:text-white">{contactInfo.canada.phone}</a>
          </p>
          <p className="text-gray-300 mt-2">
            Email: <a href={formatEmailLink(contactInfo.canada.email)} className="hover:text-white">{contactInfo.canada.email}</a>
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-lime-400 mb-4">{contactInfo.bangladesh.title}</h3>
          <p className="text-gray-300">{contactInfo.bangladesh.contact}</p>
          <p className="text-gray-300">{contactInfo.bangladesh.address}</p>
          <p className="text-gray-300 mt-2">
            Mob/WhatsApp: <a href={formatPhoneLink(contactInfo.bangladesh.phone)} className="hover:text-white">{contactInfo.bangladesh.phone}</a>
          </p>
          <p className="text-gray-300 mt-2">
            Email: <a href={formatEmailLink(contactInfo.bangladesh.email)} className="hover:text-white">{contactInfo.bangladesh.email}</a>
          </p>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-20 pt-8 border-t border-gray-800">
        &copy; {currentYear} Globonet Education Consulting. All Rights Reserved.
      </div>
    </footer>
  );
};
