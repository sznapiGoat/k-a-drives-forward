import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Zadejte jméno").max(100),
  email: z.string().trim().email("Neplatný e-mail").max(255),
  phone: z.string().trim().min(6, "Zadejte telefon").max(30),
  category: z.string().max(20).optional(),
  message: z.string().trim().min(5, "Krátká zpráva").max(1000),
});

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const r = schema.safeParse(data);
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
      <div className="p-8 frame-irregular-alt bg-background">
        <h3 className="text-2xl font-bold mb-2">Děkujeme!</h3>
        <p className="text-muted-foreground">Brzy se vám ozveme. Můžete nám také rovnou zavolat na <a className="text-primary font-semibold" href="tel:+420739238725">739&nbsp;238&nbsp;725</a>.</p>
        <button onClick={() => setSent(false)} className="mt-4 text-sm text-primary underline">Odeslat další zprávu</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 bg-background p-6 md:p-8 frame-irregular-alt">
      <div>
        <label className="block text-sm font-semibold mb-1">Jméno a příjmení</label>
        <input name="name" maxLength={100} className="w-full border-2 border-border focus:border-primary outline-none px-3 py-2 rounded" />
        {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold mb-1">E-mail</label>
          <input name="email" maxLength={255} className="w-full border-2 border-border focus:border-primary outline-none px-3 py-2 rounded" />
          {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Telefon</label>
          <input name="phone" maxLength={30} className="w-full border-2 border-border focus:border-primary outline-none px-3 py-2 rounded" />
          {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1">Skupina</label>
        <select name="category" className="w-full border-2 border-border focus:border-primary outline-none px-3 py-2 rounded bg-background">
          <option>B – Osobní automobil</option>
          <option>AM – Moped</option>
          <option>A1 – do 125 ccm</option>
          <option>A2 – do 35 kW</option>
          <option>A – bez omezení</option>
          <option>Kondiční jízdy</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1">Zpráva</label>
        <textarea name="message" maxLength={1000} rows={4} className="w-full border-2 border-border focus:border-primary outline-none px-3 py-2 rounded" />
        {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
      </div>
      <button type="submit" className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90">
        Odeslat poptávku
      </button>
    </form>
  );
}
