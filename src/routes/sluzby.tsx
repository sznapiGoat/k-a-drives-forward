import { createFileRoute, Link } from "@tanstack/react-router";
import { Bike, Car, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/sluzby")({
  head: () => ({
    meta: [
      { title: "Služby — Skupiny AM, A1, A2, A, B | Autoškola Káča" },
      { name: "description", content: "Výcvik skupin AM, A, B, C a E. Motocykly, osobní i nákladní automobily, soupravy. Autoškola Káča Česká Třebová." },
      { property: "og:title", content: "Služby — Autoškola Káča" },
      { property: "og:description", content: "Skupiny AM, A, B, C, E a kondiční jízdy. Česká Třebová, Lanškroun, Sázava." },
    ],
  }),
  component: ServicesPage,
});

const motos = [
  { code: "AM", title: "Moped", desc: "Dvoukolová a tříkolová vozidla do 45 km/h.", age: "od 15 let", price: "Cena na dotaz", includes: "Teorie + jízdy" },
  { code: "A", title: "Motocykl", desc: "Plné oprávnění pro všechny motocykly bez omezení výkonu.", age: "od 24 let", price: "Cena na dotaz", includes: "Teorie + jízdy" },
  { code: "C", title: "Nákladní automobil", desc: "Výcvik pro řízení nákladních vozidel nad 3,5 t.", age: "od 18 let", price: "Cena na dotaz", includes: "Teorie + jízdy" },
  { code: "E", title: "Přípojné vozidlo", desc: "Výcvik pro jízdu se soupravami a přívěsy.", age: "od 18 let", price: "Cena na dotaz", includes: "Teorie + jízdy" },
];

function ServicesPage() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">

      {/* Header */}
      <div className="max-w-2xl mb-14">
        <span className="text-xs font-bold uppercase tracking-display text-primary">Služby</span>
        <h1 className="mt-3 text-5xl md:text-6xl font-extrabold leading-tight">
          Výcvik všech skupin pod jednou střechou.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Každý kurz zahrnuje teorii, jízdy i přípravu na zkoušky. Ceny jsou konečné — žádné skryté poplatky.
        </p>
      </div>

      {/* Group B — featured */}
      <div
        className="relative overflow-hidden bg-foreground text-background p-8 md:p-12 mb-6 flex flex-col md:flex-row md:items-center gap-8"
        style={{ borderRadius: "14px 44px 8px 32px" }}
      >
        <div aria-hidden className="absolute right-4 top-1/2 -translate-y-1/2 text-[200px] font-extrabold leading-none text-background/[0.04] select-none pointer-events-none">
          B
        </div>

        <div className="flex-1 relative z-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="px-2.5 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-display rounded-sm">
              Nejoblíbenější
            </span>
            <span className="text-sm text-background/60">od 17 let · i s mentorem</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <Car className="w-7 h-7 text-primary shrink-0" />
            <h2 className="text-2xl md:text-3xl font-extrabold">Skupina B — Osobní automobil</h2>
          </div>
          <p className="text-background/70 max-w-lg leading-relaxed">
            Naučíme vás řídit bezpečně a sebejistě. Auto do 3,5 t —
            tempo si určujete sami, bez spěchu a zbytečného stresu.
          </p>
          <p className="mt-3 text-xs uppercase tracking-display text-background/40">
            Zahrnuje: Teorie + 28 jízd
          </p>
        </div>

        <div className="md:text-right relative z-10 shrink-0">
          <div className="text-4xl md:text-5xl font-extrabold text-primary">16 900 Kč</div>
          <div className="text-sm text-background/50 mt-1 mb-5">kompletní kurz</div>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-colors"
          >
            Zapsat se <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Motorcycle groups — 2×2 grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {motos.map((g, i) => (
          <article
            key={g.code}
            className="relative overflow-hidden p-6 bg-background border-2 border-foreground hover:border-primary transition-colors duration-200 flex flex-col"
            style={{ borderRadius: i % 2 === 0 ? "20px 4px 20px 4px" : "4px 20px 4px 20px" }}
          >
            <div aria-hidden className="absolute right-3 top-2 text-7xl font-extrabold text-foreground/[0.05] leading-none select-none pointer-events-none">
              {g.code}
            </div>
            <Bike className="w-5 h-5 text-primary mb-3" />
            <div className="text-xs font-bold text-primary uppercase tracking-display mb-1">{g.code}</div>
            <h3 className="text-lg font-bold mb-1 leading-snug">{g.title}</h3>
            <p className="text-sm text-muted-foreground flex-1">{g.desc}</p>
            <div className="border-t border-border mt-4 pt-3">
              <div className="text-xl font-extrabold text-primary">{g.price}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{g.includes} · {g.age}</div>
            </div>
          </article>
        ))}
      </div>

      {/* Kondiční jízdy */}
      <div
        className="p-8 md:p-10 border-2 border-primary flex flex-col sm:flex-row sm:items-center gap-6"
        style={{ borderRadius: "40px 8px 32px 10px" }}
      >
        <div className="flex-1">
          <span className="text-xs font-bold uppercase tracking-display text-primary">Doplněk</span>
          <h3 className="text-2xl font-bold mt-2 mb-2">Kondiční jízdy</h3>
          <p className="text-muted-foreground leading-relaxed">
            Vracíte se po pauze za volant? Bojíte se parkování nebo dálnice?
            Domluvíme jednotlivé hodiny přesně na míru — bez závazků, bez soudu.
          </p>
        </div>
        <div className="shrink-0 sm:text-right">
          <div className="text-2xl font-extrabold text-primary">850 Kč / hod</div>
          <div className="text-xs text-muted-foreground mt-0.5 mb-4">bez výuky teorie</div>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background font-bold rounded-md text-sm hover:bg-foreground/90 transition-colors"
          >
            Domluvit jízdu <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Footnote to pricing page */}
      <p className="mt-8 text-sm text-muted-foreground text-center">
        Potřebujete víc detailů?{" "}
        <Link to="/cenik" className="text-primary font-semibold hover:underline">
          Prohlédněte si úplný ceník →
        </Link>
      </p>
    </section>
  );
}
