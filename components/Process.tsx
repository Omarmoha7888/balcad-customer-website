const steps = [
  ["01", "Submit request", "Tell us what travel service you need."],
  ["02", "Admin review", "The agency team reviews your request."],
  ["03", "Contact & agree", "The agency contacts you about the next steps and payment arrangements offline."],
  ["04", "Service handling", "Your assigned staff member handles the request."]
];

export default function Process() {
  return (
    <section className="dark section">
      <div className="container">
        <div className="line mb-5" />
        <p className="gold text-sm font-black uppercase tracking-[.2em]">How it works</p>
        <h2 className="mt-2 text-4xl font-black md:text-5xl">Simple request process.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {steps.map(([n, t, d]) => (
            <div className="glass rounded-2xl p-6" key={n}>
              <div className="gold text-sm font-black">{n}</div>
              <h3 className="mt-3 text-xl font-black">{t}</h3>
              <p className="mt-3 leading-7 text-white/60">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}