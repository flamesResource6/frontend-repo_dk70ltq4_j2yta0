import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="relative min-h-[70vh] pt-24 bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl py-24">
          <h1 className="text-4xl sm:text-6xl leading-tight font-serif text-black tracking-tight">
            Console Cowboys Studio
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-700">
            Digital craftsmanship with Swiss precision.
          </p>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            Web design. Web development. Branding. AI integration.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/work" className="px-5 py-2 border border-neutral-900 text-neutral-900 uppercase tracking-wide text-xs rounded-none hover:bg-black hover:text-white transition-colors">
              View Work
            </Link>
            <Link to="/contact" className="px-5 py-2 border border-[#00B7FF] text-[#00B7FF] uppercase tracking-wide text-xs rounded-none hover:bg-[#00B7FF] hover:text-white transition-colors">
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
