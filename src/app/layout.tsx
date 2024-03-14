import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import ThemeProviders from "@/providers/ThemeProvider";
import Header from "@/components/navbar/Header";
import ReduxProvider from "@/providers/ReduxProvider";
import { Toaster } from "@/components/ui/sonner";
import Wrapper from "@/components/Wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Groww Checkout Page",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <link rel="icon" href="/logo.png" />
                <QueryProvider>
                    <ThemeProviders>
                        <ReduxProvider>
                            <Toaster />
                            <Wrapper>
                                <main className="min-h-screen min-w-screen ">
                                    <Header />
                                    <div className="lg:px-20 pt-20">
                                        {children}
                                    </div>
                                </main>
                            </Wrapper>
                        </ReduxProvider>
                    </ThemeProviders>
                </QueryProvider>
            </body>
        </html>
    );
}
