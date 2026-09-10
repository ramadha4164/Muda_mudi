import { useState } from "react";
import { X } from "lucide-react";

type LegalPage = "privacy" | "terms" | null;

export default function Footer() {
  const [activePage, setActivePage] = useState<LegalPage>(null);

  const footerLinks = [
    { label: "PRIVACY", page: "privacy" as const },
    { label: "TERMS", page: "terms" as const },
  ];

  return (
    <>
      <footer className="bg-[#0A0A0A] border-t border-white/5 py-12">
        <div className="max-w-[1400px] mx-auto px-8">
          {/* TOP */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 accent-block" />

              <span className="mono text-xs tracking-[0.25em] uppercase font-bold text-white">
                NG.Manuggal
              </span>
            </div>

            {/* Giant Word */}
            <div className="flex-1 text-center hidden md:block">
              <p
                className="text-white/5 font-bold select-none"
                style={{
                  fontSize: "8vw",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                NG. MANUGGAL
              </p>
            </div>

            {/* Meta */}
            <div className="flex flex-col md:items-end gap-2">
              <p className="label">© 2024 NG. MANUGGAL</p>

              <p className="label text-white/30">r.mdhn ALL RIGHTS RESERVED</p>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="label">52.001 / SERIES 2024</p>

            {/* LINKS */}
            <div className="flex gap-8">
              {footerLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => {
                    if (link.page) {
                      setActivePage(link.page);
                    }
                  }}
                  className="label hover:text-white transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* =========================
          LEGAL MODAL
      ========================= */}

      {activePage && (
        <div
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setActivePage(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#111111] border border-white/10 p-6 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setActivePage(null)}
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* HEADER */}
            <div className="pr-12 mb-10">
              <p className="mono text-xs tracking-[0.25em] text-white/40 mb-3">
                NG. MANUGGAL / LEGAL
              </p>

              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                {activePage === "privacy" ? "PRIVACY POLICY" : "TERMS OF USE"}
              </h2>
            </div>

            {/* =========================
                PRIVACY POLICY
            ========================= */}

            {activePage === "privacy" && (
              <div className="space-y-8 text-white/60 leading-relaxed">
                <section>
                  <h3 className="text-white font-semibold mb-3">
                    01 — OVERVIEW
                  </h3>

                  <p>
                    NG. MANUGGAL menghargai privasi setiap pengunjung website.
                    Halaman ini menjelaskan bagaimana informasi yang diberikan
                    melalui website dapat digunakan dan dilindungi.
                  </p>
                </section>

                <section>
                  <h3 className="text-white font-semibold mb-3">
                    02 — INFORMATION
                  </h3>

                  <p>
                    Website ini dapat menerima informasi yang secara sukarela
                    diberikan oleh pengunjung, seperti nama, email, pesan, atau
                    informasi lain ketika menghubungi NG. MANUGGAL.
                  </p>
                </section>

                <section>
                  <h3 className="text-white font-semibold mb-3">
                    03 — USE OF INFORMATION
                  </h3>

                  <p>
                    Informasi yang diberikan digunakan untuk merespons
                    pertanyaan, komunikasi, kebutuhan proyek, atau tujuan lain
                    yang berkaitan dengan layanan dan portfolio NG. MANUGGAL.
                  </p>
                </section>

                <section>
                  <h3 className="text-white font-semibold mb-3">
                    04 — DATA PROTECTION
                  </h3>

                  <p>
                    Kami berusaha menjaga informasi yang diberikan pengguna
                    dengan baik dan tidak menjual atau menyewakan informasi
                    pribadi kepada pihak lain.
                  </p>
                </section>

                <section>
                  <h3 className="text-white font-semibold mb-3">
                    05 — EXTERNAL LINKS
                  </h3>

                  <p>
                    Website dapat memiliki tautan menuju platform atau website
                    pihak ketiga. NG. MANUGGAL tidak bertanggung jawab atas
                    kebijakan privasi atau isi dari website eksternal tersebut.
                  </p>
                </section>
              </div>
            )}

            {/* =========================
                TERMS
            ========================= */}

            {activePage === "terms" && (
              <div className="space-y-8 text-white/60 leading-relaxed">
                <section>
                  <h3 className="text-white font-semibold mb-3">
                    01 — ACCEPTANCE
                  </h3>

                  <p>
                    Dengan mengakses website NG. MANUGGAL, Anda dianggap telah
                    memahami dan menyetujui ketentuan penggunaan yang terdapat
                    pada halaman ini.
                  </p>
                </section>

                <section>
                  <h3 className="text-white font-semibold mb-3">
                    02 — CONTENT
                  </h3>

                  <p>
                    Seluruh teks, gambar, desain, identitas visual, portfolio,
                    dan materi kreatif yang ditampilkan pada website merupakan
                    bagian dari karya atau materi NG. MANUGGAL.
                  </p>
                </section>

                <section>
                  <h3 className="text-white font-semibold mb-3">
                    03 — COPYRIGHT
                  </h3>

                  <p>
                    Materi yang terdapat pada website tidak boleh disalin,
                    dimodifikasi, didistribusikan, atau digunakan untuk
                    kepentingan komersial tanpa izin yang sesuai.
                  </p>
                </section>

                <section>
                  <h3 className="text-white font-semibold mb-3">
                    04 — PORTFOLIO
                  </h3>

                  <p>
                    Portfolio yang ditampilkan digunakan sebagai representasi
                    karya dan pengalaman kreatif. Beberapa proyek dapat
                    merupakan karya kolaborasi atau proyek yang dibuat untuk
                    pihak lain.
                  </p>
                </section>

                <section>
                  <h3 className="text-white font-semibold mb-3">
                    05 — EXTERNAL SERVICES
                  </h3>

                  <p>
                    Website dapat menyediakan tautan menuju layanan pihak ketiga
                    seperti Instagram, WhatsApp, atau platform lainnya.
                    Penggunaan layanan tersebut mengikuti ketentuan
                    masing-masing platform.
                  </p>
                </section>
              </div>
            )}

            {/* MODAL FOOTER */}
            <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="mono text-[10px] tracking-[0.2em] text-white/30">
                NG. MANUGGAL
              </span>

              <span className="mono text-[10px] tracking-[0.2em] text-white/30">
                2024
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
