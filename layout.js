// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "My Website",
  description: "Next.js migrated site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
