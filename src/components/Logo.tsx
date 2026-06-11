export function Logo({ size = 1 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3" style={{ transform: `scale(${size})`, transformOrigin: "left center" }}>
      <svg width="36" height="36" viewBox="0 0 36 36">
        <defs>
          <linearGradient id="logoNavy" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2a5298" />
            <stop offset="50%" stopColor="#1a3a5c" />
            <stop offset="100%" stopColor="#0d2240" />
          </linearGradient>
          <linearGradient id="logoGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e8b84b" />
            <stop offset="100%" stopColor="#c9932a" />
          </linearGradient>
        </defs>
        <path
          d="M6 22 L10 10 L14 18 L18 6 L22 18 L26 10 L30 22 Z"
          fill="url(#logoNavy)"
          stroke="url(#logoNavy)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="10" r="1.5" fill="url(#logoGold)" />
        <circle cx="18" cy="6"  r="2"   fill="url(#logoGold)" />
        <circle cx="26" cy="10" r="1.5" fill="url(#logoGold)" />
        <rect x="6" y="24" width="24" height="2" fill="url(#logoGold)" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display font-black text-navy text-lg tracking-wide">SAI RAM</span>
        <span className="font-body text-[10px] tracking-[0.4em] text-navy/60">CAR TRAVELS</span>
      </div>
    </div>
  );
}
