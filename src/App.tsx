import { ApprovedStudents } from './components/ApprovedStudents';
import { Categories } from './components/Categories';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Location } from './components/Location';
import { QuickInfo } from './components/QuickInfo';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-cream text-brand-black">
      <Header />
      <main>
        <Hero />
        <Categories />
        <ApprovedStudents />
        <QuickInfo />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
