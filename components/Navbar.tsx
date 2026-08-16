"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Services", "/services"],
    ["FAQ", "/faq"],
    ["Contact", "/contact"]
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black text-white">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="gold-bg grid h-11 w-11 place-items-center rounded-full text-xl font-black text-black">B</div>
          <div>
            <div className="font-black tracking-wide">BALCAD</div>
            <div className="text-[10px] tracking-[.28em] text-white/55">TRAVEL AGENCY</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <Link href={href} key={href} className="text-sm font-bold text-white/75 hover:text-white">{label}</Link>
          ))}
          <select aria-label="Language" className="rounded-full border border-white/20 bg-black px-3 py-2 text-sm">
            <option>EN</option>
            <option>SO</option>
            <option>AR</option>
          </select>
          <Link href="/request-service" className="gold-bg rounded-full px-5 py-3 text-sm font-black text-black">
            Request Service
          </Link>
        </nav>

        <button onClick={() => setOpen(!open)} className="rounded-lg border border-white/20 px-3 py-2 md:hidden" aria-label="Open menu">☰</button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black px-5 pb-5 md:hidden">
          {links.map(([label, href]) => (
            <Link href={href} key={href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4">
              {label}
            </Link>
          ))}
          <div className="mt-4">
            <select aria-label="Language" className="w-full rounded-xl border border-white/20 bg-black p-3">
              <option>English</option><option>Somali</option><option>Arabic</option>
            </select>
          </div>
          <Link href="/request-service" onClick={() => setOpen(false)} className="gold-bg mt-4 block rounded-full px-5 py-3 text-center font-black text-black">
            Request Service
          </Link>
        </div>
      )}
    </header>
  );
}