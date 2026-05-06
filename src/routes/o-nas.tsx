import { createFileRoute } from "@tanstack/react-router";
import instructorImg from "@/assets/instructor.jpg";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O nás — Autoškola Káča | Rodinná autoškola Česká Třebová" },
      { name: "description", content: "Rodinná autoškola Káča v České Třebové. Pan Borský a tým instruktorů s individuálním a trpělivým přístupem." },
      { property: "og:title", content: "O nás — Autoškola Káča" },
      { property: "og:description", content: "Rodinná autoškola s trpělivým přístupem v České Třebové." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="max-w-2xl mb-16">
        <span className="text-xs font-bold uppercase tracking-display text-primary">O nás</span>
        <h1 className="mt-3 text-5xl md:text-6xl font-extrabold leading-tight">
          Čtvrt století na cestě s vámi.
        </h1>
      </div>

      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <div className="frame-irregular overflow-hidden aspect-[4/5]">
            <img src={instructorImg} alt="Pan Borský, hlavní instruktor autoškoly Káča — 25 let zkušeností s výukou řízení v České Třebové" width={800} height={800} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="mt-4 px-1">
            <div className="text-sm font-semibold">Pan Borský</div>
            <div className="text-xs text-muted-foreground uppercase tracking-display">Hlavní instruktor</div>
          </div>
        </div>

        <div className="md:col-span-7 space-y-6 text-lg">
          <p>
            Autoškola Káča vznikla v roce 1998 jako malý rodinný podnik a tím
            zůstala dodnes. Nemáme franšízu, nemáme call centrum.
            Telefon zvedá člověk, kterého potkáte i za volantem.
          </p>
          <p>
            Pan Borský, naše „klidná síla“, učí jezdit s neúnavnou trpělivostí.
            Žáci, kteří přicházejí po neúspěchu z jiné autoškoly, u nás
            často poprvé zjistí, že řízení nemusí být stresové.
          </p>
          <blockquote className="border-l-4 border-primary pl-6 py-2 text-xl font-medium italic text-foreground">
            „Nikdo se nenarodil s řidičákem v ruce. Tempo si u nás určuje žák.“
            <footer className="mt-2 not-italic text-sm text-muted-foreground">— pan Borský</footer>
          </blockquote>

          <div className="grid sm:grid-cols-3 gap-6 pt-6">
            <div>
              <div className="text-3xl font-extrabold text-primary">1998</div>
              <div className="text-sm text-muted-foreground">Rok založení</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Skupin výcviku</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-primary">100 %</div>
              <div className="text-sm text-muted-foreground">Lidský přístup</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
