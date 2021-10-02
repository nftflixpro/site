import './App.css';
import Navbar from './components/navbar/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './components/hero-section/HeroSection';
import FeaturedIn from './components/featured-in/FeaturedIn';
import BackedBy from './components/backed-by/BackedBy';
import CTA from './components/cta/CTA';
import Features from './components/features/Features';
import Problem from './components/problem/Problem';
import Roadmap from './components/roadmap/Roadmap';
import Team from './components/team/Team';
import FAQ from './components/faq/FAQ';
import Tokenomics from './components/tokenomics/Tokenomics';
import Footer from './components/footer/Footer';

function App() {
  
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <FeaturedIn/>
      <BackedBy/>
      <CTA/>
      <Features/>
      <Tokenomics/>
      <Problem/>
      <Roadmap/>
      <Team/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
