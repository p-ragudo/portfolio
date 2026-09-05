import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paolo Ragudo | Portfolio",
  description: "Full-stack software engineer portfolio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white text-neutral-900`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
