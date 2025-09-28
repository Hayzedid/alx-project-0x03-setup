import type { Metadata } from "next";
import "./globals.css";
import Layout from "../../components/layouts/Layout";

export const metadata: Metadata = {
  title: "Splash App",
  description: "Your one-stop platform for everything AI you need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
