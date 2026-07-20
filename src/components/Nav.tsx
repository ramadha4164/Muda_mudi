import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = ['Home', 'About Us', 'Gallery', 'Blog', 'Contact'];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (label: string) => {
    const id = label.toLowerCase().replace(/\s+/g, '-');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActive(label);
    setOpen(false);
  };

  return (
    <nav
      className={`transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 accent-block" />
          <span className="mono text-xs tracking-[0.25em] uppercase font-bold text-white">
            FORMA
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className={`label tracking-[0.15em] transition-colors duration-200 hover:text-white ${
                active === l ? 'text-[#FF3D00]' : 'text-[#888]'
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Right tag */}
        <div className="hidden md:block label">52.001 / 2024</div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          style={{ cursor: 'none' }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/5 px-8 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className={`text-left display-medium transition-colors duration-200 ${
                active === l ? 'text-[#FF3D00]' : 'text-white/40 hover:text-white'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
