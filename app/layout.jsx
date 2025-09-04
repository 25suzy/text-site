import "./globals.css";


export const metadata = {
  title: "Fineroo — Simple digital finance",
  description: "A practice landing page that mimics a fintech site using placeholder assets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}
