import { Section } from "./Section";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const cards = [
  { icon: Phone,         label: "Phone / Call",   value: "+91 63036 63911",                  link: "tel:+916303663911" },
  { icon: MessageCircle, label: "WhatsApp",        value: "+91 63036 63911",                  link: "https://wa.me/916303663911" },
  { icon: MapPin,        label: "Address",         value: "Pithapuram, Andhra Pradesh 533450" },
  { icon: Clock,         label: "Working Hours",   value: "Open 24 Hours · 7 Days a Week",    highlight: true },
];

export function Contact() {
  return (
    <Section id="contact" label="Get In Touch" title="Reach Out To Us" bgClass="bg-white">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {cards.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.link || undefined}
              target={c.link?.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`block bg-surface border border-navy/10 rounded-xl p-5 hover:border-navy/40 hover:-translate-y-0.5 hover:navy-glow transition-all duration-300 ${
                c.link ? "cursor-pointer" : "cursor-default"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full navy-gradient flex items-center justify-center flex-shrink-0">
                  <c.icon className="text-white" size={22} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/45">{c.label}</div>
                  <div className={`mt-1 font-display text-xl ${c.highlight ? "text-navy" : "text-foreground"}`}>
                    {c.value}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border border-navy/15 rounded-2xl overflow-hidden h-full min-h-[400px] navy-glow"
        >
          <iframe
            title="Sai Ram Car Travels — Pithapuram"
            src="https://www.google.com/maps?q=Pithapuram,+Andhra+Pradesh+533450&output=embed"
            className="w-full h-full min-h-[400px]"
            style={{ filter: "grayscale(0.2)" }}
            loading="lazy"
          />
        </motion.div>
      </div>
    </Section>
  );
}
