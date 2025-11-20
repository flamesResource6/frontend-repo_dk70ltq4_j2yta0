function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="text-xs text-neutral-600">© Console Cowboys Studio</div>
        <div className="flex items-center gap-6 text-xs">
          <a href="mailto:hello@consolecowboys.studio" className="text-neutral-600 hover:text-black">hello@consolecowboys.studio</a>
          <div className="flex items-center gap-4 text-neutral-500">
            <a href="#" aria-label="Twitter" className="hover:text-black">TW</a>
            <a href="#" aria-label="Instagram" className="hover:text-black">IG</a>
            <a href="#" aria-label="GitHub" className="hover:text-black">GH</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
