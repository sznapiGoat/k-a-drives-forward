import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-extrabold text-primary tracking-display">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Stránka nenalezena</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Zdá se, že jste odbočili špatně. Vraťte se na hlavní cestu.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Zpět domů
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Autoškola Káča — Česká Třebová | Rodinná autoškola" },
      { name: "description", content: "Rodinná autoškola Káča v České Třebové. Skupiny AM, A1, A2, A, B a kondiční jízdy. Trpělivý přístup, individuální tempo." },
      { name: "author", content: "Autoškola Káča" },
      { property: "og:title", content: "Autoškola Káča — Česká Třebová" },
      { property: "og:description", content: "Rodinná autoškola s trpělivým přístupem. Skupiny AM, A1, A2, A, B a kondiční jízdy." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
