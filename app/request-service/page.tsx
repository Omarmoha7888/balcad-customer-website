"use client";

import { FormEvent, useState } from "react";

export default function RequestServicePage() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <section className="dark section">
        <div className="container">
          <div className="line mb-6" />
          <p className="gold text-sm font-bold uppercase tracking-[.2em]">Service request</p>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">Request a travel service.</h1>
          <p className="mt-6 max-w-2xl text-white/65">
            Send your request. An administrator will review it and the agency will contact you. There is no online payment.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <form onSubmit={submit} className="card space-y-5 p-6 md:p-9">
            {sent && (
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">
                Request submitted successfully in this front-end demo. Connect the form to the CRM/backend before production.
              </div>
            )}

            <div className="grid gap-5 md:grid-cols-2">
              <label className="font-bold">Full Name
                <input required name="fullName" className="mt-2 w-full rounded-xl border p-3 font-normal" />
              </label>
              <label className="font-bold">Phone Number
                <input required name="phone" className="mt-2 w-full rounded-xl border p-3 font-normal" />
              </label>
              <label className="font-bold">Email
                <input type="email" name="email" className="mt-2 w-full rounded-xl border p-3 font-normal" />
              </label>
              <label className="font-bold">Service
                <select name="service" className="mt-2 w-full rounded-xl border p-3 font-normal">
                  <option>Flight Ticketing</option>
                  <option>Visa Services</option>
                  <option>Hotel Booking</option>
                  <option>Airport & Ground Transport</option>
                  <option>Tour Package</option>
                  <option>Travel Documentation</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="font-bold">Destination
                <input name="destination" className="mt-2 w-full rounded-xl border p-3 font-normal" placeholder="Destination" />
              </label>
              <label className="font-bold">Travel Date
                <input type="date" name="travelDate" className="mt-2 w-full rounded-xl border p-3 font-normal" />
              </label>
            </div>

            <label className="block font-bold">Request Details
              <textarea required name="message" rows={7} className="mt-2 w-full rounded-xl border p-3 font-normal" placeholder="Tell us what you need..." />
            </label>

            <button type="submit" className="gold-bg w-full rounded-xl px-6 py-4 font-black text-black">
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}