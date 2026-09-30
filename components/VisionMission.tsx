import SectionHeading from "./SectionHeading";
import { Check } from "lucide-react";

const missions = [
  "Menjaga konsistensi kualitas melalui kontrol langsung bersama supplier utama.",
  "Menjaga stabilitas dan daya saing harga melalui pemantauan harga secara berkala.",
  "Memberikan layanan pengadaan yang tepat waktu, responsif, dan transparan.",
  "Memperkuat jaringan supplier guna menjamin ketersediaan stok barang.",
  "Membangun kemitraan jangka panjang dengan klien sekaligus memperluas basis pelanggan.",
];

export default function VisionMission() {
  return (
    <section className="py-24 lg:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[.78fr_1.22fr]">
        <div>
          <SectionHeading eyebrow="Vision & Mission" title="Built for trust. Focused on continuity." />
          <div className="mt-9 rounded-[30px] bg-muc-navy p-7 text-white lg:p-9">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-300">Our Vision</p>
            <p className="mt-5 font-display text-2xl font-extrabold leading-9">Menjadi mitra usaha terpercaya dalam penyediaan bahan baku, pangan, dan perlengkapan umum.</p>
            <div className="mt-7 h-px bg-white/10" />
            <p className="mt-5 text-sm leading-6 text-slate-300">Didukung oleh komitmen menjaga konsistensi kualitas, harga, dan layanan sebagai prioritas utama MUC.</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[.2em] text-muc-blue">Our Mission</p>
          <div className="mt-6 divide-y divide-slate-200 rounded-[30px] border border-slate-200 bg-white">
            {missions.map((mission, i) => <div key={mission} className="flex gap-5 p-6 lg:p-7">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-muc-red text-xs font-extrabold text-white">{i + 1}</span>
              <p className="text-sm leading-6 text-slate-600">{mission}</p>
            </div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
