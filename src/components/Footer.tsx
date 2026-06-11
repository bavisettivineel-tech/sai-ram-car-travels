import { Logo } from "./Logo";
import { Phone, MessageCircle, Star } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="pt-16 pb-6 relative"
      style={{ background: "linear-gradient(150deg, #0d2240 0%, #1a3a5c 60%, #2a5298 100%)" }}
    >
      {/* SEO keyword block */}
      <div className="sr-only" aria-hidden="true">
        Sai Ram Car Travels — best car rental service in Pithapuram, Kakinada, Andhra Pradesh.
        Book outstation cab from Pithapuram to Hyderabad, Visakhapatnam, Vijayawada, Tirupati, Rajahmundry.
        Toyota Innova Crysta hire Pithapuram. Tempo Traveller booking Pithapuram. Sedan taxi Pithapuram.
        Airport transfer Rajahmundry airport. Airport cab Vizag airport. Wedding car rental Pithapuram.
        Corporate cab service Pithapuram. 24 hour taxi Pithapuram. Local cab Pithapuram. Tour packages Pithapuram.
      </div>

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            {/* Logo on dark background — use white text variant */}
            <div className="flex items-center gap-3">
              <svg width="36" height="36" viewBox="0 0 36 36">
                <defs>
                  <linearGradient id="fLogoGold" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#e8b84b" />
                    <stop offset="100%" stopColor="#c9932a" />
                  </linearGradient>
                </defs>
                <path d="M6 22 L10 10 L14 18 L18 6 L22 18 L26 10 L30 22 Z" fill="white" strokeWidth="1" strokeLinejoin="round" />
                <circle cx="10" cy="10" r="1.5" fill="url(#fLogoGold)" />
                <circle cx="18" cy="6"  r="2"   fill="url(#fLogoGold)" />
                <circle cx="26" cy="10" r="1.5" fill="url(#fLogoGold)" />
                <rect x="6" y="24" width="24" height="2" fill="url(#fLogoGold)" />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="font-display font-black text-white text-lg tracking-wide">SAI RAM</span>
                <span className="font-body text-[10px] tracking-[0.4em] text-white/55">CAR TRAVELS</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/50 leading-relaxed">
              Premium car rental services in Pithapuram, Andhra Pradesh — serving passengers across AP and Telangana with 5-star care.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://wa.me/916303663911" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-navy transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="tel:+916303663911"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-navy transition-colors">
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/50">
              {["Local City Drops", "Outstation Trips", "Airport Transfers", "Tour Packages", "Wedding & Events", "Corporate Travel"].map((s) => (
                <li key={s} className="hover:text-white cursor-pointer transition-colors">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold mb-4">Our Fleet</h4>
            <ul className="space-y-2 text-sm text-white/50">
              {["Sedan — Etios / Dzire", "Innova Crysta", "Tempo Traveller", "Fortuner / Luxury", "Camry", "Custom Fleet"].map((s) => (
                <li key={s} className="hover:text-white cursor-pointer transition-colors">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/50">
              {[["Fleet", "#fleet"], ["Packages", "#packages"], ["Routes", "#routes"], ["Why Us", "#why"], ["Book Now", "#booking"], ["Contact", "#contact"]].map(([l, h]) => (
                <li key={l}><a href={h} className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/35">
          <div>© 2026 Sai Ram Car Travels, Pithapuram. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-gold"><Star size={12} fill="currentColor" /> 5.0 · 58 Reviews</span>
            <a href="tel:+916303663911" className="text-gold hover:text-gold-light transition-colors">+91 63036 63911</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
