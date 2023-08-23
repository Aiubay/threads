import { ClerkProvider, UserButton } from "@clerk/nextjs";
import "../globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";

import BottomBar from "@/components/shared/BottomBar";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads",
  description: " A Next js 13 Threads application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* <> */}
        <body className={inter.className}>{children}</body>
        <Topbar />
        <main className="flex flex-row">
          <LeftSidebar />
          <section className="main-container">
            <div className="w-full max-w-4xl">{children}</div>
          </section>
          <RightSidebar />
        </main>
        <BottomBar />
      </html>
      {/* </> */}
    </ClerkProvider>
  );
}
