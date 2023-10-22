const config = require("../../next.config.js");
import * as React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
    title: "Venkata Sriman Narayana Malli",
    description: "Venkata Sriman Narayana Malli's Personal Website",
};

const pages = [
    ["About", config.basePath + "/about"],
    ["Projects", config.basePath + "/projects"],
    ["Achievements", config.basePath + "/achievements"],
];

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body
                style={{
                    margin: 0,
                    backgroundColor: "#fff",
                }}
            >
                <Navbar pages={pages} />
                <main
                    style={{
                        marginTop: "4rem",
                        minHeight: "100vh",
                    }}
                >
                    {children}
                </main>
                {/* Contact Footer */}
                <Footer />
            </body>
        </html>
    );
}
