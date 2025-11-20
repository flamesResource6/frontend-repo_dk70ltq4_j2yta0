import { Link, NavLink } from 'react-router-dom';

function Header() {
  const navLinkClass = ({ isActive }) =>
    `uppercase tracking-wide text-xs sm:text-sm ${
      isActive ? 'text-black' : 'text-neutral-500 hover:text-black'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-3">
            <img src="/logo.svg" alt="Console Cowboys Studio" className="h-8 w-auto" />
            <span className="sr-only">Console Cowboys Studio</span>
          </Link>
          <nav className="flex items-center gap-6">
            <NavLink to="/work" className={navLinkClass}>Work</NavLink>
            <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/contact" className={({isActive}) => `${navLinkClass({isActive})} border border-neutral-900 px-3 py-1.5 rounded-none hover:bg-black hover:text-white transition-colors`}>Start a Project</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
