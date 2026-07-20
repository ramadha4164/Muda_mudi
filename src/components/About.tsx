export default function About() {
  return (
    <section
      id="about-us"
      className="relative py-32 bg-[#0A0A0A] border-t border-white/5 overflow-hidden"
    >
      {/* Background giant symbol */}
      <div
        className="absolute pointer-events-none select-none text-white/[0.03] font-bold"
        style={{ fontSize: '30vw', top: '20%', right: '-10%', lineHeight: 1 }}
      >
        +
      </div>

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="accent-block w-2 h-2" />
          <p className="label">01 / ABOUT US</p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Left — big statement */}
          <div className="md:col-span-7">
            <h2 className="display-large text-white">
              WE BUILD<br />
              <span className="text-[#FF3D00]">PRECISION</span><br />
              OBJECTS.
            </h2>
            <div className="mt-12 max-w-[520px] flex flex-col gap-6">
              <p className="text-white/60 text-lg leading-relaxed">
                Forma is a design studio obsessed with the space between
                engineering and art. Every object we make is the result of
                thousands of decisions — material, proportion, weight,
                silence.
              </p>
              <p className="text-white/40 text-base leading-relaxed">
                We believe the best products don't shout. They reveal
                themselves slowly, through use, through time. Our work is a
                quiet argument against the disposable.
              </p>
            </div>
          </div>

          {/* Right — stats */}
          <div className="md:col-span-5 flex flex-col gap-8 pt-4">
            <div className="grid grid-cols-2 gap-8">
              {[
                { n: '12+', l: 'YEARS IN PRACTICE' },
                { n: '240', l: 'OBJECTS SHIPPED' },
                { n: '38', l: 'GLOBAL PARTNERS' },
                { n: '06', l: 'DESIGN AWARDS' },
              ].map((s) => (
                <div key={s.l} className="border-t border-white/10 pt-4">
                  <p className="display-medium text-white">{s.n}</p>
                  <p className="label mt-2">{s.l}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="label mb-3">PHILOSOPHY</p>
              <p className="text-white/50 text-sm leading-relaxed">
                "Form is not decoration. Form is the visible shape of an
                idea taken seriously."
              </p>
              <p className="label mt-4 text-white/30">— STUDIO MANIFESTO</p>
            </div>
          </div>
        </div>

        {/* Bottom marquee */}
        <div className="mt-32 overflow-hidden border-t border-b border-white/5 py-6">
          <div className="marquee-track">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-12 pr-12">
                {['ENGINEERING', 'AESTHETIC', 'PRECISION', 'MATERIAL', 'SILENCE'].map((w) => (
                  <span key={w} className="display-medium text-white/10 flex items-center gap-12">
                    {w}
                    <span className="text-[#FF3D00] text-2xl">/</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
