import React from 'react';

// --- SVG Icon Components ---
// These are simple, custom icons to match the theme.
const BookOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
);
const DollarSignIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
);
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);
const PlaneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
);
const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);
const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);

// --- Illustration Component ---
const ScholarCapIllustration = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 600 400" className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="gradCapTop" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#BEF264' }} />
                    <stop offset="100%" style={{ stopColor: '#34D399' }} />
                </linearGradient>
                <linearGradient id="gradCapBase" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#374151' }} />
                    <stop offset="100%" style={{ stopColor: '#111827' }} />
                </linearGradient>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="10" result="shadowBlur" />
                    <feOffset dx="0" dy="10" in="shadowBlur" result="shadowOffset" />
                    <feComponentTransfer in="shadowOffset" result="shadowOpacity">
                        <feFuncA type="linear" slope="0.5"/>
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode in="shadowOpacity" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                 <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blurred" />
                    <feMerge>
                        <feMergeNode in="blurred" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <circle cx="150" cy="150" r="120" fill="#BEF264" opacity="0.05" filter="url(#glow)" />
            <circle cx="480" cy="250" r="100" fill="#34D399" opacity="0.05" filter="url(#glow)" />
            <g filter="url(#shadow)" transform="translate(0, -20)">
                <path d="M170 200 C 170 290, 430 290, 430 200 C 400 190, 200 190, 170 200 Z" fill="url(#gradCapBase)" />
                <path d="M300, 80 L580, 150 L300, 220 L20, 150 Z" fill="url(#gradCapTop)" />
                <circle cx="300" cy="150" r="12" fill="#FBBF24" />
                <path d="M300 150 C 350 170, 450 170, 460, 220" stroke="#FCD34D" strokeWidth="4" fill="none" strokeLinecap="round" />
                 <g stroke="#FCD34D" strokeWidth="4" strokeLinecap="round">
                    <path d="M460 220 L 450 240" />
                    <path d="M460 220 L 460 245" />
                    <path d="M460 220 L 470 240" />
                 </g>
            </g>
        </svg>
    </div>
);

