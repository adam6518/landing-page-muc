import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin, Package, Truck } from "lucide-react";

const imagePath = (filename: string) =>
  `/images/projects/${encodeURIComponent(filename)}`;

const heroImages = {
  main: {
    src: imagePath("photo refine.jpeg"),
    alt: "Stok bahan pangan dan sembako",
    category: "Supply & Distribution",
    title: "Pangan & Sembako",
    position: "center",
  },
  top: {
    src: imagePath("PHOTO-2024-07-30-09-43-39(1).jpg"),
    alt: "Stok produk kebutuhan operasional",
    category: "Product Supply",
    title: "Kebutuhan Operasional",
    position: "center",
  },
  middle: {
    src: imagePath("WhatsApp Image 2026-10-12 at 14.03.25 (1).jpeg"),
    alt: "Aktivitas distribusi barang",
    category: "Loading & Delivery",
    title: "Distribusi Barang",
    position: "center",
  },
  bottom: {
    src: imagePath("refinement2.jpeg"),
    alt: "Persediaan produk kebutuhan pokok",
    category: "Staples Supply",
    title: "Beras & Kebutuhan Pokok",
    position: "center",
  },
};

type HeroImageData = (typeof heroImages)[keyof typeof heroImages];

function ImageCard({
  image,
  className = "",
  priority = false,
}: {
  image: HeroImageData;
  className?: string;
  priority?: boolean;
}) {
  return (
    <article
      className={`group relative isolate overflow-hidden rounded-2xl bg-slate-200 shadow-[0_14px_36px_rgba(10,31,51,0.10)] sm:rounded-[24px] ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 30vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        style={{ objectPosition: image.position }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-muc-navy/90 via-muc-navy/15 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-10 p-3 sm:p-4 lg:p-5">
        <div className="mb-1.5 flex items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muc-red" />
          <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-white/80 sm:text-[9px]">
            {image.category}
          </span>
        </div>

        <h3 className="font-display text-sm font-extrabold leading-snug text-white sm:text-base lg:text-lg">
          {image.title}
        </h3>
      </div>
    </article>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-[76px]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-muc-blue/[0.07] blur-[100px]" />
        <div className="absolute -right-40 top-40 h-[450px] w-[450px] rounded-full bg-muc-red/[0.06] blur-[110px]" />
        <div className="absolute -bottom-40 right-[8%] h-[300px] w-[300px] rounded-full bg-muc-blue/[0.05] blur-[90px]" />
      </div>

      <div className="container-x relative">
        <div className="grid items-center gap-10 py-10 sm:gap-12 sm:py-14 lg:min-h-[calc(100vh-76px)] lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:py-16">
          {/* HERO CONTENT */}
          <div className="relative z-10 mx-auto w-full max-w-[650px] lg:mx-0">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-sm sm:mb-6">
              <span className="h-2 w-2 rounded-full bg-muc-red" />
              <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-slate-600 sm:text-[10px]">
                General Supply Partner
              </span>
            </div>

            <h1 className="font-display text-[clamp(40px,5.6vw,78px)] font-extrabold leading-[0.98] tracking-[-0.055em] text-muc-navy">
              Partner
              <br />
              <span className="text-muc-blue">untuk beragam</span>
              <br />
              kebutuhan Perusahaan
            </h1>

            <p className="mt-6 max-w-[590px] text-sm leading-7 text-muc-muted sm:mt-7 sm:text-base sm:leading-8 lg:text-[17px]">
              PT. Mitra Utama Cemerlang menyediakan berbagai kebutuhan bahan
              baku, pangan, dan perlengkapan umum untuk mendukung operasional
              bisnis perusahaan.
            </p>

            <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row sm:mt-9">
              <a
                href="#projects"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-muc-red px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_12px_30px_rgba(200,14,26,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ad0c17] sm:px-7"
              >
                Explore Our Projects
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-extrabold text-muc-navy transition duration-300 hover:border-muc-blue hover:text-muc-blue sm:px-7"
              >
                Discuss Your Needs
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-4 text-xs font-semibold text-slate-500 sm:mt-10 sm:gap-x-5">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-muc-blue/[0.08]">
                  <Package size={15} className="text-muc-blue" />
                </span>
                <span>
                  Fresh & food
                  <br />
                  supply
                </span>
              </div>

              <div className="hidden h-8 w-px bg-slate-200 sm:block" />

              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-muc-blue/[0.08]">
                  <Truck size={15} className="text-muc-blue" />
                </span>
                <span>
                  General
                  <br />
                  equipment
                </span>
              </div>

              <div className="hidden h-8 w-px bg-slate-200 sm:block" />

              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-muc-red/[0.08]">
                  <MapPin size={15} className="text-muc-red" />
                </span>
                <span>
                  Jakarta &
                  <br />
                  Kalimantan
                </span>
              </div>
            </div>
          </div>

          {/* IMAGE COLLAGE */}
          <div className="relative mx-auto w-full max-w-[650px] lg:ml-auto">
            <div className="pointer-events-none absolute -left-3 top-5 h-20 w-20 rounded-[22px] bg-muc-blue sm:-left-5 sm:top-8 sm:h-28 sm:w-28" />
            <div className="pointer-events-none absolute -right-2 top-10 h-16 w-16 rounded-[20px] bg-muc-red sm:-right-3 sm:top-12 sm:h-20 sm:w-20" />
            <div className="pointer-events-none absolute -bottom-8 right-0 h-36 w-36 rounded-full border-[18px] border-muc-blue/[0.08] sm:-bottom-12 sm:-right-5 sm:h-56 sm:w-56 sm:border-[26px]" />

            <div className="relative grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12 lg:grid-rows-[170px_170px_170px] lg:gap-3">
              <ImageCard
                image={heroImages.main}
                priority
                className="col-span-2 aspect-[5/3] min-h-0 lg:col-span-7 lg:row-span-3 lg:aspect-auto lg:min-h-[520px]"
              />

              <ImageCard
                image={heroImages.top}
                className="col-span-1 aspect-[4/3] lg:col-span-5 lg:row-span-1 lg:aspect-auto"
              />

              <ImageCard
                image={heroImages.middle}
                className="col-span-1 aspect-[4/3] lg:col-span-5 lg:row-span-1 lg:aspect-auto"
              />

              <ImageCard
                image={heroImages.bottom}
                className="col-span-2 aspect-[16/7] sm:aspect-[16/6] lg:col-span-5 lg:row-span-1 lg:aspect-auto"
              />
            </div>

            <div className="absolute left-3 top-3 z-20 rounded-xl border border-white/80 bg-white/95 px-3 py-2.5 shadow-lg backdrop-blur-md sm:left-5 sm:top-5 sm:rounded-[18px] sm:px-5 sm:py-4 lg:bottom-5 lg:left-5 lg:top-auto">
              <p className="text-[8px] font-extrabold uppercase tracking-[0.16em] text-slate-500 sm:text-[9px]">
                Operating since
              </p>
              <p className="mt-1 font-display text-base font-extrabold text-muc-navy sm:text-xl">
                May 2025
              </p>
            </div>

            <div className="absolute -bottom-4 right-3 z-20 hidden items-center gap-2 rounded-full border border-white bg-muc-navy px-4 py-3 text-[10px] font-bold text-white shadow-xl sm:flex lg:-bottom-5 lg:right-5">
              <CheckCircle2 size={15} className="text-blue-300" />
              Reliable Supply Partner
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-12 w-full bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
