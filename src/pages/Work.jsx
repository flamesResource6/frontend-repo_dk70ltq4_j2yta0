import Header from '../components/Header';
import Footer from '../components/Footer';

function Work() {
  const grid = Array.from({length: 8}).map((_, i) => ({
    title: `Project ${i+1}`,
    type: i % 2 === 0 ? 'Web Platform' : 'Identity',
    img: `https://picsum.photos/seed/${i+1}/1200/800`
  }));

  return (
    <div className="bg-white text-neutral-900">
      <Header />
      <main className="pt-24">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {grid.map((p, i) => (
              <div key={i} className="border border-neutral-200 bg-white">
                <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                  <img src={p.img} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-neutral-500">{p.type}</div>
                  <div className="mt-1 text-lg font-semibold">{p.title}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Work;
