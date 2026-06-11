import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { label: "Fleet",    href: "#fleet" },
  { label: "Packages", href: "#packages" },
  { label: "Routes",   href: "#routes" },
  { label: "Why Us",   href: "#why" },
  { label: "Contact",  href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-navy/10 py-3 shadow-sm navy-glow"
            : "bg-white/80 backdrop-blur-md py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          <a href="#hero"><Logo /></a>
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-body uppercase tracking-widest text-foreground/70 hover:text-navy transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-navy group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#booking"
              className="shimmer px-6 py-2.5 navy-gradient text-white uppercase tracking-widest text-xs font-bold clip-parallelogram navy-glow hover:navy-glow-strong transition-all"
            >
              Book Now
            </a>
          </nav>
          <button
            className="lg:hidden text-navy p-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col">
          <div className="flex items-center justify-between p-5 border-b border-navy/10">
            <Logo />
            <button onClick={() => setOpen(false)} className="text-navy" aria-label="Close menu">
              <X size={32} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl text-navy hover:text-navy-light transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-4 px-8 py-3 navy-gradient text-white font-bold uppercase tracking-widest clip-parallelogram"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
