import "./styles/globals.css";
import "./styles/Themes/defaultTheme.css";
import Header from "./components/Header/header";
import { Poppins } from "next/font/google";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/footer";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Everything About Chess",
  description: "The best chess comunity!",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <Login className={poppins.className} />
        <main className="grid-area-main flex flex-col items-center w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
