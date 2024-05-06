import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu/Menu";
import Aside from "@/components/Aside/Aside";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fernando Mos software engineer",
  description: "Full Stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const switchThemeDuration: string = "duration-200";
  const tabOptions = [
    {label: "Home", value: "home", disabled: false},
    {label: "Blog", value: "blog", disabled: true},
    {label: "About", value: "about", disabled: true},
    {label: "Experience", value: "experience", disabled: true},
    {label: "Contact", value: "contact", disabled: true},
  ];
  return (
    <html lang="en">
      <body className={`${inter.className} ${switchThemeDuration}`}>
        <Aside />
        <section className="content-section ">
          <Menu 
            tabs={tabOptions}
          />
          {children}
        </section>
      </body>
    </html>
  );
}
