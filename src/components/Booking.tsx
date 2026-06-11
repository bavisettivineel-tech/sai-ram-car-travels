import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const initial = {
  name: "",
  phone: "",
  tripType: "Local City Drop",
  vehicle: "Sedan (4 Seater)",
  pickup: "",
  drop: "",
  date: "",
  time: "",
  notes: "",
};

const trips    = ["Local City Drop", "Outstation Trip", "Airport Transfer", "Tour Package", "Wedding / Event", "Corporate Travel", "Hourly Rental"];
const vehicles = ["Sedan (4 Seater)", "SUV Innova (7 Seater)", "Tempo Traveller (12-17 Seats)", "Luxury Car"];

export function Booking() {
  const [form, setForm] = useState(initial);

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const msg =
      `*New Booking — Sai Ram Car Travels*%0A` +
      `*Name:* ${form.name}%0A` +
      `*Phone:* ${form.phone}%0A` +
      `*Trip Type:* ${form.tripType}%0A` +
      `*Vehicle:* ${form.vehicle}%0A` +
      `*Pickup:* ${form.pickup}%0A` +
      `*Drop:* ${form.drop}%0A` +
      `*Date:* ${form.date}%0A` +
      `*Time:* ${form.time}%0A` +
      `*Notes:* ${form.notes}`;
    window.open(`https://wa.me/916303663911?text=${msg}`, "_blank");
  }

  const inputCls =
    "w-full bg-white border border-navy/20 focus:border-navy rounded-lg py-2.5 px-3 text-foreground placeholder:text-foreground/35 outline-none transition-colors focus:ring-2 focus:ring-navy/20 text-sm";
  const labelCls = "text-[11px] uppercase tracking-[0.2em] text-navy/70 mb-1.5 block font-semibold";

  return (
    <section
      id="booking"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(150deg, #0d2240 0%, #1a3a5c 50%, #2a5298 100%)" }}
    >
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="font-accent italic text-gold text-lg mb-3 tracking-wide">— Reserve Now —</div>
          <h2 className="font-display text-4xl md:text-5xl text-white">Reserve Your Ride Now</h2>
          <div className="mx-auto mt-4 w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="mt-4 text-white/60">Fill the form and we confirm within minutes.</p>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/95 backdrop-blur-sm border border-white/20 p-8 md:p-10 rounded-2xl shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>Your Name</label>
              <input required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Full Name" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Phone Number</label>
              <input required value={form.phone} onChange={(e) => update("phone", e.target.value)} type="tel" placeholder="+91 XXXXX XXXXX" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Trip Type</label>
              <select value={form.tripType} onChange={(e) => update("tripType", e.target.value)} className={inputCls}>
                {trips.map((t) => (<option key={t}>{t}</option>))}
              </select>
            </div>
            <div>
              <label className={labelCls}>Vehicle Type</label>
              <select value={form.vehicle} onChange={(e) => update("vehicle", e.target.value)} className={inputCls}>
                {vehicles.map((t) => (<option key={t}>{t}</option>))}
              </select>
            </div>
            <div>
              <label className={labelCls}>Pickup Location</label>
              <input value={form.pickup} onChange={(e) => update("pickup", e.target.value)} placeholder="From where?" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Drop Location</label>
              <input value={form.drop} onChange={(e) => update("drop", e.target.value)} placeholder="Where to?" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Travel Date</label>
              <input type="date" value={form.date} onChange={(e) => update("date", e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Pickup Time</label>
              <input type="time" value={form.time} onChange={(e) => update("time", e.target.value)} className={inputCls} />
            </div>
            <div className="md:col-span-2">
              <label className={labelCls}>Additional Notes</label>
              <textarea value={form.notes} onChange={(e) => update("notes", e.target.value)} rows={3} placeholder="Number of passengers, return trip, special requests" className={inputCls + " resize-none"} />
            </div>
          </div>

          <button
            type="submit"
            className="shimmer mt-8 w-full navy-gradient text-white font-bold uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 navy-glow-strong hover:opacity-90 transition-opacity"
          >
            <Send size={18} /> Send Booking via WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}
