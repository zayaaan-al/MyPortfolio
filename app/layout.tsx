import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Home/Navbar/ResponsiveNav";
import ParticlesHero from "./components/PartcleBackground"; // import your particles component
import Footer from "./components/Home/Footer/Footer";
import ScrollToTop from "./components/Helper/ScrollToTop";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AL ZAYAN",
  description: "Full Stack Developer | Mern | Django",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased bg-[#0d0d1f] relative`}>
        {/* Particles Background */}
        <ParticlesHero />

        {/* Navbar */}
        <ResponsiveNav />

        {/* Main content above particles */}
        <main className="relative z-10">{children}
          <Footer/>
          <ScrollToTop/>
        </main>
      </body>
    </html>
  );
}
