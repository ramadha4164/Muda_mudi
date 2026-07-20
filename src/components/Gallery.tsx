const items = [
  {
    id: '01',
    title: 'VECTOR',
    subtitle: 'SONAR LENS SYSTEM',
    img: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: '02',
    title: 'ARC',
    subtitle: 'TITANIUM FRAME',
    img: 'https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: '03',
    title: 'MONO',
    subtitle: 'RAW ALUMINUM',
    img: 'https://images.pexels.com/photos/3800698/pexels-photo-3800698.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: '04',
    title: 'EDGE',
    subtitle: 'CARBON COMPOSITE',
    img: 'https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: '05',
    title: 'NOIR',
    subtitle: 'MATTE FINISH',
    img: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: '06',
    title: 'SIGNAL',
    subtitle: 'OPTICAL GRADE',
    img: 'https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-32 bg-[#0A0A0A] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="accent-block w-2 h-2" />
              <p className="label">02 / GALLERY</p>
            </div>
            <h2 className="display-large text-white">
              THE<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                COLLECTION
              </span>
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-[280px] leading-relaxed">
            A curated series of objects. Each piece is documented in its
            raw, unretouched state — the way it leaves the workshop.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {items.map((it) => (
            <div
              key={it.id}
              className="group relative bg-[#0A0A0A] overflow-hidden"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  className="img-editorial w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none">
                  <div className="flex items-start justify-between">
                    <span className="label text-white/70">{it.id}</span>
                    <span className="accent-block w-2 h-2" />
                  </div>
                  <div>
                    <p className="label text-white/70 mb-2">{it.subtitle}</p>
                    <p className="display-medium text-white">
                      {it.title}
                    </p>
                  </div>
                </div>
                {/* Hover arrow */}
                <div className="absolute bottom-6 right-6 w-10 h-10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="label">06 OBJECTS / SERIES 2024</p>
          <button className="btn-outline self-start md:self-auto">
            View Full Archive
          </button>
        </div>
      </div>
    </section>
  );
}
