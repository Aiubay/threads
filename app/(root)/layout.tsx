import React from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";
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
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <Topbar />

          <main className="flex flex-row">
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            {/* @ts-ignore */}
            <RightSidebar />
          </main>

          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
