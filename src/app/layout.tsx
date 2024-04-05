import type { Metadata } from "next";
import { Inter, DM_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/ProgressBarProvider";
import { Navbar } from "@/components";
import Footer from "@/components/NewFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebPips",
  description: "School of Digital assests trading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <div>
//       <header>
//         <Navbar />
//       </header>
//       <html lang="en">
//         <body className={inter.className}>{children}</body>
//       </html>
//       <footer>
//         <Footer />
//       </footer>
//     </div>
//   );
// }
