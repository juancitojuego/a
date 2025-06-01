import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as a common sans-serif font
import "./globals.css";
// import Header from '../components/layout/Header'; // Placeholder import
// import Footer from '../components/layout/Footer'; // Placeholder import
// import { i18n, Locale } from '../../i18n-config'; // Assuming i18n setup

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yellow Pages", // Default title
  description: "Yellow Pages Directory - Find local services and businesses.",
  // metadataBase: new URL('https://yourdomain.com'), // Important for absolute URLs in metadata
  // openGraph: {
  //   title: 'Yellow Pages',
  //   description: 'Yellow Pages Directory',
  //   // images: ['/og-image.png'], // Default OG image
  // },
};

// This is a basic layout. For i18n with App Router, you might have [lang] in the path
// and pass lang to children or use context.
// export async function generateStaticParams() {
//   return i18n.locales.map((locale) => ({ lang: locale }));
// }

export default function RootLayout({
  children,
  // params, // If [lang] is used in directory structure: params: { lang: Locale }
}: {
  children: React.ReactNode;
  // params?: { lang: Locale };
}) {
  return (
    // <html lang={params?.lang || i18n.defaultLocale}>
    <html lang="en">
      <head>
        {/* Basic meta tags, Next.js handles viewport and charset */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        {/* <Header lang={params?.lang || i18n.defaultLocale} /> */}
        <header style={{ padding: '1rem', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
          {/* Placeholder for Header component content */}
          <p>Header Placeholder (Site Title, Nav, Language Switcher)</p>
        </header>
        <main style={{ padding: '1rem', minHeight: '80vh' }}>
          {children}
        </main>
        <footer style={{ padding: '1rem', backgroundColor: '#f0f0f0', borderTop: '1px solid #ccc', textAlign: 'center' }}>
          {/* Placeholder for Footer component content */}
          <p>Footer Placeholder (Copyright)</p>
        </footer>
        {/* <Footer lang={params?.lang || i18n.defaultLocale} /> */}
      </body>
    </html>
  );
}
