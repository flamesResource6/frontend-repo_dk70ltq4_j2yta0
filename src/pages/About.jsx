import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  return (
    <div className="bg-white text-neutral-900">
      <Header />
      <main className="pt-24">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="aspect-[3/4] bg-neutral-100 border border-neutral-200" />
          <div>
            <h1 className="text-4xl font-serif leading-tight">Swiss discipline. Cyberpunk edge.</h1>
            <p className="mt-6 text-sm text-neutral-700 max-w-prose">Mission, approach, tools & technologies, and philosophy anchored in clarity. We embrace grid systems, accessible typography, and code/AI workflows to deliver precise outcomes.</p>
            <div className="mt-12 border-l-2 border-neutral-900 pl-6 space-y-6">
              {[2019,2020,2021,2023,2025].map((y) => (
                <div key={y} className="flex items-start gap-4">
                  <div className="text-xs text-neutral-500 w-12">{y}</div>
                  <div className="text-sm text-neutral-800">Milestone lorem ipsum dolor sit amet.</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
