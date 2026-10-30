import SectionHeading from "./SectionHeading";
import { Boxes, Leaf, PackageCheck } from "lucide-react";

const products = [
  {
    no: "01",
    icon: Leaf,
    title: "Fresh Products",
    text: "Beragam pilihan mulai dari ayam potong utuh, ikan segar, daging sapi, hingga makanan olahan segar dalam kemasan.",
  },
  {
    no: "02",
    icon: PackageCheck,
    title: "Staples & Grocery",
    text: "Kebutuhan bahan pokok seperti beras, bumbu masak, minyak goreng, dan kebutuhan pokok lainnya.",
  },
  {
    no: "03",
    icon: Boxes,
    title: "General Equipment",
    text: "Perlengkapan kantor, alat kebersihan, dan kebutuhan pendukung lainnya untuk aktivitas operasional perusahaan.",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Products & Services"
          title="Beragam produk untuk kebutuhan operasional Perusahaan."
          description="MUC menyediakan beragam kategori produk untuk mendukung perusahaan memenuhi kebutuhan operasional melalui partner supplier andalan."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {products.map(({ no, icon: Icon, title, text }) => (
            <article
              key={no}
              className="card-hover group rounded-[28px] border border-slate-200 bg-white p-7"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-muc-blue/10 text-muc-blue">
                  <Icon size={22} />
                </div>
                <span className="font-display text-sm font-extrabold text-slate-300">
                  {no}
                </span>
              </div>
              <h3 className="mt-16 font-display text-2xl font-extrabold text-muc-navy">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muc-muted">{text}</p>
              <div className="mt-8 h-1 w-10 rounded-full bg-muc-red transition-all duration-300 group-hover:w-20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
