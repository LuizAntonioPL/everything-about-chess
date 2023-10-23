import "@/app/styles/account.css";
import { Providers } from "@/app/providers";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Login to EAC",
  description: "The best chess comunity!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <main className="grid-area-main flex justify-stretch w-full">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}