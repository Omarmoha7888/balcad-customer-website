import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      <section className="dark section">
        <div className="container">
          <div className="line mb-6" />
          <p className="gold text-sm font-bold uppercase tracking-[.2em]">Contact</p>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">Contact Balcad Travel Agency.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-7 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black">Reach our team</h2>
            <p className="mt-4 leading-8 text-gray-600">
              Contact us directly or submit a service request through the website.
            </p>
            <div className="mt-8 space-y-4">
              <div className="card p-6"><p className="text-sm font-bold text-gray-500">PHONE</p><p className="mt-2 text-xl font-black">612483838 / 612141414</p></div>
              <div className="card p-6"><p className="text-sm font-bold text-gray-500">EMAIL</p><p className="mt-2 text-xl font-black">balcadtravel@gmail.com</p></div>
            </div>
          </div>
          <div className="card p-8">
            <h2 className="text-2xl font-black">Need a service?</h2>
            <p className="mt-3 leading-7 text-gray-600">Send your request and wait for the agency team to contact you.</p>
            <Link href="/request-service" className="gold-bg mt-7 inline-block rounded-full px-7 py-3 font-bold text-black">
              Request Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}