import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./_components/navbar/Navbar";
import RegisterModal from "./_components/modals/RegisterModal";
import ClientFix from "@/lib/ClientFix";
import ToasterProvider from "./_providers/ToasterProvider";
import LoginModal from "./_components/modals/LoginModal";
import RentModal from "./_components/modals/RentModal";
import getCurrentUser from "./_actions/getCurrentUser";
import SearchModal from "./_components/modals/SearchModal";

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Airbnb Clone",
};

const nunito = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <ClientFix>
          <ToasterProvider />
          <SearchModal />
          <RegisterModal />
          <RentModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
        </ClientFix>
        <div className="pt-20 pb-20">{children}</div>
      </body>
    </html>
  );
}
