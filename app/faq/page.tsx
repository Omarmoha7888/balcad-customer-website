const faqs = [
  ["Can I request a service online?", "Yes. Submit the service request form and the agency team can review it."],
  ["Can I pay online?", "No. This website intentionally has no online payment method or displayed prices."],
  ["Who approves my request?", "The agency administrator reviews and approves or rejects service requests."],
  ["Will the agency contact me?", "Yes. After reviewing the request, the agency team can contact you for the next steps."],
  ["Can I communicate with staff?", "The final system is designed to support direct customer-to-assigned-staff chat, including photo sharing, through the CRM."],
  ["Can another staff member enter my chat?", "No. The assigned staff member handles the customer chat. A super admin can intervene when necessary."]
];

export default function FAQPage() {
  return (
    <main>
      <section className="dark section">
        <div className="container">
          <div className="line mb-6" />
          <p className="gold text-sm font-bold uppercase tracking-[.2em]">FAQ</p>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">Frequently asked questions.</h1>
        </div>
      </section>
      <section className="section">
        <div className="container max-w-4xl space-y-4">
          {faqs.map(([q, a]) => (
            <details className="card p-6" key={q}>
              <summary className="cursor-pointer text-lg font-black">{q}</summary>
              <p className="mt-4 leading-7 text-gray-600">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}