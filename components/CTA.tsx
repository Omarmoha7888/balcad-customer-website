import Link from "next/link";

export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="dark rounded-[28px] p-8 md:p-14">
          <p className="gold text-sm font-black uppercase tracking-[.2em]">Start your journey</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black md:text-5xl">Tell us what you need. We’ll take it from there.</h2>
          <p className="mt-5 max-w-2xl leading-8 text-white/60">
            Submit a request and the agency team will review it before contacting you.
          </p>
          <Link href="/request-service" className="gold-bg mt-8 inline-block rounded-full px-7 py-4 font-black text-black">
            Request a Service
          </Link>
        </div>
      </div>
    </section>
  );
}