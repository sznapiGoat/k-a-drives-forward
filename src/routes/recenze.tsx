import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/recenze")({
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

const dateMap: Record<string, string> = {
  "Únor 2025": "2025-02",
  "Květen 2025": "2025-05",
  "Červen 2025": "2025-06",
  "Srpen 2025": "2025-08",
  "Září 2025": "2025-09",
  "Listopad 2025": "2025-11",
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Autoškola Káča",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": avg.toFixed(1),
    "reviewCount": String(reviews.length),
    "bestRating": "5",
    "worstRating": "1",
  },
  "review": reviews.map((r) => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": r.name },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": String(r.stars),
      "bestRating": "5",
      "worstRating": "1",
    },
    "reviewBody": r.text,
    "datePublished": dateMap[r.date] ?? r.date,
  })),
});

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
        <div className="md:col-span-7">
          <span className="text-xs font-bold uppercase tracking-display text-primary">Recenze</span>
          <h1 className="mt-3 text-5xl md:text-6xl font-extrabold leading-tight">
            Co říkají naši žáci.
          </h1>
        </div>
        <div className="md:col-span-5 md:text-right">
          <div className="inline-block p-6 border-2 border-foreground" style={{ borderRadius: "20px 4px 20px 4px" }}>
            <div className="text-5xl font-extrabold text-primary leading-none">
              {avg.toFixed(1)}<span className="text-xl text-muted-foreground">/5</span>
            </div>
            <div className="mt-2 text-lg"><Stars n={Math.round(avg)} /></div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="p-8 border border-border bg-card hover:border-primary transition-colors duration-300">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-lg">{r.name}</h3>
                <p className="text-sm text-muted-foreground">{r.date}</p>
              </div>
              <Stars n={r.stars} />
            </div>
            <p className="italic text-muted-foreground leading-relaxed">"{r.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}