import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  // ← LETAKKAN DI SINI sosial media
  const socials = [
    {
      name: "INSTAGRAM",
      url: "https://www.instagram.com/ngestimanunggal_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      name: "TIKTOK",
      url: "https://www.tiktok.com/@ngestimanunggal_official?is_from_webapp=1&sender_device=pc",
    },
    {
      name: "WHATSAPP",
      url: "https://wa.me/6281234567890",
    },
  ];

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative py-32 bg-[#0A0A0A] border-t border-white/5 overflow-hidden"
    >
      {/* Giant decorative slash */}
      <div
        className="absolute pointer-events-none select-none text-white/[0.04] font-bold"
        style={{
          fontSize: "36vw",
          bottom: "-10%",
          right: "-5%",
          lineHeight: 1,
        }}
      >
        /
      </div>

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="accent-block w-2 h-2" />
          <p className="label">04 / CONTACT</p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Left — big call */}
          <div className="md:col-span-5">
            <h2 className="display-large text-white">
              LET'S
              <br />
              <span className="text-[#FF3D00]">TALK.</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mt-8 max-w-[360px]">
              We take on a small number of projects each year. If you have a
              problem worth solving seriously, we'd like to hear about it.
            </p>

            <div className="mt-12 flex flex-col gap-6">
              <div>
                <p className="label mb-2">STUDIO</p>
                <p className="text-white text-sm">
                  jl capung, Sidorejo
                  <br />
                  Bendosari, 57527 SKH
                </p>
              </div>
              <div>
                <p className="label mb-2">EMAIL</p>
                <a
                  href="mailto:N.manunggal@gmail.com"
                  className="text-white text-sm underline-orange"
                >
                  N.manunggal@gmail.com
                </a>
              </div>
              <div>
                <p className="label mb-2">SOCIAL</p>
                <div className="flex gap-6">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label hover:text-white transition-colors"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="md:col-span-7 md:pl-12">
            <form onSubmit={submit} className="flex flex-col gap-2">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="label">YOUR NAME</label>
                  <input
                    className="contact-input"
                    placeholder="NG.MANUNGGAL"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="label">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    className="contact-input"
                    placeholder="N.manunggal@gmail.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <div className="mt-8">
                <label className="label">PROJECT BRIEF</label>
                <textarea
                  className="contact-input resize-none"
                  rows={4}
                  placeholder="Tell us about the object you want to make..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                />
              </div>

              <div className="mt-10 flex flex-col md:flex-row md:items-center gap-6">
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
                {sent && (
                  <p className="text-[#FF3D00] mono text-xs tracking-widest uppercase animate-fade-in">
                    ✓ Message received — we'll reply within 48h
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
