import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Mail } from "lucide-react";
import instructorImg from "@/assets/instructor.jpg";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O nás — Autoškola Káča | Rodinná autoškola Česká Třebová" },
      { name: "description", content: "Rodinná autoškola Káča v České Třebové. Provozovatelka Ing. Kateřina Elblová. Výcvik skupin AM, A, B, C, E v oblasti Česká Třebová, Sázava, Lanškroun." },
      { property: "og:title", content: "O nás — Autoškola Káča" },
      { property: "og:description", content: "Provozovatelka Ing. Kateřina Elblová. Rodinná autoškola od roku 1998, skupiny AM, A, B, C, E." },
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
            <img
              src={instructorImg}
              alt="Ing. Kateřina Elblová, provozovatelka autoškoly Káča — více než 25 let zkušeností s výukou řízení v České Třebové"
              width={800}
              height={800}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 px-1">
            <div className="text-sm font-semibold">Ing. Kateřina Elblová</div>
            <div className="text-xs text-muted-foreground uppercase tracking-display">Provozovatelka</div>
          </div>

          {/* Service area */}
          <div className="mt-5 px-1">
            <div className="text-xs font-bold uppercase tracking-display text-muted-foreground mb-2">Oblast působení</div>
            <div className="flex flex-wrap gap-2">
              {["Česká Třebová", "Sázava", "Lanškroun"].map((area) => (
                <span key={area} className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium border border-border rounded-full">
                  <MapPin className="w-3 h-3 text-primary" />
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Groups */}
          <div className="mt-5 px-1">
            <div className="text-xs font-bold uppercase tracking-display text-muted-foreground mb-2">Skupiny oprávnění</div>
            <div className="flex flex-wrap gap-2">
              {["AM", "A", "B", "C", "E"].map((g) => (
                <span key={g} className="inline-flex items-center px-3 py-1 text-xs font-bold bg-primary/10 text-primary border border-primary/20 rounded-full">
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-7 space-y-6 text-lg">
          <p>
            Autoškola Káča vznikla v roce 1998 jako malý rodinný podnik a tím
            zůstala dodnes. Nemáme franšízu, nemáme call centrum.
            Telefon zvedá člověk, kterého potkáte i za volantem.
          </p>
          <p>
            Provozovatelka Ing. Kateřina Elblová vede autoškolu s neúnavnou trpělivostí.
            Žáci, kteří přicházejí po neúspěchu z jiné autoškoly, u nás
            často poprvé zjistí, že řízení nemusí být stresové.
          </p>
          <p>
            Výcvik probíhá v oblasti Česká Třebová, Sázava a Lanškroun.
          </p>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 border border-border rounded-lg">
              <div className="text-3xl font-extrabold text-primary">1998</div>
              <div className="text-sm text-muted-foreground mt-1">Rok založení</div>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <div className="text-3xl font-extrabold text-primary">5</div>
              <div className="text-sm text-muted-foreground mt-1">Skupin výcviku</div>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <div className="text-3xl font-extrabold text-primary">25+</div>
              <div className="text-sm text-muted-foreground mt-1">Let zkušeností</div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="mailto:autoskolakaca@seznam.cz"
              className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-foreground font-semibold rounded-md hover:bg-foreground hover:text-background transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              autoskolakaca@seznam.cz
            </a>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all self-center text-sm"
            >
              Kontaktní stránka <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
