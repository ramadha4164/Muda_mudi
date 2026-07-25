const posts = [
  {
    id: "N°01",
    date: "2024.03.12",
    cat: "SOSIAL",
    title:
      "Kebahagiaan di Bulan Ramadhan Berbagi Bersama dan Menebar Kebaikan.",
    excerpt:
      "Kegiatan berbagi takjil kepada pengguna jalan menjadi wujud kepedulian sosial Ngesti Manunggal selama bulan Ramadhan.",
    // TAMBAHKAN INI
    description: `Kegiatan ini melibatkan seluruh anggota organisasi yang bekerja sama menyiapkan dan membagikan paket takjil kepada masyarakat yang masih berada di perjalanan menjelang waktu berbuka puasa.

Melalui kegiatan tersebut, Ngesti Manunggal menegaskan komitmennya untuk menumbuhkan nilai kepedulian, kebersamaan, dan semangat gotong royong. Kegiatan ini juga mempererat hubungan antara anggota organisasi dan masyarakat sekitar.
Dengan berbagi takjil, Ngesti Manunggal menunjukkan bahwa kebersamaan dan kepedulian merupakan nilai yang harus terus dijaga serta diharapkan dapat menginspirasi generasi muda untuk terus berbuat kebaikan.`,
    read: "6 MIN",
  },
  {
    id: "N°02",
    date: "2024.02.28",
    cat: "KEIMANAN",
    title: "Kajian Islam dalam Rangka Hari Ulang Tahun Ngesti Manunggal",
    excerpt: "Bertumbuh dalam Kebersamaan dan Keimanan",
    // TAMBAHKAN INI
    description: `Memperingati hari jadi organisasi, Ngesti Manunggal menyelenggarakan Kajian Islam sebagai bentuk rasa syukur sekaligus upaya memperkuat nilai spiritual di kalangan anggota. Kegiatan ini menghadirkan tokoh agama dan masyarakat untuk memberikan tausiyah, motivasi, serta penguatan nilai-nilai akhlak dalam kehidupan sehari-hari.

Kajian ini menjadi momen refleksi bahwa perjalanan organisasi tidak hanya diukur dari banyaknya program yang terlaksana, tetapi juga dari kualitas karakter para anggotanya. Melalui diskusi dan kajian bersama, setiap peserta diajak untuk terus meningkatkan keimanan, menjaga persaudaraan, serta menjadikan organisasi sebagai wadah yang membawa manfaat bagi masyarakat.

Semangat kebersamaan yang terbangun dalam kegiatan ini menjadi pengingat bahwa keberhasilan organisasi lahir dari persatuan, nilai moral, dan komitmen untuk terus berkembang bersama.`,
    read: "4 MIN",
  },
  {
    id: "N°03",
    date: "2024.02.10",
    cat: "NASIONALISME",
    title: "Semarak HUT RI ke-79 Bersama Mahasiswa UNDIP ",
    excerpt: "Kolaborasi Membangun Semangat Kebangsaan",
    // TAMBAHKAN INI
    description: `Dalam rangka memperingati Hari Ulang Tahun Republik Indonesia ke-79, Ngesti Manunggal berkolaborasi dengan mahasiswa Praktik Kerja Lapangan (PKL) Universitas Diponegoro (UNDIP) untuk menyemarakkan berbagai kegiatan yang melibatkan masyarakat.

Beragam perlombaan, permainan tradisional, dan kegiatan kebersamaan diselenggarakan sebagai bentuk penghormatan terhadap perjuangan para pahlawan sekaligus mempererat hubungan antarwarga. Kolaborasi ini menunjukkan bahwa sinergi antara organisasi kepemudaan dan dunia akademik mampu menghadirkan kegiatan yang kreatif, edukatif, dan bermanfaat bagi masyarakat.

Melalui peringatan HUT RI ke-79, Ngesti Manunggal menegaskan komitmennya untuk terus menjadi organisasi yang aktif membangun semangat persatuan, gotong royong, dan kepedulian sosial, sekaligus mengajak generasi muda untuk terus berkontribusi dalam pembangunan masyarakat dan bangsa.`,
    read: "8 MIN",
  },
  {
    id: "N°03",
    date: "2024.02.10",
    cat: "BUDAYA",
    title:
      "Sanggar Seni Turonggo Mudho Ontoseno: Rumah Generasi Muda dalam Melestarikan Budaya Jawa ",
    excerpt:
      "budaya bukan hanya milik masa lalu, tetapi juga bagian dari masa depan yang harus terus diwariskan",
    description: `Di tengah pesatnya perkembangan zaman, Sanggar Seni Turonggo Mudho Ontoseno hadir sebagai wadah bagi generasi muda untuk menjaga dan melestarikan budaya Jawa. Sanggar yang diinisiasi oleh Navid, Supri, Aydin, dan rekan-rekan ini lahir dari semangat bersama untuk memastikan bahwa kesenian tradisional tetap hidup di tengah perubahan zaman. Dengan mayoritas anggota yang masih berusia muda.

Sebagai salah satu sanggar seni yang aktif dalam pelestarian budaya Jawa, Turonggo Mudho Ontoseno secara rutin menyelenggarakan latihan Tari Topeng Gedruk dan latihan Gamelan Jawa. Setiap pertemuan bukan sekadar latihan seni, melainkan ruang untuk belajar tentang filosofi kehidupan, membangun disiplin, memperkuat rasa gotong royong, serta menumbuhkan kebersamaan di antara para anggotanya. Melalui proses inilah para pemuda tidak hanya menguasai teknik menari dan memainkan gamelan, tetapi juga memahami nilai-nilai luhur yang menjadi identitas budaya Jawa.

Bagi Sanggar Seni Turonggo Mudho Ontoseno, melestarikan budaya bukan hanya sekadar mempertahankan sebuah tradisi atau menumbuhkan rasa bangga terhadap warisan leluhur. Lebih dari itu, budaya merupakan jati diri, media pendidikan karakter, serta jembatan yang menghubungkan generasi muda dengan sejarah, nilai, dan kearifan lokal. Dengan semangat kolaborasi dan dedikasi, sanggar ini terus mengajak masyarakat untuk bersama-sama mendukung pelestarian seni tradisional Jawa, agar Tari Topeng Gedruk, Gamelan Jawa, dan berbagai kesenian daerah lainnya tetap hidup, berkembang, serta menjadi inspirasi bagi generasi masa kini dan masa depan.`,
    read: "8 MIN",
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
        style={{ fontSize: "24vw", top: "5%", left: "40%", lineHeight: 1 }}
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
              JOURNAL
              <br />
              SOCIAL
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-[280px] leading-relaxed">
            pemuda-pemudi.
          </p>
        </div>

        {/* Posts */}
        <div className="flex flex-col">
          {posts.map((p, i) => (
            <article
              key={p.id}
              className="
    group
    grid
    md:grid-cols-12
    gap-6
    py-10
    px-6
    -mx-6
    rounded-2xl
    transition-all
    duration-500
    hover:bg-white/[0.03]
    hover:scale-[1.01]
    cursor-pointer
  "
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

              {/* Content */}
              <div className="md:col-span-7">
                <h3
                  className="
      text-2xl
      md:text-3xl
      font-bold
      text-white
      leading-tight
      mb-3
      transition-all
      duration-300
      group-hover:text-[#FF3D00]
    "
                >
                  {p.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed max-w-[520px]">
                  {p.excerpt}
                </p>

                {/* Hidden Text */}
                <div
                  className="
      overflow-hidden
      max-h-0
      opacity-0
      translate-y-5
      transition-all
      duration-700
      ease-in-out
      group-hover:max-h-[600px]
      group-hover:opacity-100
      group-hover:translate-y-0
    "
                >
                  <div className="mt-6 space-y-5">
                    {p.description.split("\n\n").map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-white/70 text-sm leading-7 text-justify"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Read */}
              <div className="md:col-span-2 flex md:flex-col md:items-end justify-between">
                <p className="label">{p.read}</p>

                <span
                  className="
      text-2xl
      transition-all
      duration-500
      group-hover:text-[#FF3D00]
      group-hover:rotate-90
    "
                >
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
