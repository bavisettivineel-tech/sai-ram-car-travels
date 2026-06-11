import { Section } from "./Section";
import { motion } from "framer-motion";
import { Building2, Route, Plane, Mountain, Heart, Briefcase } from "lucide-react";

const packages = [
  {
    icon: Building2,
    name: "Local City Drops",
    desc: "Comfortable rides within Pithapuram for all daily needs",
    includes: ["Point to point drops", "AC vehicles", "Affordable rates", "All city areas covered"],
    msg: "Hi, I need a Local Drop in Pithapuram",
  },
  {
    icon: Route,
    name: "Outstation Trips",
    desc: "Long-distance travel to any city in AP and Telangana",
    includes: ["Hyderabad · Vizag · Vijayawada", "Tirupati · Rajahmundry & more", "One way & round trips", "Night driving available"],
    msg: "Hi, I need an Outstation Trip from Pithapuram",
    featured: true,
  },
  {
    icon: Plane,
    name: "Airport Transfers",
    desc: "Stress-free pickups & drops to Rajahmundry and Vizag airports",
    includes: ["Flight tracking", "On-time guarantee", "Meet & greet service", "24/7 availability"],
    msg: "Hi, I need an Airport Transfer from Pithapuram",
  },
  {
    icon: Mountain,
    name: "Tour Packages",
    desc: "Explore Andhra's best destinations with comfortable travel",
    includes: ["Araku Valley · Borra Caves", "Tirupati · Srisailam", "Driver-guide option", "Custom itineraries"],
    msg: "Hi, I need a Tour Package from Pithapuram",
  },
  {
    icon: Heart,
    name: "Wedding & Events",
    desc: "Make your special day memorable with premium decorated cars",
    includes: ["Decorated luxury cars", "Fleet bookings", "Baraat & procession", "Guest shuttle service"],
    msg: "Hi, I need Wedding Car Service from Pithapuram",
  },
  {
    icon: Briefcase,
    name: "Corporate Travel",
    desc: "Reliable executive transport for businesses and professionals",
    includes: ["Monthly packages", "Office cab services", "Executive fleet", "Invoice billing"],
    msg: "Hi, I need Corporate Travel Service from Pithapuram",
  },
];

export function Packages() {
  return (
    <Section
      id="packages"
      label="Packages"
      title="Every Journey Covered"
      subtitle="From local city rides to customized outstation tour packages, we offer the best travels in Pithapuram and premier cab service in Kakinada. Reliable, affordable, and available 24/7."
      bgClass="bg-white"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((p, i) => {
          const link = `https://wa.me/916303663911?text=${encodeURIComponent(p.msg)}`;
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className={`group relative bg-white border rounded-xl p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                p.featured
                  ? "border-navy navy-glow-strong ring-1 ring-navy/20"
                  : "border-navy/10 hover:navy-glow"
              }`}
            >
              {p.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 navy-gradient text-white text-[10px] uppercase tracking-widest font-bold rounded-full">
                  Most Popular
                </div>
              )}
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 ${
                p.featured ? "navy-gradient" : "bg-surface border border-navy/15"
              }`}>
                <p.icon className={p.featured ? "text-white" : "text-navy"} size={26} />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-2">{p.name}</h3>
              <p className="text-sm text-foreground/60 mb-5">{p.desc}</p>
              <ul className="space-y-2 mb-6">
                {p.includes.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm text-foreground/75">
                    <span className="text-navy mt-1.5 inline-block w-1.5 h-1.5 rotate-45 bg-navy flex-shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`shimmer block text-center font-bold uppercase tracking-widest py-3 text-sm rounded-lg transition-all ${
                  p.featured
                    ? "navy-gradient text-white"
                    : "border-2 border-navy text-navy hover:navy-gradient hover:text-white"
                }`}
              >
                Book on WhatsApp
              </a>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
