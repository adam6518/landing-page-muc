import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <Image src="/images/brand/muc-logo.png" alt="PT. Mitra Utama Cemerlang" width={150} height={90} className="h-16 w-auto object-contain object-left" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-muc-muted">One-stop general supplier partner untuk kebutuhan bahan baku, pangan, dan perlengkapan umum.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <a href="tel:02158908361" className="rounded-2xl border border-slate-200 p-5 transition hover:border-muc-blue">
            <Phone size={20} className="text-muc-blue" /><p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">Phone</p><p className="mt-1 text-sm font-bold text-muc-navy">021-58908361</p>
          </a>
          <a href="mailto:mitrautamacemerlang1@gmail.com" className="rounded-2xl border border-slate-200 p-5 transition hover:border-muc-blue">
            <Mail size={20} className="text-muc-red" /><p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">Email</p><p className="mt-1 break-all text-sm font-bold text-muc-navy">mitrautamacemerlang1@gmail.com</p>
          </a>
          <div className="rounded-2xl border border-slate-200 p-5">
            <MapPin size={20} className="text-muc-blue" /><p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">Office</p><p className="mt-1 text-sm font-bold leading-6 text-muc-navy">Kembangan, Jakarta Barat</p>
          </div>
        </div>
      </div>
    </section>
  );
}
