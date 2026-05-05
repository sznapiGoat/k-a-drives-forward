import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/cenik")({
  head: () => ({
    meta: [
      { title: "Ceník — Autoškola Káča Česká Třebová" },
      { name: "description", content: "Ceník výcviku skupin AM, A1, A2, A, B a kondičních jízd. Bez skrytých poplatků." },
      { property: "og:title", content: "Ceník — Autoškola Káča" },
      { property: "og:description", content: "Transparentní ceny výcviku v České Třebové." },
    ],
  }),
  component: PricingPage,
});

const rows = [
  { cat: "AM — Moped", price: "6 500 Kč", note: "Teorie + 7 jízd" },
  { cat: "A1 — do 125 ccm", price: "11 900 Kč", note: "Teorie + 13 jízd" },
  { cat: "A2 — do 35 kW", price: "13 500 Kč", note: "Teorie + 13 jízd" },
  { cat: "A — bez omezení", price: "14 900 Kč", note: "Teorie + 13 jízd" },
  { cat: "B — Osobní automobil", price: "16 900 Kč", note: "Teorie + 28 jízd" },
  { cat: "Kondiční jízda (1 h)", price: "850 Kč", note: "Bez výuky teorie" },
  { cat: "Doplňková jízda B (1 h)", price: "750 Kč", note: "Pro stávající žáky" },
];

function PricingPage() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="max-w-2xl mb-12">
        <span className="text-xs font-bold uppercase tracking-display text-primary">Ceník</span>
        <h1 className="mt-3 text-5xl md:text-6xl font-extrabold leading-tight">
          Žádné drobné písmo. Žádné překvapení.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Ceny zahrnují kompletní výcvik. Správní poplatek (700 Kč) za závěrečnou
          zkoušku se hradí na úřadě zvlášť.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-8">
          <div className="border-2 border-foreground bg-background overflow-hidden" style={{ borderRadius: "20px 4px 20px 4px" }}>
            <table className="w-full">
              <thead className="bg-foreground text-background">
                <tr>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-display">Kategorie</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-display hidden sm:table-cell">Rozsah</th>
                  <th className="text-right px-6 py-4 text-xs font-bold uppercase tracking-display">Cena</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.cat} className={i % 2 === 1 ? "bg-secondary/40" : ""}>
                    <td className="px-6 py-4 font-semibold">{r.cat}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground hidden sm:table-cell">{r.note}</td>
                    <td className="px-6 py-4 text-right font-bold text-primary whitespace-nowrap">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <aside className="md:col-span-4 space-y-6">
          <div className="p-6 bg-primary text-primary-foreground" style={{ borderRadius: "4px 20px 4px 20px" }}>
            <h3 className="font-bold text-lg mb-2">Splátky bez navýšení</h3>
            <p className="text-sm opacity-90">Nemusíte platit naráz. Domluvíme dvě nebo tři splátky podle toho, jak vám to vyhovuje.</p>
          </div>
          <div className="p-6 border-2 border-foreground" style={{ borderRadius: "20px 4px 20px 4px" }}>
            <h3 className="font-bold text-lg mb-2">Sleva pro studenty</h3>
            <p className="text-sm text-muted-foreground">Žáci do 18 let mají na skupinu B slevu 500 Kč. Stačí přinést studentský průkaz.</p>
          </div>
          <Link to="/kontakt" className="block text-center px-6 py-3 bg-foreground text-background font-bold rounded-md">
            Mám zájem o kurz
          </Link>
        </aside>
      </div>
    </section>
  );
}
