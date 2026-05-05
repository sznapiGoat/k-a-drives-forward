import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/ContactForm";
import officeImg from "@/assets/office.jpg";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Autoškola Káča | Staré náměstí 21, Česká Třebová" },
      { name: "description", content: "Kontakt na autoškolu Káča: Staré náměstí 21, Česká Třebová. Tel: 739 238 725. Úřední hodiny: čtvrtek 16–17h." },
      { property: "og:title", content: "Kontakt — Autoškola Káča" },
      { property: "og:description", content: "Staré náměstí 21, Česká Třebová · 739 238 725" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="max-w-2xl mb-14">
        <span className="text-xs font-bold uppercase tracking-display text-primary">Kontakt</span>
        <h1 className="mt-3 text-5xl md:text-6xl font-extrabold leading-tight">
          Najdete nás na Starém&nbsp;náměstí.
        </h1>
      </div>

      <div className="grid md:grid-cols-12 gap-10">
        <aside className="md:col-span-5 space-y-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-display text-muted-foreground mb-2">Adresa</div>
            <div className="text-xl font-semibold">Staré náměstí 21<br />560 02 Česká Třebová</div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-display text-muted-foreground mb-2">Telefon</div>
            <a href="tel:+420739238725" className="text-2xl font-extrabold text-primary">739 238 725</a>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-display text-muted-foreground mb-2">Úřední hodiny</div>
            <div className="text-lg">Čtvrtek <strong>16:00 – 17:00</strong></div>
            <p className="text-sm text-muted-foreground mt-1">Mimo úřední hodiny po telefonické domluvě.</p>
          </div>

          <div className="frame-irregular overflow-hidden aspect-[4/3]">
            <img src={officeImg} alt="Sídlo autoškoly Káča na Starém náměstí v České Třebové" width={1024} height={768} loading="lazy" className="w-full h-full object-cover" />
          </div>

          <div className="border-2 border-foreground overflow-hidden aspect-video" style={{ borderRadius: "20px 4px 20px 4px" }}>
            <iframe
              title="Mapa — Staré náměstí 21, Česká Třebová"
              src="https://maps.google.com/maps?q=Star%C3%A9%20n%C3%A1m%C4%9Bst%C3%AD%2021%2C%20%C4%8Cesk%C3%A1%20T%C5%99ebov%C3%A1&t=m&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </aside>

        <div className="md:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
