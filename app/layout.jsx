import "./globals.css";
import { Manrope } from "next/font/google";   // 폰트 추가

export const metadata = {
  title: "Fineroo — Simple digital finance",
  description: "A practice landing page that mimics a fintech site using placeholder assets.",
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} min-h-screen bg-gray-50 text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
