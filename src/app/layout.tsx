// src/app/layout.tsx
import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import ClientThemeWrapper from "@/context/ClientThemeWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <ThemeProvider>
          <ClientThemeWrapper>
            {/* Header */}
            <header className="bg-blue-500 p-4 px-28">
              <Navbar />
            </header>

            {/* Main Content */}
            <main className="container mx-auto flex-grow p-4">{children}</main>

            {/* Footer */}
            <footer className="bg-gray-800 p-4 text-center text-white">
              <p>&copy; 2024 Forms AI</p>
            </footer>
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