// --- Main App Component ---
export default function App() {
  const navLinks = ["About", "Services", "Principles", "Contact"];

  const services = [
    { icon: <BookOpenIcon />, title: "Enrollment Counselling and Course Selection", description: "Steer through the intricate admissions procedure with professional assistance and choose the ideal course that aligns with your ambitions." },
    { icon: <DollarSignIcon />, title: "Scholarships and Financial Aid", description: "Access opportunities for scholarships and financial assistance to further your educational aspirations." },
    { icon: <ShieldIcon />, title: "Organizing Health Insurance", description: "Facilitate your well-being with seamless arrangements for Overseas Student Health Cover (OSHC) or Overseas Visitor Health Cover (OVHC)." },
    { icon: <PlaneIcon />, title: "Visa Support", description: "Streamline the visa application process with our proficient team offering guidance and assistance throughout each stage." },
    { icon: <UsersIcon />, title: "Collaboration Partners", description: "Hidalgo Law Office specializes in all aspects of Canadian immigration. Contact us to schedule a consultation." },
    { icon: <BriefcaseIcon />, title: "Admission to the Professional Year", description: "Obtain acceptance into professional year programs to initiate your career trajectory in your selected discipline." }
  ];

  const principles = [
      { title: "Empowerment", description: "We are committed to providing students with the knowledge, resources, and confidence necessary to make educated decisions and manage their educational experiences abroad." },
      { title: "Compassion", description: "Recognizing each student's distinct requirements and aspirations, we offer tailored advice with empathy, ensuring that every stage of the process is adequately supported." },
      { title: "Clarity", description: "We do our operations with transparency and integrity, guaranteeing that kids and their families comprehend all opportunities, expenses, and results." },
      { title: "Illumination", description: "Our objective is not merely to guide but to inspire, expanding perspectives and fostering lifelong learning as students commence their journey toward a more promising future." },
      { title: "Commitment", description: "We are devoted to fulfilling our commitments, adhering to our assurances, and dedicating ourselves to the achievements and ambitions of each student we serve." }
  ];

  return (
    <div className="bg-[#080808] text-gray-100 font-sans antialiased overflow-x-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <header className="flex items-center justify-between py-6 border-b border-gray-800">
          <div className="text-2xl font-bold tracking-wider">
            Globonet Education
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors duration-300">
                {link}
              </a>
            ))}
          </nav>
           <button className="lg:hidden text-gray-400">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
           </button>
        </header>

        <main>
            {/* Hero Section */}
            <section id="about" className="py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
                <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
                    <p className="text-lime-400 font-bold tracking-widest">STUDENT DREAM STUDY ABROAD</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter">
                        Globonet Education Consulting
                    </h1>
                    <p className="text-lg font-semibold">Professional Student Consulting: <span className="text-gray-400">STUDY WORK VISIT SETTLE</span></p>
                    <p className="max-w-xl text-gray-400 text-md">
                        Welcome to Globonet Education Consulting, the premier student consultancy agency in Sylhet, Bangladesh. We are committed to assisting students in achieving their aspirations of studying abroad. With a demonstrated history of success and a dedication to quality, Globonet Education consulting stands as your trusted partner for a successful study abroad experience.
                    </p>
                    <button className="bg-lime-400 text-black font-bold px-10 py-4 rounded-lg text-lg hover:bg-lime-300 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(190,242,100,0.5)]">
                        Get a free quote
                    </button>
                </div>
                <div className="w-full h-80 lg:h-[500px]">
                    <ScholarCapIllustration />
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 lg:py-24 grid md:grid-cols-2 gap-12 items-center border-y border-gray-800">
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-lime-400">Our Mission</h2>
                    <p className="text-gray-300 text-lg">
                    Our vision is to pave the road for students to realize their academic potential and build prosperous, fulfilling careers; we will do this by being the world's preeminent provider of student recruiting, education, and career services.
                    </p>
                </div>
                 <div>
                    <h2 className="text-3xl font-bold mb-4 text-lime-400">Our Vision</h2>
                    <p className="text-gray-300 text-lg">
                    To be a global leader in student recruiting, education, and career services, helping students accomplish their academic goals and build a bright future, while promoting opportunity, progress, and achievement.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 lg:py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold">Our Services</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Delivering dependable and trustworthy services for over 20 years.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map(service => (
                        <div key={service.title} className="bg-[#111111] p-8 rounded-xl border border-gray-800 hover:border-lime-400 hover:scale-105 transition-all duration-300">
                            <div className="text-lime-400 mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Principles Section */}
            <section id="principles" className="py-20 lg:py-24 bg-[#111111] rounded-2xl">
                 <div className="text-center mb-16 px-4">
                    <h2 className="text-4xl font-extrabold">Our Principles</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Our commitments form the foundation of our services and student relationships.</p>
                </div>
                <div className="space-y-8 px-4 md:px-12">
                   {principles.map((principle, index) => (
                       <div key={principle.title} className="border-t border-gray-800 pt-8">
                           <h3 className="text-2xl font-bold text-lime-400 mb-2">{principle.title}</h3>
                           <p className="text-gray-300">{principle.description}</p>
                       </div>
                   ))}
                </div>
            </section>
            
            {/* Contact Section */}
            <footer id="contact" className="py-20 lg:py-24 mt-20 border-t border-gray-800">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold">Contact Us</h2>
                    <p className="text-gray-400 mt-4">We're here to help you achieve your aspirations.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">
                     <div>
                        <h3 className="text-2xl font-bold text-lime-400 mb-4">Canada Office</h3>
                        <p className="text-gray-300">41 Cole Street, Toronto, ON, M5A 4N8</p>
                        <p className="text-gray-300 mt-2">Mob/Text/WhatsApp: <a href="tel:416-710-1032" className="hover:text-white">416-710-1032</a></p>
                        <p className="text-gray-300 mt-2">Email: <a href="mailto:globoneteconsulting@mail.com" className="hover:text-white">globoneteconsulting@mail.com</a></p>
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold text-lime-400 mb-4">Bangladesh Office</h3>
                        <p className="text-gray-300">Mizanur Rahman (International Recruitment Rep.)</p>
                        <p className="text-gray-300">House No 10/A, road No: 4, Block-H, Shahjalal Upashohor-3100</p>
                        <p className="text-gray-300 mt-2">Mob/WhatsApp: <a href="tel:880-171-557-0485" className="hover:text-white">880-171-557-0485</a></p>
                        <p className="text-gray-300 mt-2">Email: <a href="mailto:globonetconsulting@gmail.com" className="hover:text-white">globonetconsulting@gmail.com</a></p>
                     </div>
                </div>
                <div className="text-center text-gray-500 mt-20 pt-8 border-t border-gray-800">
                    &copy; {new Date().getFullYear()} Globonet Education Consulting. All Rights Reserved.
                </div>
            </footer>
        </main>
      </div>
    </div>
  );
}

