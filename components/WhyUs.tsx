const points = [
  ["Gold & Black", "A premium visual identity built around your requested Gold & Black theme."],
  ["Three languages", "The customer experience is prepared for English, Somali and Arabic."],
  ["No online payment", "No prices or online payment methods are shown on the customer website."],
  ["CRM-ready", "The request flow is designed to connect to the separate administrator CRM."]
];

export default function WhyUs() {
  return (
    <section className="section">
      <div className="container grid gap-12 lg:grid-cols-2">
        <div>
          <div className="line mb-5" />
          <p className="gold text-sm font-black uppercase tracking-[.2em]">Why Balcad</p>
          <h2 className="mt-2 text-4xl font-black md:text-5xl">A professional travel request experience.</h2>
          <p className="mt-6 max-w-xl leading-8 text-gray-600">
            The customer website focuses on requesting services and communicating with the agency. The powerful administration and CRM functions belong to the separate admin website.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {points.map(([title, text]) => (
            <div className="card p-6" key={title}>
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}