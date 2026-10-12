import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata = {
  title: "PT Bumi Sada Mineral | Resources & Energy Trading",
  description:
    "Connecting market needs with resource availability through strategic commodity and material trading in Indonesia.",
};

// Jalan sebelum halaman tampil, supaya tidak ada kedipan tema yang salah
const themeInit = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body-md text-body-md text-on-surface antialiased">
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}