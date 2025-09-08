import "./globals.css";

export const metadata = {
  title: "Excuse Generator API",
  description: "Generate an excuse.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}