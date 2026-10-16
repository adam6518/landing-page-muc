import SectionHeading from "./SectionHeading";
import {
  ArrowUpRight,
  Network,
  Target,
  TrendingUp,
  ShieldCheck,
  Handshake,
  Clock3,
  PackageCheck,
} from "lucide-react";

const advantages = [
  {
    icon: Network,
    title: "Supplier Network",
    description: "Jaringan supplier untuk mendukung ketersediaan produk.",
    color: "blue",
  },
  {
    icon: Target,
    title: "Quality Control",
    description: "Kontrol kualitas bersama supplier utama.",
    color: "red",
  },
  {
    icon: TrendingUp,
    title: "Price Awareness",
    description: "Pemantauan harga untuk menjaga daya saing.",
    color: "blue",
  },
];

const missions = [
  {
    icon: ShieldCheck,
    text: "Menjaga konsistensi kualitas bahan baku, pangan, dan perlengkapan umum melalui kontrol langsung bersama supplier utama.",
  },
  {
    icon: TrendingUp,
    text: "Menjaga stabilitas dan daya saing harga melalui pemantauan harga secara berkala.",
  },
  {
    icon: Clock3,
    text: "Memberikan layanan pengadaan yang tepat waktu, responsif, dan transparan sebagai bentuk komitmen terhadap kepercayaan dan kepuasan klien.",
  },
  {
    icon: PackageCheck,
    text: "Memperkuat jaringan dan hubungan dengan supplier guna menjamin ketersediaan stok barang.",
  },
  {
    icon: Handshake,
    text: "Membangun kemitraan jangka panjang dengan klien sekaligus memperluas basis pelanggan.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-y border-slate-100 bg-muc-soft/70 py-20 sm:py-24 lg:py-28"
    >
      <div className="container-x">
        {/* ABOUT INTRODUCTION */}

        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="About MUC"
              title="Pasokan Andal untuk Mendukung Bisnis Anda."
            />

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-muc-blue transition-colors hover:text-muc-red"
            >
              Talk to our team
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div>
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              PT. Mitra Utama Cemerlang merupakan perusahaan{" "}
              <em>general supplier</em> yang mengelola jaringan supplier untuk
              memenuhi kebutuhan bahan baku, pangan, dan perlengkapan umum bagi
              klien.
            </p>

            <p className="mt-5 text-sm leading-7 text-muc-muted sm:text-base">
              MUC hadir untuk mendukung kelancaran operasional bisnis Anda
              melalui penyediaan kebutuhan pokok dan perlengkapan operasional
              yang andal, agar bisnis Anda dapat berjalan lebih optimal.
            </p>

            {/* COMPANY ADVANTAGES */}

            <div className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
              {advantages.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="card-hover rounded-2xl border border-slate-200 bg-white p-4 sm:p-5"
                  >
                    <Icon
                      size={22}
                      className={
                        item.color === "red" ? "text-muc-red" : "text-muc-blue"
                      }
                    />

                    <h3 className="mt-4 font-display text-sm font-extrabold text-muc-navy">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-muc-muted">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* VISION AND MISSION */}

        <div
          id="vision-mission"
          className="mt-20 border-t border-slate-200 pt-12 sm:mt-24 sm:pt-16 lg:mt-28"
        >
          <div className="mb-8 sm:mb-10">

            <h2 className="mt-3 max-w-3xl font-display text-3xl font-black leading-tight tracking-tight text-muc-navy sm:text-4xl lg:text-5xl">
              Built for trust.
              <br className="hidden sm:block" /> Focused on continuity.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muc-muted sm:text-base">
              Komitmen MUC dalam membangun kemitraan yang dapat diandalkan
              melalui kualitas, harga, dan layanan pengadaan.
            </p>
          </div>

          {/* VISION CARD */}

          <div className="relative overflow-hidden rounded-3xl bg-muc-navy p-6 text-white sm:p-8 lg:p-10">
            <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full border border-white/10" />
            <div className="absolute -right-8 -top-12 h-40 w-40 rounded-full border border-white/10" />

            <div className="relative">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-300">
                Our Vision
              </p>

              <h3 className="mt-5 max-w-4xl font-display text-xl font-extrabold leading-relaxed sm:text-2xl lg:text-3xl">
                Menjadi mitra usaha terpercaya dalam penyediaan bahan baku,
                pangan, dan perlengkapan umum.
              </h3>

              <div className="my-6 h-px bg-white/15 sm:my-7" />

              <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
                Didukung oleh komitmen menjaga konsistensi kualitas, harga, dan
                layanan sebagai prioritas utama MUC.
              </p>
            </div>
          </div>

          {/* MISSION LIST */}

          <div className="mt-10 sm:mt-12">
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muc-blue">
                Our Mission
              </p>

              <span className="text-xs text-muc-muted">5 commitments</span>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
              {missions.map((mission, index) => {
                const Icon = mission.icon;

                return (
                  <div
                    key={mission.text}
                    className={`group flex items-start gap-4 p-5 transition-colors hover:bg-slate-50 sm:items-center sm:gap-5 sm:px-6 sm:py-6 ${
                      index !== missions.length - 1
                        ? "border-b border-slate-200"
                        : ""
                    }`}
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muc-red text-white">
                      <span className="text-xs font-extrabold">
                        {index + 1}
                      </span>
                    </div>

                    <p className="flex-1 text-sm leading-7 text-slate-600 sm:text-base">
                      {mission.text}
                    </p>

                    <Icon
                      size={19}
                      className="mt-1 hidden shrink-0 text-muc-blue/70 transition-colors group-hover:text-muc-red sm:block"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
