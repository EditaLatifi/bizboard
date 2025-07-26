// src/app/layout.tsx
import "./styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BizBoard | SaaS for Invoicing & Workflow",
  description:
    "Automate invoices and manage workflows for restaurants & offices.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-raleway">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
