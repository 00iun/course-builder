import { Geist } from "next/font/google";
import "./globals.css";
import { useRouter } from "next/router";

import Footer from "@/components/footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <header className=" border-b-2 border-black w-screen ">
          <h1>제목</h1>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="flex w-screen">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
