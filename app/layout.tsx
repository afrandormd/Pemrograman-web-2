import Link from "next/link";
import "./globals.css";

// import font awesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import Image from "next/image";

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
          {/* <img src="../images/logo.png" alt="Logo UTI" /> */}
          <Image
            src="/images/logo.png"
            alt="logo uti"
            width={320}
            height={60}
            priority
          />

          {/* area menu */}
          <nav className="text-center flex justify-center mx-4">
            <Link
              href={"/"}
              className="bg-teal-500 hover:bg-teal-600 text-white 
            rounded-full px-5 py-2.5 mr-3 w-52"
            >
              Data Mahasiswa
            </Link>
            <Link
              href={"/"}
              className="bg-teal-500 hover:bg-teal-600 text-white 
            rounded-full px-5 py-2.5 ml-3 w-52"
            >
              Log Data Mahasiswa
            </Link>
          </nav>
        </header>

        {/* area content */}
        <section className="m-4">{children}</section>

        {/* area footer */}
        <footer className="flex justify-center bg-teal-700 text-white py-15X">
          Copyright &copy; 2024 - Afrando Sharein Ramadhan
        </footer>
      </body>
    </html>
  );
}
