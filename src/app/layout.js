import "./globals.css";

export const metadata = {
  title: "Excuse Generator",
  description: "Fetch an excuse.",
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