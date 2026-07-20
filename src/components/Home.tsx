export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background giant symbols */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <span
          className="grid-symbol absolute"
          style={{ fontSize: '40vw', top: '-5%', left: '-5%', lineHeight: 1 }}
        >
          /
        </span>
        <span
          className="grid-symbol absolute"
          style={{ fontSize: '20vw', bottom: '10%', right: '5%', lineHeight: 1 }}
        >
          *
        </span>
      </div>

      {/* Orange accent bar — top right */}
      <div
        className="accent-block absolute top-0 right-0 hidden md:block"
        style={{ width: '3px', height: '220px' }}
      />

      {/* Main content */}
      <div className="flex-1 max-w-[1400px] mx-auto w-full px-8 pt-40 pb-20 flex flex-col justify-between">

        {/* Hero area */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left column */}
          <div className="md:col-span-1 flex flex-col gap-6 pt-4">
            <div className="w-8 h-[1px] bg-[#FF3D00]" />
            <span className="label writing-vertical" style={{ writingMode: 'vertical-rl', letterSpacing: '0.2em' }}>
              EDITORIAL
            </span>
          </div>

          {/* Center — giant type */}
          <div className="md:col-span-7 relative">
            <p className="label mb-6">MODEL 01 / LIMITLESS DESIGN</p>
            <h1 className="display-giant text-white leading-none">
              FOR<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}>
                MA
              </span>
            </h1>
            <div className="mt-6 flex items-center gap-6">
              <div className="accent-block w-12 h-[3px]" />
              <p className="text-[#888] text-sm tracking-widest mono uppercase">
                52.001 MM
              </p>
            </div>
          </div>

          {/* Right column — descriptor */}
          <div className="md:col-span-4 flex flex-col gap-8 pt-8">
            <div>
              <p className="label mb-3">DESIGNED FOR</p>
              <p className="text-white/60 text-sm leading-relaxed max-w-[260px]">
                Pushing boundaries through precision engineering and
                uncompromising aesthetic vision. Born from the intersection
                of function and form.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="label">PREMIUM COLLECTION</p>
              <p className="label">RISING OUT OF THE ORDINARY</p>
            </div>
            <button
              onClick={() => document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary self-start"
            >
              Explore
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/5">
          <div>
            <p className="label mb-2">VISION SYSTEM</p>
            <p className="text-white/40 text-xs mono">SONAR LENSES</p>
          </div>
          <div>
            <p className="label mb-2">SKI COLLECTION</p>
            <p className="text-white/40 text-xs mono">2024 ©</p>
          </div>
          <div className="md:text-right">
            <p className="text-white/40 text-xs mono leading-relaxed">
              DISCOVER A SERIES DESIGNED<br />FOR LIMITLESS PERFORMANCE
            </p>
          </div>
        </div>
      </div>

      {/* Side orange accent — decorative bracket */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-start pl-6 gap-1">
        <div className="accent-block w-8 h-[2px]" />
        <div className="accent-block w-4 h-[2px]" />
      </div>

      {/* Large decorative > */}
      <div
        className="absolute left-8 bottom-32 text-white/5 font-bold select-none hidden md:block"
        style={{ fontSize: '120px', lineHeight: 1 }}
      >
        &gt;
      </div>

      {/* Right accent block */}
      <div className="accent-block absolute bottom-0 right-16 w-16 h-2 hidden md:block" />
    </section>
  );
}
