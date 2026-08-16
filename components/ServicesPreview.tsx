import Link from "next/link";

const services = [
  ["✈️", "Flight Tickets", "Request flight booking support."],
  ["🛂", "Visa Services", "Request visa-related assistance."],
  ["🏨", "Hotels", "Request accommodation arrangements."],
  ["🧳", "Tour Packages", "Request organized travel experiences."]
];

export default function ServicesPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="line mb-5" />
            <p className="gold text-sm font-black uppercase tracking-[.2em]">Our services</p>
            <h2 className="mt-2 text-4xl font-black md:text-5xl">Travel made simpler.</h2>
          </div>
          <Link href="/services" className="font-bold underline decoration-[var(--gold)] decoration-2 underline-offset-8">View all services</Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([icon, title, text]) => (
            <div className="card p-7" key={title}>
              <div className="text-4xl">{icon}</div>
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-2 leading-7 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}