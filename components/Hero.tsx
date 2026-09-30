import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Package,
  Truck,
} from "lucide-react";

const heroImages = {
  main: {
    src: "/images/projects/project-001.jpg",
    alt: "Aktivitas supply dan distribusi PT. Mitra Utama Cemerlang",
    category: "Supply & Distribution",
    title: "Pangan & Sembako",
  },
  top: {
    src: "/images/projects/project-002.jpg",
    alt: "Produk supply PT. Mitra Utama Cemerlang",
    category: "Fresh Products",
    title: "Fresh & Food Supply",
  },
  middle: {
    src: "/images/projects/project-006.jpg",
    alt: "Aktivitas distribusi produk MUC",
    category: "Loading & Delivery",
    title: "Distribusi Barang",
  },
  bottom: {
    src: "/images/projects/project-005.jpg",
    alt: "Produk kebutuhan pokok",
    category: "Staples Supply",
    title: "Beras & Kebutuhan Pokok",
  },
  side: {
    src: "/images/projects/project-003.jpg",
    alt: "Aktivitas operasional supply",
    category: "General Equipment",
    title: "Perlengkapan Operasional",
  },
};

function ImageCard({
  image,
  className = "",
  imageClassName = "",
  priority = false,
}: {
  image: {
    src: string;
    alt: string;
    category: string;
    title: string;
  };
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[26px] bg-slate-200 shadow-[0_18px_55px_rgba(10,31,51,0.13)] ${className}`}
    >
      {/* Image */}
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 50vw, 280px"
        className={`hero-project-image absolute inset-0 h-full w-full object-cover ${imageClassName}`}
      />

      {/* Dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-muc-navy/90 via-muc-navy/10 to-transparent opacity-90 transition duration-500 group-hover:opacity-100" />

      {/* Hover zoom */}
      <div className="absolute inset-0 bg-white/0 transition duration-500 group-hover:bg-white/[0.03]" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-5">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-muc-red" />

          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/75">
            {image.category}
          </span>
        </div>

        <h3 className="font-display text-lg font-extrabold leading-tight text-white">
          {image.title}
        </h3>
      </div>
    </article>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-[76px]"
    >
      {/* =========================
          BACKGROUND DECORATION
      ========================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue glow */}
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-muc-blue/[0.08] blur-[100px]" />

        {/* Red glow */}
        <div className="absolute right-[-180px] top-[180px] h-[500px] w-[500px] rounded-full bg-muc-red/[0.07] blur-[110px]" />

        {/* Soft blue shape */}
        <div className="absolute bottom-[-180px] right-[8%] h-[300px] w-[300px] rounded-full bg-muc-blue/[0.06] blur-[90px]" />
      </div>

      <div className="container-x relative">
        <div className="grid min-h-[calc(100vh-76px)] items-center gap-14 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:py-20">
          {/* =====================================================
              LEFT — HERO CONTENT
          ====================================================== */}

          <div className="relative z-10 max-w-[650px]">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-muc-red" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-600">
                General Supply Partner
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-[clamp(46px,6vw,78px)] font-extrabold leading-[0.96] tracking-[-0.055em] text-muc-navy">
              Supply that
              <br />

              <span className="text-muc-blue">
                keeps your
              </span>

              <br />

              business moving.
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[590px] text-[16px] leading-8 text-muc-muted sm:text-[17px]">
              PT. Mitra Utama Cemerlang menyediakan berbagai kebutuhan bahan
              baku, pangan, dan perlengkapan umum untuk mendukung operasional
              bisnis perusahaan.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-muc-red px-7 py-4 text-sm font-extrabold text-white shadow-[0_12px_30px_rgba(200,14,26,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ad0c17] hover:shadow-[0_16px_35px_rgba(200,14,26,0.24)]"
              >
                Explore Our Projects

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-extrabold text-muc-navy transition duration-300 hover:-translate-y-0.5 hover:border-muc-blue hover:text-muc-blue"
              >
                Discuss Your Needs
              </a>
            </div>

            {/* Service highlights */}
            <div className="mt-10 flex flex-wrap items-center gap-y-4 text-xs font-semibold text-slate-500">
              <div className="flex items-center gap-2 pr-5">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-muc-blue/[0.08]">
                  <Package
                    size={15}
                    className="text-muc-blue"
                  />
                </span>

                <span>
                  Fresh & food
                  <br />
                  supply
                </span>
              </div>

              <div className="hidden h-8 w-px bg-slate-200 sm:block" />

              <div className="flex items-center gap-2 px-5">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-muc-blue/[0.08]">
                  <Truck
                    size={15}
                    className="text-muc-blue"
                  />
                </span>

                <span>
                  General
                  <br />
                  equipment
                </span>
              </div>

              <div className="hidden h-8 w-px bg-slate-200 sm:block" />

              <div className="flex items-center gap-2 pl-5">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-muc-red/[0.08]">
                  <MapPin
                    size={15}
                    className="text-muc-red"
                  />
                </span>

                <span>
                  Jakarta &
                  <br />
                  Kalimantan
                </span>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT — IMAGE COLLAGE
          ====================================================== */}

          <div className="relative mx-auto w-full max-w-[650px] lg:ml-auto">
            {/* Decorative blue block */}
            <div className="absolute -left-7 top-[-24px] h-32 w-32 rounded-[28px] bg-muc-blue" />

            {/* Decorative red block */}
            <div className="absolute -right-4 top-12 h-24 w-24 rounded-[26px] bg-muc-red" />

            {/* Decorative curved background */}
            <div className="absolute -bottom-20 right-[-70px] h-72 w-72 rounded-full border-[34px] border-muc-blue/[0.08]" />

            {/* Image grid */}
            <div className="relative grid grid-cols-12 grid-rows-[180px_180px_180px] gap-3 sm:grid-rows-[190px_190px_190px]">
              {/* Main image */}
              <ImageCard
                image={heroImages.main}
                priority
                className="col-span-7 row-span-3 min-h-[500px] sm:min-h-[580px]"
                imageClassName="scale-[1.32] object-[center_48%] transition-transform duration-700 group-hover:scale-[1.4]"
              />

              {/* Top right */}
              <ImageCard
                image={heroImages.top}
                className="col-span-5 row-span-1"
                imageClassName="scale-[1.38] object-[center_45%] transition-transform duration-700 group-hover:scale-[1.48]"
              />

              {/* Middle right */}
              <ImageCard
                image={heroImages.middle}
                className="col-span-5 row-span-1"
                imageClassName="scale-[1.4] object-[center_48%] transition-transform duration-700 group-hover:scale-[1.5]"
              />

              {/* Bottom right */}
              <ImageCard
                image={heroImages.bottom}
                className="col-span-5 row-span-1"
                imageClassName="scale-[1.38] object-[center_50%] transition-transform duration-700 group-hover:scale-[1.48]"
              />
            </div>

            {/* Operating since */}
            <div className="absolute bottom-5 left-5 z-20 rounded-[18px] border border-white/70 bg-white/95 px-5 py-4 shadow-[0_15px_40px_rgba(10,31,51,0.16)] backdrop-blur-md">
              <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-slate-500">
                Operating since
              </p>

              <p className="mt-1 font-display text-xl font-extrabold text-muc-navy">
                May 2025
              </p>
            </div>

            {/* Small credibility badge */}
            <div className="absolute -bottom-6 right-5 z-20 hidden items-center gap-2 rounded-full border border-white bg-muc-navy px-4 py-3 text-[10px] font-bold text-white shadow-xl sm:flex">
              <CheckCircle2
                size={15}
                className="text-blue-300"
              />

              Reliable Supply Partner
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}