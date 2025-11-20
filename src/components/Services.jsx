import { Code2, Grid, Boxes, Brain } from 'lucide-react';

function Services() {
  const items = [
    { icon: Grid, title: 'Web Design', desc: 'UI/UX, responsive systems, typography-led design.' },
    { icon: Code2, title: 'Web Development', desc: 'Frontend, backend, performance engineering.' },
    { icon: Boxes, title: 'Branding', desc: 'Logos, identity systems, guidelines.' },
    { icon: Brain, title: 'AI Integration', desc: 'Automation, intelligent search, content pipelines.' },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(({icon: Icon, title, desc}) => (
            <div key={title} className="border border-neutral-200 p-6 rounded-none bg-white">
              <Icon className="w-6 h-6 text-neutral-800" strokeWidth={1.25} />
              <h3 className="mt-4 font-semibold text-neutral-900 uppercase tracking-wide text-xs">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
