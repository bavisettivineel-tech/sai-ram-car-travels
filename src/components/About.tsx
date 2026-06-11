import { Section } from "./Section";
import { motion } from "framer-motion";
import { Star, Clock, Car, UserCheck, MapPin, ShieldCheck } from "lucide-react";

const cards = [
  { icon: Star,       title: "5★ Rated",     desc: "Perfect 5.0 rating on Google with 58 verified reviews" },
  { icon: Clock,      title: "24/7 Service",  desc: "Round the clock availability for all travel needs" },
  { icon: Car,        title: "AC Vehicles",   desc: "All cars fully air-conditioned and well maintained" },
  { icon: UserCheck,  title: "Pro Drivers",   desc: "Licensed, experienced and courteous chauffeurs" },
  { icon: MapPin,     title: "GPS Tracked",   desc: "Real-time vehicle tracking for your safety" },
  { icon: ShieldCheck,title: "Best Rates",    desc: "Transparent pricing with zero hidden charges" },
];

export function About() {
  return (
    <Section id="about" label="About Us" title="Pithapuram's Most Trusted Car Service" bgClass="bg-white">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-foreground/70 text-lg leading-relaxed mb-8">
            If you are searching for the best <strong>travels in Pithapuram</strong> or a premium <strong>cab service in Kakinada</strong>,
            Sai Ram Car Travels is your ultimate choice. As the leading <strong>near by car travels</strong> agency, we proudly serve
            passengers across Andhra Pradesh and Telangana. From local city drops and outstation trips
            to airport transfers, wedding cars, and tour packages — we deliver every journey with
            professionalism, comfort, and care. Whether you need a Sedan, Innova Crysta, Tempo Traveller,
            Maruti Ertiga, or Honda Amaze, our well-maintained AC fleet is available 24/7. So when you search for
            <strong> car travels near me</strong>, you can count on Sai Ram for safe, comfortable, and on-time rides.
          </p>
          <div className="border border-navy/15 bg-surface p-6 rounded-xl flex items-center gap-6 navy-glow">
            <div>
              <div className="font-display text-6xl text-navy leading-none">5.0</div>
              <div className="flex gap-1 mt-2 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
            </div>
            <div className="border-l border-navy/20 pl-6">
              <div className="font-display text-2xl text-foreground">58 Reviews</div>
              <div className="text-sm text-foreground/50 uppercase tracking-widest mt-1">
                Verified Google Reviews
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-white border border-navy/10 border-l-[3px] border-l-navy p-5 rounded-r-lg hover:-translate-y-1.5 transition-all duration-300 hover:navy-glow"
            >
              <c.icon className="text-navy mb-3" size={26} />
              <div className="font-display text-xl text-foreground mb-1">{c.title}</div>
              <div className="text-sm text-foreground/60 leading-relaxed">{c.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
