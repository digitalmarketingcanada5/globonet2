import React from 'react';
import { ServiceCard } from '../ui/ServiceCard';
import { 
  BookOpenIcon, 
  DollarSignIcon, 
  ShieldIcon, 
  PlaneIcon, 
  UsersIcon, 
  BriefcaseIcon 
} from '../icons';
import { servicesData } from '@/data/constants';

export const ServicesSection = () => {
  const serviceIcons = {
    'enrollment': <BookOpenIcon />,
    'scholarships': <DollarSignIcon />,
    'health-insurance': <ShieldIcon />,
    'visa': <PlaneIcon />,
    'partners': <UsersIcon />,
    'professional-year': <BriefcaseIcon />
  };

  const services = servicesData.map(service => ({
    ...service,
    icon: serviceIcons[service.id]
  }));

  return (
    <section id="services" className="py-20 lg:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold">Our Services</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Delivering dependable and trustworthy services for over 20 years.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard 
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};
