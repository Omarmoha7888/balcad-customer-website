import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero text-white">
      <div className="container py-20">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="line" />
            <span className="gold text-sm font-black uppercase tracking-[.2em]">Balcad Travel Agency</span>
          </div>
          <h1 className="text-5xl font-black leading-[1.04] md:text-7xl">
            Your journey.
            <br />
            <span className="gold">Our support.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
            Request flights, visas, hotels, transport, tours and other travel services from Balcad Travel Agency.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/request-service" className="gold-bg rounded-full px-7 py-4 font-black text-black">
              Request a Service
            </Link>
            <Link href="/services" className="rounded-full border border-white/30 px-7 py-4 font-bold">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}