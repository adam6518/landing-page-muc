import SectionHeading from "./SectionHeading";
import { BadgeCheck, Clock3, Handshake, PackageSearch, WalletCards } from "lucide-react";

const reasons = [
  [BadgeCheck, "Consistent Quality", "Menjaga konsistensi kualitas bahan baku, pangan, dan perlengkapan umum melalui kontrol bersama supplier utama."],
  [WalletCards, "Competitive Pricing", "Memantau harga secara berkala untuk menjaga stabilitas dan daya saing harga."],
  [Clock3, "Responsive Service", "Memberikan layanan pengadaan yang tepat waktu, responsif, dan transparan."],
  [PackageSearch, "Product Availability", "Memperkuat jaringan dan hubungan dengan supplier untuk mendukung ketersediaan stok."],
  [Handshake, "Long-Term Partnership", "Membangun kemitraan jangka panjang dengan klien dan memperluas basis pelanggan."],
];

export default function WhyMuc() {
  return (
    <section id="why-muc" className="relative overflow-hidden bg-muc-navy py-24 text-white lg:py-28">
      <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-muc-blue/20 blur-3xl" />
      <div className="absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-muc-red/15 blur-3xl" />
      <div className="container-x relative">
        <SectionHeading eyebrow="Why MUC" title="More than a supplier. A partner for your operations." description="Nilai layanan MUC dibangun dari konsistensi kualitas, harga, service, ketersediaan, dan hubungan jangka panjang." dark />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {reasons.map(([Icon, title, text]) => {
            const LucideIcon = Icon as typeof BadgeCheck;
            return <article key={title as string} className="rounded-3xl border border-white/10 bg-white/[.05] p-6 backdrop-blur-sm transition hover:bg-white/[.08]">
              <LucideIcon size={24} className="text-muc-red" />
              <h3 className="mt-10 font-display text-lg font-extrabold">{title as string}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text as string}</p>
            </article>;
          })}
        </div>
      </div>
    </section>
  );
}
