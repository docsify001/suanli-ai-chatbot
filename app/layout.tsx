import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "共绩算力AI助手",
  description: "共绩算力AI助手",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
