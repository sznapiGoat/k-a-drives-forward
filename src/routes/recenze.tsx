import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/recenze")({
  head: () => ({
    meta: [
      { title: "Recenze — Autoškola Káča | Hodnocení žáků" },
      { name: "description", content: "Reálné recenze žáků autoškoly Káča v České Třebové. Průměr 3,8/5 hvězd." },
      { property: "og:title", content: "Recenze — Autoškola Káča" },
      { property: "og:description", content: "Co o nás říkají naši žáci. Průměr 3,8/5." },
    ],
  }),
  component: ReviewsPage,
});

type Review = { name: string; stars: number; text: string; date: string };
const reviews: Review[] = [
  { name: "Kristýna Haňáková", stars: 5, date: "Listopad 2025", text: "Pan Borský byl neuvěřitelně trpělivý. Při couvání jsem zpočátku vyloženě panikařila a on klidně dvacetkrát řekl: „Ještě jednou, není kam spěchat.“ Bez nervů mi dal řidičák napoprvé. Doporučuji všema deseti." },
  { name: "Martin Dvořák", stars: 4, date: "Září 2025", text: "Příjemný rodinný přístup, dobře se domlouvalo na termínech. Občas trochu zmatek v rozvrhu teorie, ale jízdy byly výborné." },
  { name: "Tereza N.", stars: 5, date: "Srpen 2025", text: "Vrátila jsem se po deseti letech bez auta na kondiční jízdy. Žádné poznámky, žádné posměšky, jen konkrétní rady. Konečně se cítím jistě." },
  { name: "Pavel Hruška", stars: 3, date: "Červen 2025", text: "Solidní autoškola, cena ok. Zkoušku jsem dělal dvakrát, ale to byla spíš moje chyba než instruktora." },
  { name: "Adéla K.", stars: 4, date: "Květen 2025", text: "Lidský přístup, žádný velký podnik, kde jste jen číslo. Pan Borský má nervy z titanu." },
  { name: "Jakub L.", stars: 3, date: "Únor 2025", text: "Cena trochu vyšší než jinde, ale kvalita výuky tomu odpovídá. Skupinu A jsem zvládl bez problémů." },
];

const avg = reviews.reduce((s, r) => s + r.stars, 0) / reviews.length;

function Stars({ n }: { n: number }) {
  return (
    <span aria-label={`${n} z 5 hvězd`} className="text-primary">
      {"★".repeat(n)}<span className="text-border">{"★".repeat(5 - n)}</span>
    </span>
  );
}

function ReviewsPage() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
        <div className="md:col-span-7">
          <span className="text-xs font-bold uppercase tracking-display text-primary">Recenze</span>
          <h1 className="mt-3 text-5xl md:text-6xl font-extrabold leading-tight">
            Co říkají naši žáci.
          </h1>
        </div>
        <div className="md:col-span-5 md:text-right">
          <div className="inline-block p-6 border-2 border-foreground" style={{ borderRadius: "20px 4px 20px 4px" }}>
            <div className="text-5xl font-extrabold text-primary leading-none">{avg.toFixed(1)}<span className="text-xl text-muted-foreground">/5</span></div>
            <div className="mt-2 text-lg"><Stars n={Math.round(avg)} /></div>
            <div className="mt-1 text-xs text-muted-foreground uppercase tracking-display">{reviews.length} hodnocení</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <article
            key={r.name}
            className="p-6 bg-background border-2 border-border hover:border-primary transition-colors"
            style={{ borderRadius: i % 2 ? "16px 4px 16px 4px" : "4px 16px 4px 16px" }}
          >
            <Stars n={r.stars} />
            <p className="mt-3 text-foreground/90 leading-relaxed">„{r.text}“</p>
            <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
              <div className="font-semibold text-sm">{r.name}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-display">{r.date}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
