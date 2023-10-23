import "@/app/styles/globals.css";
import { Providers } from "../providers";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Everything About Chess",
  description: "The best chess comunity!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <Header />
          <main className="grid-area-main flex flex-col items-center w-full">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
