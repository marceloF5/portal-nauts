import "./globals.css";
import { Darker_Grotesque } from "next/font/google";

const inter = Darker_Grotesque({ subsets: ["latin"] });

export const metadata = {
  title: "Home - Nauts Digital",
  description: "Design, Development and Motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
