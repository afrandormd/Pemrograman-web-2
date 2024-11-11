import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Dev Rando",
  description: "Made with love by Afrando",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* area header */}
        <header>
          {/* area image/banner */}
          <img src="../images/logo.png" alt="Logo UTI" />

          {/* area menu */}
          <nav className="text-center flex justify-center">
            <Link
              href={"/"}
              className="bg-teal-500 hover:bg-teal-600 text-black 
            rounded-full px-5 py-2.5 mr-3 w-52"
            >
              Data Mahasiswa
            </Link>
            <Link
              href={"/"}
              className="bg-teal-500 hover:bg-teal-600 text-black 
            rounded-full px-5 py-2.5 ml-3 w-52"
            >
              Log Data Mahasiswa
            </Link>
          </nav>
        </header>

        {/* area content */}
        <section className="m-5">{children}</section>

        {/* area footer */}
        <footer className="flex justify-center bg-color1 text-color2 py-15X">
          Copyright &copy; 2024 - Afrando Sharein Ramadhan
        </footer>
      </body>
    </html>
  );
}
