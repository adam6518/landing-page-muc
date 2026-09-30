"use client";

import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const links = [
  ["About", "#about"],
  ["Products", "#products"],
  ["Why MUC", "#why-muc"],
  ["Projects", "#projects"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="container-x flex h-[76px] items-center justify-between">
        <a href="#home" aria-label="PT. Mitra Utama Cemerlang" className="flex items-center">
          <Image src="/images/brand/muc-logo.png" alt="MUC" width={86} height={52} className="h-11 w-auto object-contain" priority />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-[13px] font-semibold text-slate-600 transition hover:text-muc-blue">{label}</a>
          ))}
        </nav>

        <a href="#contact" className="hidden items-center gap-2 rounded-full bg-muc-navy px-5 py-3 text-[13px] font-bold text-white transition hover:bg-muc-blue md:flex">
          Contact MUC <ArrowUpRight size={15} />
        </a>

        <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 md:hidden" aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 md:hidden">
          <div className="container-x flex flex-col gap-2">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">{label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-muc-navy px-4 py-3 text-sm font-bold text-white">Contact MUC <ArrowUpRight size={15} /></a>
          </div>
        </div>
      )}
    </header>
  );
}
