import { Section } from "./Section";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const routes = [
  { to: "Hyderabad",             distance: "~500 km",    time: "~8 hrs" },
  { to: "Visakhapatnam",         distance: "~150 km",    time: "~3 hrs" },
  { to: "Vijayawada",            distance: "~220 km",    time: "~4 hrs" },
  { to: "Tirupati",              distance: "~530 km",    time: "~9 hrs" },
  { to: "Rajahmundry",           distance: "~65 km",     time: "~1.5 hr" },
  { to: "Araku / Vizag",         distance: "~270 km",    time: "~5.5 hrs" },
  { to: "Srisailam",             distance: "~520 km",    time: "~9 hrs" },
  { to: "Borra Caves",           distance: "~290 km",    time: "~6 hrs" },
  { to: "Mothugudem",            distance: "~180 km",    time: "~4 hrs" },
  { to: "Lambasingi / Vanajangi",distance: "~220 km",    time: "~5 hrs" },
  { to: "Annavaram",             distance: "~80 km",     time: "~1.5 hrs" },
  { to: "Pancharamalu (5 Temples)",distance: "Custom Tour",time: "1–2 Days" },
  { to: "Antarvedi",             distance: "~120 km",    time: "~2.5 hrs" },
  { to: "Bhadrachalam",          distance: "~190 km",    time: "~4 hrs" },
  { to: "Maredumilli",           distance: "~120 km",    time: "~3 hrs" },
  { to: "All AP & Telangana",    distance: "Any Distance",time: "Custom Quote" },
];

export function Routes() {
  return (
    <Section
      id="routes"
      label="Destinations"
      title="Where We Take You"
      subtitle="Looking for reliable travels in Pithapuram or travels in Kakinada for outstation trips? Sai Ram Car Travels provides comfortable cabs and clean vehicles to all major cities and tourist spots across Andhra Pradesh & Telangana."
      bgClass="bg-surface"
    >
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center gap-2 px-6 py-3 navy-gradient text-white font-bold uppercase tracking-widest text-sm rounded-full navy-glow">
          <MapPin size={16} />
          Pithapuram · Your Starting Point
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {routes.map((r, i) => (
          <motion.div
            key={r.to}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="group relative bg-white border border-navy/10 rounded-xl p-5 hover:border-navy/40 hover:-translate-y-1 hover:navy-glow transition-all duration-300 overflow-hidden"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">From Pithapuram</div>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-8 h-8 rounded-full navy-gradient flex items-center justify-center flex-shrink-0">
                <ArrowRight size={14} className="text-white" />
              </div>
              <h3 className="font-display text-xl text-foreground">{r.to}</h3>
            </div>
            <div className="mt-3 flex items-center gap-4 text-sm text-foreground/55">
              <span>{r.distance}</span>
              <span className="w-1 h-1 rounded-full bg-navy/30" />
              <span>{r.time}</span>
            </div>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-navy to-navy-light group-hover:w-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
