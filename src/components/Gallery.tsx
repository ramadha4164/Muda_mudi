import { useState } from "react";
/*untuk video*/
import kegiatanVideo from "../assets/video/Done.mp4";
import kegiatanVideo1 from "../assets/video/Ngemul Bersholawat ..mp4";
/*untuk images*/
import foto from "../images/done.jpg";
import foto1 from "../images/yuk sholawat.jpg";
import foto2 from "../images/logo.jpg";
import foto3 from "../images/Potret malam kemeriahan 1.jpg";
import foto4 from "../images/Potret malam kemeriahan 2.jpg";
{
  /*url tiktok : https://www.tiktok.com/embed/v2/7534420522751266055*/
}
interface GalleryItem {
  id: string;
  type: "image" | "video" | "tiktok" | "instagram";
  title: string;
  subtitle: string;
  src: string;
  thumbnail: string;
}

const items: GalleryItem[] = [
  {
    id: "01",
    type: "video",
    title: "Sholawat",
    subtitle: "Islam",
    src: kegiatanVideo1,
    thumbnail: foto1,
  },
  {
    id: "02",
    type: "video",
    title: "Bukber",
    subtitle: "NGESTI MANUNGGAL",
    src: kegiatanVideo,
    thumbnail: foto,
  },
  {
    id: "03",
    type: "tiktok",
    title: "TIKTOK",
    subtitle: "SOCIAL MEDIA",
    src: "https://www.tiktok.com/embed/v2/7534420522751266055",
    thumbnail: foto2,
  },
  {
    id: "04",
    type: "instagram",
    title: "INSTAGRAM",
    subtitle: "REELS",
    src: "https://www.instagram.com/reel/DOqf7xskzz4/embed/",
    thumbnail: foto2,
  },
  {
    id: "05",
    type: "image",
    title: "Budaya",
    subtitle: "seni",
    src: foto3,
    thumbnail: foto3,
  },
  {
    id: "06",
    type: "image",
    title: "Budaya",
    subtitle: "Seni",
    src: foto4,
    thumbnail: foto4,
  },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
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
              THE
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
              >
                COLLECTION
              </span>
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-[280px] leading-relaxed">
            A curated series of objects. Each piece is documented in its raw,
            unretouched state — the way it leaves the workshop.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {items.map((it) => (
            <div
              key={it.id}
              className="group relative bg-[#0A0A0A] overflow-hidden cursor-pointer"
              onClick={() => setSelectedItem(it)}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">
                <div className="absolute inset-0 flex items-center justify-center">
                  {it.type !== "image" && (
                    <div className="w-20 h-20 rounded-full border border-white/30 backdrop-blur-md bg-black/30 flex items-center justify-center text-white text-2xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                      ▶
                    </div>
                  )}
                </div>
                <img
                  loading="lazy"
                  src={it.thumbnail}
                  alt={it.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                />
                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none">
                  <div className="flex items-start justify-between">
                    <span className="label text-white/70">{it.id}</span>
                    <span className="accent-block w-2 h-2" />
                  </div>
                  <div>
                    <p className="label text-white/70 mb-2">{it.subtitle}</p>
                    <p className="display-medium text-white">{it.title}</p>
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
      {selectedItem && (
        <div
          className="fixed inset-0 z-[9998] bg-black/95 flex items-center justify-center p-10"
          onClick={() => setSelectedItem(null)}
        >
          {/* Tombol Close */}
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 z-[9999] w-12 h-12 rounded-full bg-black/60 hover:bg-red-600 transition-all duration-300 flex items-center justify-center text-white text-3xl"
          >
            ✕
          </button>

          {/* Konten */}
          <div
            className="w-full max-w-6xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === "image" && (
              <img
                src={selectedItem.src}
                className="w-full h-full object-contain"
              />
            )}
            {selectedItem.type === "video" && (
              <video controls autoPlay className="w-full h-full object-contain">
                <source src={selectedItem.src} type="video/mp4" />
              </video>
            )}
            {selectedItem.type === "tiktok" && (
              <iframe
                src={selectedItem.src}
                className="w-full h-full"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            )}
            {selectedItem.type === "instagram" && (
              <iframe
                src={selectedItem.src}
                className="w-full h-full"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
