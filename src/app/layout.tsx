import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavLinks from '@/app/nav-link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nattakorn Khunart",
  description: "Welcome to the portfolio website of Nattakorn Khunart, a talented developer based in Thailand. Here, you'll discover a showcase of his expertise, projects, and passion for crafting innovative solutions in the world of technology.",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: dark)',
        url: 'icon.ico',
        href: 'icon.ico',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark ${inter.className}`}>
        <NavLinks className="fixed h-[60px] w-full z-[997] bg-dark-100 bg-opacity-70 backdrop-blur-md sm:right-[10px]"/>
        <div className="bg-white dark:bg-dark-100 z-10">{children}</div>
      </body>
    </html>
  );
}
