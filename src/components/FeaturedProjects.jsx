function FeaturedProjects() {
  const projects = [
    { title: 'Neon Grid', subtitle: 'Design System', img: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Signal/Noise', subtitle: 'Web Platform', img: 'https://images.unsplash.com/photo-1551281044-8fa54e3d4e1a?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Zero Latency', subtitle: 'Branding', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Cold Start', subtitle: 'AI Integration', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop' },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="group border border-neutral-200 rounded-none overflow-hidden bg-white">
              <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                <img src={p.img} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-300" />
              </div>
              <div className="p-4">
                <div className="text-[10px] tracking-[0.2em] uppercase text-neutral-500">{p.subtitle}</div>
                <div className="mt-1 text-lg font-semibold text-black">{p.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
