import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black py-14 text-white">
      <div className="container grid gap-10 md:grid-cols-3">
        <div>
          <div className="text-2xl font-black">BALCAD</div>
          <div className="gold text-xs font-bold tracking-[.3em]">TRAVEL AGENCY</div>
          <p className="mt-5 max-w-md leading-7 text-white/55">
            Professional travel service requests and customer support.
          </p>
        </div>
        <div>
          <h3 className="font-black">Explore</h3>
          <div className="mt-4 space-y-3 text-white/60">
            <Link className="block" href="/about">About</Link>
            <Link className="block" href="/services">Services</Link>
            <Link className="block" href="/faq">FAQ</Link>
            <Link className="block" href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h3 className="font-black">Contact</h3>
          <p className="mt-4 text-white/60">612483838</p>
          <p className="text-white/60">612141414</p>
          <p className="mt-2 text-white/60">balcadtravel@gmail.com</p>
        </div>
      </div>
      <div className="container mt-12 border-t border-white/10 pt-6 text-sm text-white/40">
        © {new Date().getFullYear()} Balcad Travel Agency. All rights reserved.
      </div>
    </footer>
  );
}