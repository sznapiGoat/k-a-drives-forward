import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/sluzby")({
  head: () => ({
    meta: [
      { title: "Služby — Skupiny AM, A1, A2, A, B | Autoškola Káča" },
      { name: "description", content: "Výcvik skupin AM, A1, A2, A, B a kondiční jízdy. Autoškola Káča Česká Třebová." },
      { property: "og:title", content: "Služby — Autoškola Káča" },
      { property: "og:description", content: "Skupiny AM, A1, A2, A, B a kondiční jízdy v České Třebové." },
    ],
  }),
  component: ServicesPage,
});

const groups = [
  { code: "AM", title: "Moped", desc: "Dvoukolová a tříkolová vozidla do 45 km/h. Od 15 let.", age: "15+" },
  { code: "A1", title: "Lehký motocykl", desc: "Motocykly do 125 ccm a 11 kW. Od 16 let.", age: "16+" },
  { code: "A2", title: "Středně silný motocykl", desc: "Motocykly do 35 kW. Od 18 let.", age: "18+" },
  { code: "A", title: "Motocykl bez omezení", desc: "Plné oprávnění pro motocykly. Od 24 let.", age: "24+" },
  { code: "B", title: "Osobní automobil", desc: "Nejoblíbenější kurz. Auto do 3,5 t. Od 17 let s mentorem.", age: "17+" },
];

function ServicesPage() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="max-w-2xl mb-16">
        <span className="text-xs font-bold uppercase tracking-display text-primary">Služby</span>
        <h1 className="mt-3 text-5xl md:text-6xl font-extrabold leading-tight">
          Výcvik všech skupin pod jednou střechou.
        </h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g, i) => (
          <article
            key={g.code}
            className={`p-7 border-2 border-foreground bg-background ${i % 2 === 0 ? "md:translate-y-0" : "md:translate-y-4"}`}
            style={{ borderRadius: i % 3 === 0 ? "20px 4px 20px 4px" : i % 3 === 1 ? "4px 20px 4px 20px" : "16px 16px 4px 16px" }}
          >
            <div className="flex items-baseline justify-between mb-4">
              <span className="text-5xl font-extrabold text-primary tracking-display">{g.code}</span>
              <span className="text-xs font-bold uppercase tracking-display text-muted-foreground">{g.age}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{g.title}</h3>
            <p className="text-sm text-muted-foreground">{g.desc}</p>
          </article>
        ))}

        <article className="p-7 bg-primary text-primary-foreground md:translate-y-4" style={{ borderRadius: "4px 20px 4px 20px" }}>
          <span className="text-xs font-bold uppercase tracking-display opacity-80">Doplněk</span>
          <h3 className="text-2xl font-bold mt-3 mb-2">Kondiční jízdy</h3>
          <p className="text-sm opacity-90 mb-6">
            Vrátíte se po pauze za volant? Bojíte se parkování nebo dálnice?
            Domluvíme jednotlivé hodiny přesně na míru.
          </p>
          <Link to="/kontakt" className="inline-block px-5 py-2 bg-background text-foreground font-bold rounded-md text-sm">
            Domluvit jízdu
          </Link>
        </article>
      </div>
    </section>
  );
}
