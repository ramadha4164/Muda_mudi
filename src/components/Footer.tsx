export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 py-12">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 accent-block" />
            <span className="mono text-xs tracking-[0.25em] uppercase font-bold text-white">
              FORMA
            </span>
          </div>

          {/* Giant word */}
          <div className="flex-1 text-center hidden md:block">
            <p
              className="text-white/5 font-bold select-none"
              style={{ fontSize: '8vw', lineHeight: 1, letterSpacing: '-0.04em' }}
            >
              FORMA
            </p>
          </div>

          {/* Meta */}
          <div className="flex flex-col md:items-end gap-2">
            <p className="label">© 2024 FORMA STUDIO</p>
            <p className="label text-white/30">ALL RIGHTS RESERVED</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="label">52.001 / SERIES 2024</p>
          <div className="flex gap-8">
            {['PRIVACY', 'TERMS', 'COLOPHON'].map((l) => (
              <a key={l} href="#" className="label hover:text-white transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
