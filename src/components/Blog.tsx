const posts = [
  {
    id: 'N°01',
    date: '2024.03.12',
    cat: 'PROCESS',
    title: 'On the weight of an object',
    excerpt:
      'Why 14 grams feels right and 16 feels wrong. A study in perceived mass, balance, and the ergonomics of absence.',
    read: '6 MIN',
  },
  {
    id: 'N°02',
    date: '2024.02.28',
    cat: 'MATERIAL',
    title: 'The case for raw aluminum',
    excerpt:
      'Uncoated, unapologetic. How a single material decision reframed an entire product line and halved our finishing time.',
    read: '4 MIN',
  },
  {
    id: 'N°03',
    date: '2024.02.10',
    cat: 'STUDIO',
    title: 'Designing in silence',
    excerpt:
      'Our week-long experiment with no-client, no-deadline, no-brief work. What we made, and what it taught us about restraint.',
    read: '8 MIN',
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="relative py-32 bg-[#0A0A0A] border-t border-white/5 overflow-hidden"
    >
      {/* Decorative symbol */}
      <div
        className="absolute pointer-events-none select-none text-white/[0.03] font-bold"
        style={{ fontSize: '24vw', top: '5%', left: '40%', lineHeight: 1 }}
      >
        #
      </div>

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="accent-block w-2 h-2" />
              <p className="label">03 / BLOG</p>
            </div>
            <h2 className="display-large text-white">
              FIELD<br />NOTES
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-[280px] leading-relaxed">
            Occasional writing from the studio. No schedule, no SEO. Just
            things we needed to think through out loud.
          </p>
        </div>

        {/* Posts */}
        <div className="flex flex-col">
          {posts.map((p, i) => (
            <article
              key={p.id}
              className="blog-card group grid md:grid-cols-12 gap-6 py-10 px-6 -mx-6 cursor-none"
            >
              {/* Number */}
              <div className="md:col-span-1">
                <p className="mono text-[#FF3D00] text-sm font-bold">{p.id}</p>
              </div>
              {/* Meta */}
              <div className="md:col-span-2 flex flex-col gap-2">
                <p className="label">{p.date}</p>
                <p className="label text-white/30">{p.cat}</p>
              </div>
              {/* Title + excerpt */}
              <div className="md:col-span-7">
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3 group-hover:text-[#FF3D00] transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-[480px]">
                  {p.excerpt}
                </p>
              </div>
              {/* Read time + arrow */}
              <div className="md:col-span-2 flex md:flex-col md:items-end justify-between md:justify-start gap-2">
                <p className="label">{p.read}</p>
                <span className="text-white/30 text-xl group-hover:text-[#FF3D00] group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </div>
              {i < posts.length - 1 && (
                <div className="md:col-span-12 mt-10 border-t border-white/5" />
              )}
            </article>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 flex justify-between items-center">
          <p className="label">03 ENTRIES / 2024</p>
          <button className="btn-outline">All Entries</button>
        </div>
      </div>
    </section>
  );
}
