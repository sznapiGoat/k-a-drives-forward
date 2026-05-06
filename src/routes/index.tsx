import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { z } from "zod";
import heroImg from "@/assets/hero-driving.jpg";
import instructorImg from "@/assets/instructor.jpg";
import { AnimatedLogo } from "@/components/AnimatedLogo";
import { Button } from "@/components/ui/button";

const ctaSchema = z.object({
  name: z.string().trim().min(2, "Zadejte jméno"),
  phone: z.string().trim().min(6, "Zadejte telefon"),
});

function CtaForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: { preventDefault(): void; currentTarget: HTMLFormElement }) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const r = ctaSchema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    e.currentTarget.reset();
  }

  if (sent) {
    return (
      <div>
        <p className="text-xl font-bold">Díky! Brzy se ozveme.</p>
        <p className="mt-2 text-sm opacity-80">
          Nebo zavolejte:{" "}
          <a href="tel:+420739238725" className="font-semibold underline">
            739 238 725
          </a>
        </p>
        <button type="button" onClick={() => setSent(false)} className="mt-3 text-xs opacity-60 underline">
          Odeslat znovu
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full px-3 py-2.5 rounded bg-white/15 placeholder:text-primary-foreground/60 text-primary-foreground border border-primary-foreground/30 focus:border-primary-foreground outline-none";

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <input name="name" placeholder="Jméno a příjmení" maxLength={100} className={inputCls} />
          {errors.name && <p className="text-xs mt-1 text-primary-foreground/80">{errors.name}</p>}
        </div>
        <div>
          <input name="phone" placeholder="Telefon" maxLength={30} className={inputCls} />
          {errors.phone && <p className="text-xs mt-1 text-primary-foreground/80">{errors.phone}</p>}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 items-start">
        <button
          type="submit"
          className="px-6 py-2.5 bg-background text-foreground font-bold rounded-md hover:bg-background/90 transition-colors"
        >
          Zajistit si místo →
        </button>
        <p className="text-sm opacity-80 self-center">
          nebo zavolejte:{" "}
          <a href="tel:+420739238725" className="font-semibold underline">
            739 238 725
          </a>
        </p>
      </div>
    </form>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Autoškola Káča — Řidičák s rodinným přístupem | Česká Třebová" },
      { name: "description", content: "Získejte řidičský průkaz v rodinné autoškole Káča v České Třebové. Provozovatelka Ing. Kateřina Elblová. Skupiny AM, A, B, C, E. Oblast Česká Třebová, Sázava, Lanškroun." },
      { property: "og:title", content: "Autoškola Káča — Řidičák s rodinným přístupem" },
      { property: "og:description", content: "Rodinná autoškola v České Třebové. Flexibilní jízdy, skupiny AM, A, B, C, E." },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Autoškola Káča",
          "telephone": "+420739238725",
          "email": "autoskolakaca@seznam.cz",
          "url": "https://autoskolakaca.cz",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Česká Třebová",
            "addressRegion": "Pardubický kraj",
            "addressCountry": "CZ",
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.0",
            "reviewCount": "6",
            "bestRating": "5",
            "worstRating": "1",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const reduced = useReducedMotion();
  return (
    <>
      {/* HERO */}
      <section className="container mx-auto px-6 pt-12 md:pt-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 space-y-8">
            <AnimatedLogo size="md" />
            <div className="flex flex-col gap-1.5">
              <span className="inline-block text-xs font-bold uppercase tracking-display text-primary border-l-4 border-primary pl-3">
                Česká Třebová · od roku 1998
              </span>
              <span className="inline-block text-xs text-muted-foreground border-l-4 border-primary/30 pl-3">
                Provozovatelka: Ing. Kateřina Elblová
              </span>
            </div>

            <motion.h1
              className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight"
              initial={reduced ? false : { x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 110, damping: 14, delay: 0.2 }}
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
                  whileHover={reduced ? undefined : "hovered"}
                  initial="idle"
                  animate="idle"
                >
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-md bg-primary/30"
                    variants={{
                      idle: { scale: 1, opacity: 0 },
                      hovered: reduced ? { scale: 1, opacity: 0 } : {
                        scale: [1, 1.18, 1],
                        opacity: [0.35, 0, 0.35],
                        transition: { duration: 1.1, repeat: Infinity, ease: "easeInOut" },
                      },
                    }}
                  />
                  <motion.div
                    variants={{
                      idle: { scale: 1 },
                      hovered: { scale: reduced ? 1 : 1.05 },
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 14 }}
                  >
                    <Button asChild size="lg" className="h-auto py-3.5 px-7 font-bold text-base">
                      <Link to="/kontakt">Zajistit si místo →</Link>
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

              <div className="flex items-start gap-3 border-l-2 border-primary/25 pl-3 pt-1">
                <p className="text-sm text-muted-foreground italic leading-snug">
                  "Zkoušky jsem zvládla napoprvé. V autoškole Káča cítíte, že vám na úspěchu záleží."
                </p>
                <span className="text-xs text-muted-foreground shrink-0 pt-0.5 font-medium">— Tereza K.</span>
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
              <img
                src={heroImg}
                alt="Výuka řízení v autoškole Káča — žák s instruktorkou při jízdní lekci v České Třebové"
                width={1280}
                height={896}
                fetchPriority="high"
                loading="eager"
                decoding="sync"
                className="w-full h-full object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className=”absolute -bottom-6 left-6 md:left-10 bg-background border-2 border-foreground px-5 py-3 max-w-[260px]” style={{ borderRadius: “20px 4px 20px 4px” }}>
              <div className=”text-xs uppercase tracking-display text-muted-foreground”>Ing. Kateřina Elblová</div>
              <div className=”text-sm font-semibold”>Provozovatelka autoškoly Káča</div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-secondary/50 border-y border-border">
        <div className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
          {[
            { n: "01", t: "Rodinná atmosféra", d: "Žádný call-centrum přístup. U telefonu i za volantem vždy někdo, koho znáte." },
            { n: "02", t: "Trpělivost na prvním místě", d: "Trpělivost je základ naší výuky. Každé cvičení vysvětlíme tolikrát, kolikrát je třeba." },
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
              <img src={instructorImg} alt="Ing. Kateřina Elblová — provozovatelka autoškoly Káča v České Třebové" width={800} height={800} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Lidé, ne čísla. Žák,<br />ne další klient.
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Káča je rodinná autoškola, která už čtvrt století provází řidiče
              ze Třebové, Sázavy i Lanškrouna. Provozovatelka Ing. Kateřina Elblová
              vede školu s klidnou hlavou — i když podruhé spletete plyn s brzdou.
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
          <CtaForm />
        </div>
      </section>
    </>
  );
}
