import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "the peters",
  description: "the peters",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/kap8mbq.css" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
