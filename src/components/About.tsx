export default function About() {
  return (
    <section
      id="about-us"
      className="relative py-32 bg-[#0A0A0A] border-t border-white/5 overflow-hidden"
    >
      {/* Background giant symbol */}
      <div
        className="absolute pointer-events-none select-none text-white/[0.03] font-bold"
        style={{ fontSize: "30vw", top: "20%", right: "-10%", lineHeight: 1 }}
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
              FROM IDEAS
              <br />
              <span className="text-[#FF3D00]">TO</span>
              <br />
              ACTION.
            </h2>
            <div className="mt-12 max-w-[520px] flex flex-col gap-6">
              <p className="text-white/60 text-[13px] leading-relaxed text-justify">
                Ngesti Manunggal is a youth organization established on November
                11 in Desa Ngemul, born from the shared concern of young people
                who sought a space to grow, express their potential, and
                contribute positively to society. Berawal dari diskusi
                sederhana, organisasi ini berkembang menjadi wadah yang
                mempersatukan generasi muda untuk belajar, berkolaborasi, dan
                bergerak bersama dengan semangat persatuan, kreativitas, serta
                kepedulian terhadap lingkungan dan masyarakat.
              </p>
              <p className="text-white/40 text-[12px] leading-relaxed text-justify">
                Berlandaskan nilai gagasan, inovasi, kreativitas, keimanan, dan
                sopan santun, Ngesti Manunggal terus membina karakter pemuda
                melalui budaya musyawarah dan bimbingan para tokoh masyarakat.
                Dengan keanggotaan lebih dari 30 orang berusia 15–35 tahun,
                organisasi ini berkomitmen untuk menciptakan generasi yang
                berintegritas, mampu memimpin, dan memberikan dampak nyata bagi
                kemajuan Desa Ngemul serta masyarakat secara luas.
              </p>
            </div>
          </div>

          {/* Right — stats */}
          <div className="md:col-span-5 flex flex-col gap-8 pt-4">
            <div className="grid grid-cols-2 gap-8">
              {[
                { n: "12+", l: "Years of Activity" },
                { n: "40", l: "Programs Completed" },
                { n: "38", l: "Active Members" },
                { n: "0", l: "ADD" },
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
                "And say, 'Work, for Allah will see your deeds, and so will His
                Messenger and the believers.'"
              </p>
              <p className="label mt-4 text-white/30"> At-Taubah 9:105</p>
            </div>
          </div>
        </div>

        {/* Bottom marquee */}
        <div className="mt-32 overflow-hidden border-t border-b border-white/5 py-6">
          <div className="marquee-track">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-12 pr-12">
                {["UNITY", "IDEAS", "COMPASSION", "INTEGRITY", "DEVOTION"].map(
                  (w) => (
                    <span
                      key={w}
                      className="display-medium text-white/10 flex items-center gap-12"
                    >
                      {w}
                      <span className="text-[#FF3D00] text-2xl">/</span>
                    </span>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
