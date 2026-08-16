import Link from "next/link";

const services = [
  ["✈️", "Flight Ticketing", "Request flight booking and itinerary support."],
  ["🛂", "Visa Services", "Request assistance with visa-related travel services."],
  ["🏨", "Hotel Booking", "Request hotel and accommodation arrangements."],
  ["🚐", "Airport & Ground Transport", "Request airport transfers and transportation."],
  ["🧳", "Tour Packages", "Request organized or customized travel packages."],
  ["📋", "Travel Documentation", "Request support with travel documentation."],
  ["🌍", "International Travel", "Travel planning and international journey support."],
  ["🏝️", "Local & Regional Travel", "Support for local and regional trips."],
  ["💬", "Customer Support", "Direct communication with the assigned agency staff."],
  ["📸", "Document / Photo Sharing", "Send relevant images or documents through chat when enabled."],
  ["🗓️", "Travel Planning", "Discuss dates, destinations and travel requirements."],
  ["➕", "Other Travel Services", "Tell the agency what other travel service you need."]
];

export default function ServicesPage() {
  return (
    <main>
      <section className="dark section">
        <div className="container">
          <div className="line mb-6" />
          <p className="gold text-sm font-bold uppercase tracking-[.2em]">Services</p>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">Travel services in one place.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Choose a service or submit your own request. The team reviews the request before confirming the next step.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([icon, title, text]) => (
            <div className="card p-7" key={title}>
              <div className="text-4xl">{icon}</div>
              <h2 className="mt-5 text-xl font-black">{title}</h2>
              <p className="mt-3 leading-7 text-gray-600">{text}</p>
              <Link href="/request-service" className="gold mt-6 inline-block font-bold">Request →</Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}