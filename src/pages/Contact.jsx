import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || '';

function Contact() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ ok: true, msg: 'Thanks — we\'ll reply shortly.' });
        e.currentTarget.reset();
      } else {
        setStatus({ ok: false, msg: data?.detail || 'Something went wrong' });
      }
    } catch (err) {
      setStatus({ ok: false, msg: err.message });
    }
  }

  return (
    <div className="bg-white text-neutral-900">
      <Header />
      <main className="pt-24">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <h1 className="text-4xl font-serif leading-tight">Let’s build something precise.</h1>

          <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wide text-neutral-600">Name</label>
              <input name="name" required className="mt-2 w-full border border-neutral-300 p-3 rounded-none focus:outline-none focus:border-black" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wide text-neutral-600">Email</label>
              <input type="email" name="email" required className="mt-2 w-full border border-neutral-300 p-3 rounded-none focus:outline-none focus:border-black" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wide text-neutral-600">Project type</label>
              <select name="project_type" className="mt-2 w-full border border-neutral-300 p-3 rounded-none focus:outline-none focus:border-black">
                <option>Web Design</option>
                <option>Web Development</option>
                <option>Branding</option>
                <option>AI Integration</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wide text-neutral-600">Budget</label>
              <select name="budget" className="mt-2 w-full border border-neutral-300 p-3 rounded-none focus:outline-none focus:border-black">
                <option>&lt;$5k</option>
                <option>$5k-$10k</option>
                <option>$10k-$25k</option>
                <option>$25k-$50k</option>
                <option>$50k+</option>
                <option>Undisclosed</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs uppercase tracking-wide text-neutral-600">Message</label>
              <textarea name="message" rows="6" required className="mt-2 w-full border border-neutral-300 p-3 rounded-none focus:outline-none focus:border-black" />
            </div>
            <div className="sm:col-span-2">
              <button className="px-5 py-3 border border-neutral-900 text-neutral-900 uppercase tracking-wide text-xs rounded-none hover:bg-black hover:text-white transition-colors">Send</button>
            </div>
          </form>

          {status && (
            <div className={`mt-6 text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.msg}</div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
