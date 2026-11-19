import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { Boxes, Leaf, PackageCheck } from "lucide-react";

const products = [
  {
    no: "01",
    icon: Leaf,
    title: "Fresh Products",
    text: "Beragam pilihan produk pangan untuk mendukung kebutuhan konsumsi dan operasional perusahaan, tersedia melalui jaringan supplier.",
    images: [
      {
        src: "/images/products/product-01.jpg",
        alt: "Berbagai produk pangan dan kemasan",
      },
      {
        src: "/images/products/product-02.jpg",
        alt: "Produk makanan dalam kemasan",
      },
    ],
  },
  {
    no: "02",
    icon: PackageCheck,
    title: "Staples & Grocery",
    text: "Kebutuhan bahan pokok seperti beras, bumbu masak, minyak goreng, produk kemasan, dan kebutuhan grocery lainnya.",
    images: [
      {
        src: "/images/products/product-03.jpg",
        alt: "Aneka produk kebutuhan bahan pokok",
      },
      {
        src: "/images/products/product-04.jpg",
        alt: "Produk grocery dan bahan pangan",
      },
    ],
  },
  {
    no: "03",
    icon: Boxes,
    title: "General Equipment",
    text: "Pengadaan beragam produk kebutuhan perusahaan melalui jaringan supplier untuk mendukung aktivitas operasional.",
    images: [
      {
        src: "/images/products/product-05.jpg",
        alt: "Kumpulan produk kebutuhan perusahaan",
      },
      {
        src: "/images/products/product-06.jpg",
        alt: "Berbagai pilihan produk supply",
      },
    ],
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-muc-blue/[0.04] blur-[100px]" />

      <div className="container-x relative">
        {/* Section heading */}
        <SectionHeading
          eyebrow="Products & Services"
          title="Beragam produk untuk kebutuhan operasional Perusahaan."
          description="MUC menyediakan beragam kategori produk untuk mendukung perusahaan memenuhi kebutuhan operasional melalui partner supplier andalan."
        />

        {/* Product categories */}
        <div className="mt-10 grid gap-6 sm:mt-12 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {products.map(({ no, icon: Icon, title, text, images }) => (
            <div key={no} className="group relative">
              {/* Category information card */}
              <article className="card-hover relative flex min-h-[350px] flex-col overflow-hidden rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(10,31,51,0.04)] transition-all duration-300 hover:border-muc-blue/20 hover:shadow-[0_20px_50px_rgba(10,31,51,0.09)] sm:rounded-[30px] sm:p-6 lg:p-7">
                {/* Icon & Number */}
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-[15px] bg-muc-blue/[0.08] text-muc-blue transition-colors duration-300 group-hover:bg-muc-blue group-hover:text-white sm:h-12 sm:w-12 sm:rounded-2xl">
                    <Icon size={21} />
                  </div>

                  <span className="font-display text-sm font-extrabold tracking-wide text-slate-300">
                    {no}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-7 font-display text-xl font-extrabold tracking-tight text-muc-navy sm:mt-8 sm:text-2xl">
                  {title}
                </h3>

                {/* Description */}
                <p className="mt-3 min-h-[112px] text-sm leading-7 text-muc-muted">
                  {text}
                </p>

                {/* Accent */}
                <div className="mt-auto pt-6">
                  <div className="h-1 w-10 rounded-full bg-muc-red transition-all duration-300 group-hover:w-16" />
                </div>
              </article>

              {/* Product image gallery */}
              <div className="mt-5 grid grid-cols-[1.15fr_0.85fr] gap-3 sm:mt-6">
                {images.map((image, index) => (
                  <div
                    key={image.src}
                    className={`relative flex items-center justify-center overflow-hidden rounded-[20px] border border-slate-100 bg-slate-50 p-2 transition-all duration-300 hover:border-muc-blue/20 hover:bg-slate-100 ${
                      index === 0
                        ? "h-[190px] sm:h-[220px]"
                        : "h-[190px] sm:h-[220px]"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={800}
                      sizes="(max-width: 639px) 45vw, (max-width: 1023px) 30vw, 15vw"
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xs leading-6 text-muc-muted sm:text-sm">
            Memiliki kebutuhan produk tertentu? Kami siap membantu mencari
            solusi supply yang sesuai dengan kebutuhan perusahaan Anda.
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
