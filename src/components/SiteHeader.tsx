import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
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
  const [showBar, setShowBar] = useState(false);
  const prevY = useRef(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // Show the slim bar only when scrolling UP after passing the fold
      setShowBar(y > 480 && y < prevY.current);
      prevY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Slim scroll-up conversion bar */}
      <AnimatePresence>
        {showBar && (
          <motion.div
            initial={{ y: reduced ? 0 : -52 }}
            animate={{ y: 0 }}
            exit={{ y: reduced ? 0 : -52 }}
            transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 340, damping: 30 }}
            className="fixed top-0 inset-x-0 z-50 bg-primary text-primary-foreground px-6 py-2.5 flex items-center justify-between shadow-lg"
          >
            <span className="text-sm font-medium hidden sm:block">
              Zbývají poslední místa pro letní kurz!
            </span>
            <span className="text-sm font-medium sm:hidden">Volná místa — kurz 2025</span>
            <Link
              to="/kontakt"
              className="ml-4 shrink-0 px-4 py-1.5 bg-primary-foreground text-primary text-sm font-bold rounded hover:opacity-90 transition-opacity"
            >
              Zajistit místo →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main sticky header */}
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
              Zajistit místo
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

      {/* Mobile floating phone button */}
      <motion.a
        href="tel:+420739238725"
        aria-label="Zavolat Autoškola Káča"
        className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-foreground"
        initial={reduced ? false : { scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={reduced ? { duration: 0 } : { delay: 1.2, type: "spring", stiffness: 260, damping: 22 }}
        whileHover={reduced ? undefined : { scale: 1.12 }}
        whileTap={reduced ? undefined : { scale: 0.9 }}
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </>
  );
}
