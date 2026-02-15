import HeroSection from '../components/HeroSection';
import BuildsSection from '../components/BuildsSection';
import PointsSection from '../components/PointsSection';
import EventsSection from '../components/EventsSection';
import PackagesSection from '../components/PackagesSection';
import PackageCardsSection from '../components/PackageCardsSection';
import EquipmentSection from '../components/EquipmentSection';
import FAQSection from '../components/FAQSection';
import BookSection from '../components/BookSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main data-transition-page="home" data-transition="container" className="main">
      <HeroSection />
      <BuildsSection />
      <PointsSection />
      <EventsSection />
      <PackagesSection />
      <PackageCardsSection />
      <EquipmentSection />
      <FAQSection />
      <BookSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
