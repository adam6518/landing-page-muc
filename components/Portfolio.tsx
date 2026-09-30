import Image from "next/image";
import SectionHeading from "./SectionHeading";

const projects = [
  ["project-001.jpg", "Supply & Distribution", "Operational supply activity"],
  ["project-002.jpg", "Food Supply", "Product fulfillment"],
  ["project-006.jpg", "Grocery Supply", "Prepared product delivery"],
  ["project-003.jpg", "Logistics", "Loading & distribution"],
  ["project-005.jpg", "Product Fulfillment", "General supply activity"],
  ["project-007.jpg", "Supply Operations", "On-site delivery"],
];

export default function Portfolio() {
  return (
    <section id="projects" className="bg-muc-soft py-24 lg:py-28">
      <div className="container-x">
        <SectionHeading eyebrow="Project Experience" title="Proof in motion." description="Dokumentasi aktivitas supply dan distribusi MUC yang saat ini tersedia. Detail nama project dan client dapat ditambahkan pada tahap berikutnya." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(([image, category, title], index) => (
            <article key={image} className={`portfolio-card group relative overflow-hidden rounded-[28px] bg-slate-200 ${index === 0 ? "sm:row-span-2" : ""}`}>
              <div className={`${index === 0 ? "aspect-[4/5] h-full" : "aspect-[4/3]"}`}>
                <Image src={`/images/projects/${image}`} alt={title} width={800} height={1000} className="portfolio-image h-full w-full object-cover" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-6 pt-16 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[.18em] text-white/70">{category}</p>
                <h3 className="mt-1 font-display text-lg font-extrabold">{title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
