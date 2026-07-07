import type { Metadata } from "next";
import { Space_Grotesk, Fira_Code } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ricardo Ramirez — Frontend Developer",
  description:
    "Frontend Developer especializado en React, Next.js y TypeScript avanzado, ecosistema TanStack y performance (Core Web Vitals).",
  openGraph: {
    title: "Ricardo Ramirez — Frontend Developer",
    description:
      "Frontend Developer especializado en React, Next.js y TypeScript avanzado, ecosistema TanStack y performance (Core Web Vitals).",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${firaCode.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
