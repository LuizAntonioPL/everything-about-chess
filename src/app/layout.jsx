import "./globals.css";
import Header from "./components/Header/header"
import { Poppins } from "next/font/google";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const poppins = Poppins({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "All About Chess",
  description: "The chess top comunity",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
          <main className="grid-area-main flex flex-col items-center w-full">
            {children}
          </main>
      </body>
    </html>
  );
}
