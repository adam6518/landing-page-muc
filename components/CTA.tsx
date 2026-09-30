import { ArrowUpRight, MessageCircle } from "lucide-react";

const phone = "628158300000";

export default function CTA() {
  const message = encodeURIComponent("Halo PT. MUC, saya ingin mendapatkan informasi mengenai kebutuhan supply untuk perusahaan kami.");
  return (
    <section id="contact" className="pb-10 pt-6 lg:pb-14">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[36px] bg-muc-navy px-7 py-12 text-white lg:px-14 lg:py-16">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-muc-blue/30 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-muc-red/25 blur-3xl" />
          <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[.2em] text-blue-300">Start a conversation</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight lg:text-6xl">Looking for a reliable supply partner?</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">Ceritakan kebutuhan supply perusahaan Anda. Tim MUC siap mendiskusikan kebutuhan produk dan pengadaan Anda.</p>
            </div>
            <a href="#contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-extrabold text-muc-navy transition hover:bg-blue-50">
              <MessageCircle size={18} /> Contact MUC <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
