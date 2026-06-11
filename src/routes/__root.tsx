import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gold font-display">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md gold-gradient px-4 py-2 text-sm font-bold text-black transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md gold-gradient px-4 py-2 text-sm font-bold text-black"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-gold bg-transparent px-4 py-2 text-sm font-medium text-gold"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sai Ram Car Travels Pithapuram | Best Car Rental & Cab Service in Kakinada | Book 24/7: +91 63036 63911" },
      {
        name: "description",
        content:
          "Sai Ram Car Travels is the #1 rated car rental & cab service in Pithapuram, Kakinada & East Godavari. ⭐5.0 Google Rating (58 Reviews). Available 24/7 for Outstation, Airport Transfer, Wedding Cars & Tour Packages. Book Sedan, Ertiga, Innova Crysta, Tempo Traveller at best rates. Call +91 63036 63911.",
      },
      {
        name: "keywords",
        content:
          "sai ram car travels, sairam travels pithapuram, travels in pithapuram, travels in kakinada, near by car travels, car travels near me, best travels in pithapuram, cab service pithapuram, taxi pithapuram, car rental kakinada, cab service kakinada, taxi kakinada, outstation cab pithapuram, airport transfer pithapuram, rajahmundry airport cab, vizag airport taxi, innova crysta pithapuram, tempo traveller pithapuram, sedan rental pithapuram, best cab service pithapuram, 24 hour taxi pithapuram",
      },
      { property: "og:title", content: "Sai Ram Car Travels Pithapuram | Best Car Rental & Cab Service | Book 24/7" },
      {
        property: "og:description",
        content: "Pithapuram's most trusted 5★ rated car rental & cab service. Serving Pithapuram, Kakinada, Rajahmundry & all AP/Telangana. Innova Crysta, Tempo Traveller, Sedans. Call +91 63036 63911.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Rajdhani:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@1,400;1,600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
