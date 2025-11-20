import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import Services from '../components/Services';
import AboutBlock from '../components/AboutBlock';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="bg-white text-neutral-900">
      <Header />
      <main>
        <Hero />
        <FeaturedProjects />
        <Services />
        <AboutBlock />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
