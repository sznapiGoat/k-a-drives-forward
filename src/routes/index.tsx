import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import heroImg from "@/assets/hero-driving.jpg";
import instructorImg from "@/assets/instructor.jpg";
import { AnimatedLogo } from "@/components/AnimatedLogo";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Autoškola Káča — Řidičák s rodinným přístupem | Česká Třebová" },
      { name: "description", content: "Získejte řidičský průkaz v rodinné autoškole Káča v České Třebové. Trpělivý instruktor pan Borský, flexibilní jízdy, skupiny AM, A1, A2, A i B." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="container mx-auto px-6 pt-12 md:pt-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 space-y-8">
            <AnimatedLogo size="md" />
            <span className="inline-block text-xs font-bold uppercase tracking-display text-primary border-l-4 border-primary pl-3">
              Česká Třebová · od roku 1998
            </span>

            <motion.h1
              className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight"
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 110, damping: 14, delay: 0.2 }}
            >
              Cesta k&nbsp;řidičáku,<br />
              která tě bude<br />
              <span className="text-primary">bavit.</span>
            </motion.h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Rodinná autoškola v srdci České Třebové. Učíme trpělivě a flexibilně —
              tempo si určujete vy. Žádný spěch, žádný stres.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-4">
                <motion.div
                  className="relative inline-block"
                  whileHover="hovered"
                  initial="idle"
                  animate="idle"
                >
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-md bg-primary/30"
                    variants={{
                      idle: { scale: 1, opacity: 0 },
                      hovered: {
                        scale: [1, 1.18, 1],
                        opacity: [0.35, 0, 0.35],
                        transition: { duration: 1.1, repeat: Infinity, ease: "easeInOut" },
                      },
                    }}
                  />
                  <motion.div
                    variants={{
                      idle: { scale: 1 },
                      hovered: { scale: 1.05 },
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 14 }}
                  >
                    <Button asChild size="lg" className="h-auto py-3.5 px-7 font-bold text-base">
                      <Link to="/kontakt">Přihlásit se na kurz</Link>
                    </Button>
                  </motion.div>
                </motion.div>

                <Link
                  to="/sluzby"
                  className="px-7 py-3.5 border-2 border-foreground text-foreground font-bold rounded-md hover:bg-foreground hover:text-background transition-colors"
                >
                  Naše služby
                </Link>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-green-500 shrink-0" />
                <span>Žádný stres, jen klidný přístup</span>
              </div>
            </div>

            <div className="flex gap-8 pt-4 text-sm">
              <div><div className="text-3xl font-extrabold text-primary">25+</div><div className="text-muted-foreground">let zkušeností</div></div>
              <div><div className="text-3xl font-extrabold text-primary">5</div><div className="text-muted-foreground">skupin výcviku</div></div>
              <div><div className="text-3xl font-extrabold text-primary">1000+</div><div className="text-muted-foreground">absolventů</div></div>
            </div>
          </div>

          <div className="md:col-span-6 relative">
            <div aria-hidden className="absolute -top-8 -left-6 w-48 h-48 bg-primary/10 rounded-full -z-10" />
            <div aria-hidden className="absolute -bottom-10 -right-4 w-32 h-32 bg-accent/30 -z-10" style={{ borderRadius: "60% 40% 50% 50%" }} />
            <div className="relative w-full aspect-[5/4] overflow-hidden frame-irregular">
              <img src={heroImg} alt="Instruktor s žákem v autě" width={1280} height={896} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 md:left-10 bg-background border-2 border-foreground px-5 py-3 max-w-[260px]" style={{ borderRadius: "20px 4px 20px 4px" }}>
              <div className="text-xs uppercase tracking-display text-muted-foreground">Pan Borský</div>
              <div className="text-sm font-semibold">„Tempo si u nás určuje žák, ne my.“</div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-secondary/50 border-y border-border">
        <div className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
          {[
            { n: "01", t: "Rodinná atmosféra", d: "Žádný call-centrum přístup. U telefonu i za volantem vždy někdo, koho znáte." },
            { n: "02", t: "Trpělivost na prvním místě", d: "Pan Borský proslul tím, že se s žákem nikdy nehádá. Vše vysvětlí znovu." },
            { n: "03", t: "Flexibilní jízdy", d: "Domluvíme se po práci, o víkendu i ráno před školou. Život se nezastaví." },
          ].map((b) => (
            <div key={b.n} className="border-l-2 border-primary pl-5">
              <div className="text-xs font-bold tracking-display text-primary mb-2">{b.n}</div>
              <h3 className="text-xl font-bold mb-2">{b.t}</h3>
              <p className="text-muted-foreground text-sm">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 md:col-start-1 relative">
            <div className="relative w-full aspect-square max-w-md frame-irregular-alt overflow-hidden">
              <img src={instructorImg} alt="Pan Borský – instruktor autoškoly" width={800} height={800} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Lidé, ne čísla. Žák,<br />ne další klient.
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Káča je rodinná autoškola, která už čtvrt století provází řidiče
              ze Třebové i okolí. Náš instruktor pan Borský je známý svou
              klidnou hlavou — i když podruhé spletete plyn s brzdou.
            </p>
            <Link to="/o-nas" className="inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all">
              Více o nás <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-20">
        <div className="bg-primary text-primary-foreground p-10 md:p-16 rounded-md grid md:grid-cols-2 gap-8 items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Připraveni začít?<br />Zápis je otevřený celoročně.
          </h2>
          <div className="md:text-right">
            <Link to="/kontakt" className="inline-block px-8 py-4 bg-background text-foreground font-bold rounded-md hover:bg-background/90">
              Přihlásit se ke kurzu
            </Link>
            <p className="mt-3 text-sm opacity-80">nebo zavolejte: <a href="tel:+420739238725" className="font-semibold underline">739 238 725</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
