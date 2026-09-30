import { MapPinned, Route, ShieldCheck } from "lucide-react";

export default function Coverage() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container-x overflow-hidden rounded-[36px] bg-muc-soft p-8 lg:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_.9fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-muc-red">Operational Coverage</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-muc-navy lg:text-5xl">Serving business needs across Jakarta & Kalimantan.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muc-muted">MUC saat ini melayani kebutuhan perusahaan di wilayah Jakarta dan Kalimantan, dengan cakupan yang terus diperkuat seiring perkembangan kerja sama.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl bg-white p-5"><MapPinned className="text-muc-blue" size={22} /><p className="mt-3 font-display font-extrabold text-muc-navy">Jakarta</p><p className="mt-1 text-xs text-muc-muted">Office & supply operations</p></div>
            <div className="rounded-2xl bg-white p-5"><Route className="text-muc-red" size={22} /><p className="mt-3 font-display font-extrabold text-muc-navy">Kalimantan</p><p className="mt-1 text-xs text-muc-muted">Regional supply coverage</p></div>
            <div className="rounded-2xl bg-muc-navy p-5 text-white"><ShieldCheck size={22} /><p className="mt-3 font-display font-extrabold">Reliable delivery focus</p><p className="mt-1 text-xs text-slate-300">Built around business continuity</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
