import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "../components/nav";
import { SEO } from "@/components/seo/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stick-up",
  description: "A freedom wall for everyone.",
  image:
    "https://xleahmgrjfdmuxgfgcog.supabase.co/storage/v1/object/public/sticky/meta/Stickup.PNG?t=2023-12-14T08%3A39%3A26.489Z",
  url: "https://stick-up.vercel.app/",
  keywords:
    "social media, sticky notes, stick-up, stick, up, stickup, stick-up!, stick-up!, stickup!, stick up, noteswall, wall, post, free, posting, freedom, freedom wall, freedomwall, freedom-wall, freedom_wall, freedomwall,",

  author: "Xavier Joseph Manaloto",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SEO />
        <Nav />
        {children}
      </body>
    </html>
  );
}
