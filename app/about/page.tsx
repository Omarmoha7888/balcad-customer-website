import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <section className="dark section">
        <div className="container">
          <div className="line mb-6" />
          <p className="gold text-sm font-bold uppercase tracking-[.2em]">About us</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black md:text-6xl">Balcad Travel Agency</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            A customer-focused travel agency website where customers can request services and communicate with the agency team.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-7 md:grid-cols-2">
          <div className="card p-8">
            <h2 className="text-3xl font-black">Our purpose</h2>
            <p className="mt-4 leading-8 text-gray-600">
              Make travel service requests simple and organized. Customers submit a request, the team reviews it, and the agency contacts the customer for the next steps.
            </p>
          </div>
          <div className="card p-8">
            <h2 className="text-3xl font-black">No online payment</h2>
            <p className="mt-4 leading-8 text-gray-600">
              This customer website does not collect online payments or display service prices. Payment arrangements are handled offline after the request is reviewed.
            </p>
          </div>
        </div>
      </section>
      <section className="dark section text-center">
        <div className="container">
          <h2 className="text-3xl font-black md:text-4xl">Need a travel service?</h2>
          <Link href="/request-service" className="gold-bg mt-7 inline-block rounded-full px-7 py-3 font-bold text-black">
            Request Service
          </Link>
        </div>
      </section>
    </main>
  );
}