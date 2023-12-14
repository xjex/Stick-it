import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "../components/nav";
import { SEO } from "@/components/seo/seo";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Stick-up",
  description: "A freedom wall for everyone.",
  openGraph: {
    images:
      "https://xleahmgrjfdmuxgfgcog.supabase.co/storage/v1/object/public/sticky/meta/Stickup.PNG?t=2023-12-14T08%3A39%3A26.489Z",
    "og:title": "Home| Stick-up! ",
    "og:description":
      "Stick-up! is a social media platform that allows users to post their thoughts and ideas in a sticky note format.",
    "og:image":
      "https://xleahmgrjfdmuxgfgcog.supabase.co/storage/v1/object/public/sticky/meta/Stickup.PNG?t=2023-12-14T08%3A39%3A26.489Z",
    "og:url": "https://stick-up.vercel.app/",
    "og:type": "website",
    "og:site_name": "Stick-up!",
  },
  keywords:
    "data posting,social media, sticky notes, stick-up, stick, up, stickup, stick-up!, stick-up!, stickup!, stick up, noteswall, wall, post, free, posting, freedom, freedom wall, freedomwall, freedom-wall, freedom_wall, freedomwall,",
  author: "Xavier Joseph Manaloto",
  robots: "index, follow",
  site_name: "Stick-up!",
};

// export async function generateMetadata({ params }) {
//   return {
//     title: "Stick-up",
//     description: "A freedom wall for everyone.",
//     OpenGraph: {
//       title: "Home| Stick-up! ",
//       description:
//         "Stick-up! is a social media platform that allows users to post their thoughts and ideas in a sticky note format.",
//       image:
//         "https://xleahmgrjfdmuxgfgcog.supabase.co/storage/v1/object/public/sticky/meta/Stickup.PNG?t=2023-12-14T08%3A39%3A26.489Z",
//       url: "https://stick-up.vercel.app/",
//       type: "website",
//       site_name: "Stick-up!",
//     },
//     Twitter: {
//       title: "Home| Stick-up! ",
//       description:
//         "Stick-up! is a social media platform that allows users to post their thoughts and ideas in a sticky note format.",
//       image:
//         "https://xleahmgrjfdmuxgfgcog.supabase.co/storage/v1/object/public/sticky/meta/Stickup.PNG?t=2023-12-14T08%3A39%3A26.489Z",
//       site: "@stickup",
//       creator: "@stickup",
//       domain: "stick-up.vercel.app",
//       label1: "Written by",
//       data1: "Stick-up!",
//       label2: "Est. reading time",
//       data2: "3 minutes",
//       label3: "Published on 2023",
//       data3: "2023-12-14T08:39:26.489Z",
//     },
//   };
// }
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SEO />
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
