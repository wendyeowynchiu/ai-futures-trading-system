import "./globals.css";

export const metadata = {
  title: "AI 台指期交易輔助系統",
  description: "Architecture, modules, prompt, API and UI design document",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
