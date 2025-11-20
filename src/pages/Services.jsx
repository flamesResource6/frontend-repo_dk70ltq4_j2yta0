import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronDown } from 'lucide-react';

const sections = [
  {
    title: 'Web Design',
    points: ['UI/UX', 'Responsive design', 'Design systems', 'Typography & color'],
  },
  {
    title: 'Web Development',
    points: ['Frontend (React, Next.js)', 'Backend (APIs)', 'Performance optimization'],
  },
  {
    title: 'Branding',
    points: ['Logo design', 'Identity systems', 'Brand guidelines'],
  },
  {
    title: 'AI Integration',
    points: ['Automation workflows', 'Intelligent search', 'Content pipelines', 'AI-driven UX'],
  },
];

function AccordionItem({ title, points }) {
  const id = title.replace(/\s+/g, '-').toLowerCase();
  return (
    <details className="border border-neutral-200 p-4" name="process">
      <summary className="flex items-center justify-between cursor-pointer select-none">
        <span className="uppercase tracking-wide text-xs text-neutral-900">{title}</span>
        <ChevronDown className="w-4 h-4 text-neutral-500" />
      </summary>
      <div className="mt-4 text-sm text-neutral-700">
        <div className="text-[10px] tracking-[0.2em] uppercase text-neutral-500">Process</div>
        <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc pl-5">
          {points.map(p => <li key={`${id}-${p}`}>{p}</li>)}
        </ul>
      </div>
    </details>
  );
}

function ServicesPage() {
  return (
    <div className="bg-white text-neutral-900">
      <Header />
      <main className="pt-24">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 space-y-6">
          {sections.map(s => <AccordionItem key={s.title} {...s} />)}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ServicesPage;
