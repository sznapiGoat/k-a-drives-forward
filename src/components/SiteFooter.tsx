import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-extrabold tracking-display uppercase text-lg">Autoškola Káča</div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Rodinná autoškola v České Třebové. Trpělivě, lidsky, s jistotou za volantem.
          </p>
        </div>
        <div className="text-sm">
          <div className="font-semibold mb-2">Kontakt</div>
          <p className="text-muted-foreground">Staré náměstí 21, Česká Třebová</p>
          <p className="text-muted-foreground">Tel: <a href="tel:+420739238725" className="text-primary">739 238 725</a></p>
          <p className="text-muted-foreground">E-mail: <a href="mailto:autoskolakaca@seznam.cz" className="text-primary">autoskolakaca@seznam.cz</a></p>
          <p className="text-muted-foreground">Úřední hodiny: Čtvrtek 16–17h</p>
        </div>
        <div className="text-sm">
          <div className="font-semibold mb-2">Navigace</div>
          <ul className="space-y-1 text-muted-foreground">
            <li><Link to="/o-nas" className="hover:text-primary">O nás</Link></li>
            <li><Link to="/sluzby" className="hover:text-primary">Služby</Link></li>
            <li><Link to="/cenik" className="hover:text-primary">Ceník</Link></li>
            <li><Link to="/kontakt" className="hover:text-primary">Kontakt</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Autoškola Káča · Vyrobeno s láskou v České Třebové
      </div>
    </footer>
  );
}
