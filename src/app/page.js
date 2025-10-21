import {
  Header,
  Footer,
  HeroSection,
  MissionVisionSection,
  ServicesSection,
  PrinciplesSection
} from '@/components';

export default function Home() {
  return (
    <div className="bg-[#080808] text-gray-100 font-sans antialiased overflow-x-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <Header />
        <main>
          <HeroSection />
          <MissionVisionSection />
          <ServicesSection />
          <PrinciplesSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
