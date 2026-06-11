import { motion } from "framer-motion";
import { Section } from "./Section";
import sedanImg   from "@/assets/car-sedan.jpg";
import innovaImg  from "@/assets/car-innova.jpg";
import tempoImg   from "@/assets/car-tempo.jpg";
import ertigaImg  from "@/assets/car-ertiga.jpg";
import amazeImg   from "@/assets/car-amaze.jpg";

interface CarItem {
  type: string;
  name: string;
  models: string;
  seats: string;
  features: string[];
  price: string;
  image: string;
  whatsapp: string;
  featured?: boolean;
}

const cars: CarItem[] = [
  {
    type: "Economy Class",
    name: "Sedan",
    models: "Toyota Etios / Dzire",
    seats: "4 Seater",
    features: ["AC", "Music System", "GPS"],
    price: "₹12/km",
    image: sedanImg,
    whatsapp: "Hi, I want to book a Sedan from Sai Ram Car Travels",
  },
  {
    type: "Premium Class",
    name: "SUV — Innova Crysta",
    models: "Toyota Innova Crysta",
    seats: "7 Seater",
    features: ["AC", "Push-back Seats", "Music", "GPS"],
    price: "₹16/km",
    image: innovaImg,
    whatsapp: "Hi, I want to book an Innova Crysta from Sai Ram Car Travels",
    featured: true,
  },
  {
    type: "Group Travel",
    name: "Tempo Traveller",
    models: "Force Traveller 12–17 Seater",
    seats: "12–17 Seater",
    features: ["AC", "Push-back Seats", "Music", "Luggage Space"],
    price: "₹22/km",
    image: tempoImg,
    whatsapp: "Hi, I want to book a Tempo Traveller from Sai Ram Car Travels",
  },
  {
    type: "Family MPV",
    name: "Maruti Ertiga",
    models: "Maruti Suzuki Ertiga",
    seats: "6+1 Seater",
    features: ["AC", "Push-back Seats", "Music", "Boot Space"],
    price: "₹14/km",
    image: ertigaImg,
    whatsapp: "Hi, I want to book a Maruti Ertiga from Sai Ram Car Travels",
  },
  {
    type: "Compact Sedan",
    name: "Honda Amaze",
    models: "Honda Amaze",
    seats: "4 Seater",
    features: ["AC", "Music System", "Spacious Boot"],
    price: "₹12/km",
    image: amazeImg,
    whatsapp: "Hi, I want to book a Honda Amaze from Sai Ram Car Travels",
  },
];

export function Fleet() {
  return (
    <Section id="fleet" label="Our Fleet" title="Vehicles for Every Journey" bgClass="bg-surface">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {cars.map((car, i) => {
          const link = `https://wa.me/916303663911?text=${encodeURIComponent(car.whatsapp)}`;
          return (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:navy-glow-strong ${
                car.featured ? "border-navy navy-glow" : "border-navy/10"
              }`}
            >
              {car.featured && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 navy-gradient text-white text-[10px] uppercase tracking-widest font-bold rounded-full">
                  Most Popular
                </div>
              )}
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-surface">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.3em] text-white/80 font-bold">
                  {car.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-display text-xl text-foreground">{car.name}</h3>
                  <span className="font-display text-lg text-navy font-black">{car.price}</span>
                </div>
                <p className="text-sm text-foreground/50 mb-1">{car.models}</p>
                <p className="text-sm text-navy/80 font-semibold mb-4">{car.seats}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {car.features.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1 bg-surface text-navy/80 text-xs rounded-full border border-navy/10 font-medium"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`shimmer block text-center font-bold uppercase tracking-widest py-3 text-sm rounded-lg transition-all ${
                    car.featured
                      ? "navy-gradient text-white navy-glow"
                      : "border-2 border-navy text-navy hover:navy-gradient hover:text-white"
                  }`}
                >
                  Book on WhatsApp
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
