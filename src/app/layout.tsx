import React from "react";
import { Metadata } from "next";
import StyledComponentsRegistry from "./styled-components/registry";

export const metadata: Metadata = {
  title: "Snowbound Labs",
  description:
    "Snowbound Labs is your premier partner for comprehensive software development services. Elevate your online presence with our expert SEO strategies, eye-catching website designs, and targeted digital marketing solutions. ",

  openGraph: {
    type: "website",
    url: "https://snowboundlabs.com",
    title: "Snowbound Labs",
    description:
      "Snowbound Labs is your premier partner for comprehensive software development services. Elevate your online presence with our expert SEO strategies, eye-catching website designs, and targeted digital marketing solutions. ",

    siteName: "Snowbound Labs",
    images: [
      {
        url: "https://images.ctfassets.net/vm35rz92ipmx/4xlm3aoqkdu23UHFycIjEj/505842570d0763b29645b4f62e3f5378/Logo-02.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@snowboundlabs.com",
    creator: "@snowboundlabs",
    images:
      "https://images.ctfassets.net/vm35rz92ipmx/4xlm3aoqkdu23UHFycIjEj/505842570d0763b29645b4f62e3f5378/Logo-02.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
