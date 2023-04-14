import { Inter } from "next/font/google";
import "./globals.css";
import RainbowWrapper from "../components/rainbowWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={inter.style}>
      <body>
        <RainbowWrapper>{children}</RainbowWrapper>
      </body>
    </html>
  );
}
