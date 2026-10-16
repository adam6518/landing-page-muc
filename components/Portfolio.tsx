import Image from "next/image";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    image: "photo refine.jpeg",
    category: "Supply & Distribution",
    title: "Operational Supply Activity",
    alt: "Stok bahan pangan dan sembako",
    ratio: "landscape",
    position: "center",
  },
  {
    image: "PHOTO-2024-07-30-09-43-39(1).jpg",
    category: "Food Supply",
    title: "Product Fulfillment",
    alt: "Stok produk kebutuhan pangan",
    ratio: "landscape",
    position: "center",
  },
  {
    image: "PHOTO-2024-07-30-09-43-39.jpg",
    category: "Grocery Supply",
    title: "Prepared Product Delivery",
    alt: "Produk yang disiapkan untuk distribusi",
    ratio: "landscape",
    position: "center",
  },
  {
    image: "refinement2.jpeg",
    category: "Logistics",
    title: "Loading & Distribution",
    alt: "Barang yang dimuat untuk pengiriman",
    ratio: "portrait",
    position: "center",
  },
  {
    image: "refinement3.jpeg",
    category: "Product Fulfillment",
    title: "General Supply Activity",
    alt: "Persediaan barang dalam kemasan",
    ratio: "portrait",
    position: "center",
  },
  {
    image: "refinement4.jpeg",
    category: "Supply Operations",
    title: "On-site Delivery",
    alt: "Aktivitas pengiriman barang",
    ratio: "portrait",
    position: "center",
  },
  {
    image: "WhatsApp Image 2026-10-12 at 14.03.25 (1).jpeg",
    category: "Delivery Operations",
    title: "Delivery Preparation",
    alt: "Persiapan barang untuk pengiriman",
    ratio: "portrait",
    position: "center",
  },
  {
    image: "WhatsApp Image 2026-10-12 at 14.03.25.jpeg",
    category: "Distribution",
    title: "Supply Distribution",
    alt: "Barang kebutuhan umum yang siap didistribusikan",
    ratio: "portrait",
    position: "center",
  },
];

export default function Portfolio() {
  return (
    <section
      id="projects"
      className="overflow-hidden bg-muc-soft py-16 sm:py-20 lg:py-28"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Project Experience"
          title="Kinerja Nyata Tim Lapangan."
          description="Dokumentasi aktivitas supply dan distribusi MUC yang saat ini tersedia. Detail nama project dan client dapat ditambahkan pada tahap berikutnya."
        />

        <div className="mt-10 columns-1 gap-4 sm:mt-12 sm:columns-2 sm:gap-5 lg:mt-14 lg:columns-3 lg:gap-5">
          {projects.map((project, index) => (
            <article
              key={project.image}
              className="portfolio-card group relative mb-4 inline-block w-full break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(10,31,51,0.06)] sm:mb-5 sm:rounded-[24px]"
            >
              <div
                className={`relative w-full overflow-hidden bg-slate-200 ${
                  project.ratio === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={`/images/projects/${encodeURIComponent(project.image)}`}
                  alt={project.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="portfolio-image object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                  style={{ objectPosition: project.position }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-muc-navy/85 via-muc-navy/0 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute right-4 top-4 flex h-8 min-w-8 items-center justify-center rounded-full border border-white/40 bg-black/20 px-2 text-[10px] font-bold text-white backdrop-blur-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/75 sm:text-[10px]">
                    {project.category}
                  </p>

                  <h3 className="mt-2 max-w-[95%] font-display text-base font-extrabold leading-snug text-white sm:text-lg">
                    {project.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xs leading-6 text-muc-muted sm:text-sm">
            Setiap dokumentasi menunjukkan aktivitas operasional dan dukungan
            supply yang dilakukan oleh tim MUC.
          </p>

          <a
            href="#contact"
            className="inline-flex w-fit shrink-0 items-center gap-2 text-sm font-bold text-muc-blue transition-colors hover:text-muc-red"
          >
            Discuss Your Needs
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
