import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatedLogo } from "@/components/AnimatedLogo";

const links = [
  { to: "/", label: "Domů" },
  { to: "/o-nas", label: "O nás" },
  { to: "/sluzby", label: "Služby" },
  { to: "/cenik", label: "Ceník" },
  { to: "/recenze", label: "Recenze" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <AnimatedLogo size="sm" />
          <span className="font-extrabold text-lg tracking-display uppercase">Autoškola Káča</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary font-semibold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/kontakt"
            className="px-5 py-2 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90"
          >
            Přihlásit se
          </Link>
        </nav>
        <button
          type="button"
          className="md:hidden p-2 border border-border rounded"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <span className="block w-5 h-0.5 bg-foreground mb-1" />
          <span className="block w-5 h-0.5 bg-foreground mb-1" />
          <span className="block w-5 h-0.5 bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="py-1 text-foreground/80" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
