import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NihonGo",
  description: "Japanese learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="h-[10rem]"></header>
        {children}
      </body>
    </html>
  );
}
