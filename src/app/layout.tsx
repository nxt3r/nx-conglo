import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site-url";
import { site } from "@/data/site";
import IntroGate from "@/components/IntroGate";
import ScrollHandler from "@/components/ScrollHandler";
import CommandMenu from "@/components/CommandMenu";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Nx Conglo is an independent studio building web apps and digital services in public.",
  applicationName: site.name,
  authors: [{ name: "nxt3r", url: "https://github.com/nxt3r" }],
  creator: "nxt3r",
  keywords: ["Nx Conglo", "nxt3r", "web apps", "digital studio", "Career OS", "Fixtional"],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: "An independent studio building web apps and digital services in public.",
    url: SITE_URL,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: "An independent studio building web apps and digital services in public.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
                if (isDark) {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.backgroundColor = '#000000';
                  document.body.style.backgroundColor = '#000000';
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.style.backgroundColor = '#ffffff';
                  document.body.style.backgroundColor = '#ffffff';
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-300">
        <IntroGate>
          <div className="flex min-h-screen flex-col">
            <ScrollHandler />
            <CommandMenu /> 
            <Navbar />
            <main className="flex-1">{children}</main>
            <Newsletter />
            <Footer />
          </div>
        </IntroGate>
      </body>
    </html>
  );
}