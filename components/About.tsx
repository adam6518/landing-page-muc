import SectionHeading from "./SectionHeading";
import { ArrowUpRight, Network, Target, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="border-y border-slate-100 bg-muc-soft/70 py-24 lg:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="About MUC" title="A supply partner built around business continuity." />
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-muc-blue">Talk to our team <ArrowUpRight size={16} /></a>
        </div>
        <div>
          <p className="text-lg leading-8 text-slate-700">
            PT. Mitra Utama Cemerlang merupakan perusahaan general supplier yang mengelola jaringan supplier untuk memenuhi kebutuhan bahan baku, pangan, dan perlengkapan umum bagi klien.
          </p>
          <p className="mt-5 text-base leading-7 text-muc-muted">
            MUC dibangun untuk membantu perusahaan mendapatkan kebutuhan operasional melalui partner supply yang responsif. Saat ini MUC memperkuat model sebagai pemasok langsung untuk meningkatkan kontrol kualitas dan harga yang kompetitif.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="card-hover rounded-2xl border border-slate-200 bg-white p-5">
              <Network className="text-muc-blue" size={22} />
              <h3 className="mt-5 font-display text-sm font-extrabold text-muc-navy">Supplier Network</h3>
              <p className="mt-2 text-xs leading-5 text-muc-muted">Jaringan supplier untuk mendukung ketersediaan produk.</p>
            </div>
            <div className="card-hover rounded-2xl border border-slate-200 bg-white p-5">
              <Target className="text-muc-red" size={22} />
              <h3 className="mt-5 font-display text-sm font-extrabold text-muc-navy">Quality Control</h3>
              <p className="mt-2 text-xs leading-5 text-muc-muted">Kontrol kualitas bersama supplier utama.</p>
            </div>
            <div className="card-hover rounded-2xl border border-slate-200 bg-white p-5">
              <TrendingUp className="text-muc-blue" size={22} />
              <h3 className="mt-5 font-display text-sm font-extrabold text-muc-navy">Price Awareness</h3>
              <p className="mt-2 text-xs leading-5 text-muc-muted">Pemantauan harga untuk menjaga daya saing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
