const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="شعار Digital Rize وكالة تسويق رقمي">
      <rect x="4" y="4" width="20" height="6" rx="2" fill="white" />
      <rect x="12" y="26" width="20" height="6" rx="2" fill="white" />
      <rect x="10" y="4" width="6" height="28" rx="2" fill="white" transform="rotate(0 10 4)"
        style={{ transform: "skewX(-20deg)", transformOrigin: "center" }} />
      <polygon points="28,26 34,29 28,32" fill="hsl(166, 56%, 56%)" />
    </svg>
    <span className="text-xl font-bold tracking-tight">
      <span className="text-foreground">Digital</span>
      <span className="text-primary"> Rize</span>
    </span>
  </div>
);

export default Logo;
