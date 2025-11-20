function AboutBlock() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/5] bg-neutral-100 border border-neutral-200" />
        <div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-neutral-500">Philosophy</div>
          <h2 className="mt-2 text-3xl font-serif leading-tight text-neutral-900">Minimalism. Precision. Function before decoration.</h2>
          <p className="mt-6 text-neutral-700 text-sm">We build systems guided by the grid. Every component serves a purpose. Design and code operate in lockstep to deliver Swiss-level clarity with subtle techno undertones.</p>
          <ul className="mt-6 space-y-2 text-sm text-neutral-700 list-disc pl-5">
            <li>Code/AI-driven workflows</li>
            <li>Typography-first design</li>
            <li>Accessible, performant builds</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutBlock;
