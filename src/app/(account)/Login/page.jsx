import { url } from "inspector";
import Image from "next/image";
import Logo from "@/../public/ChessLogo.png";

export default function LoginPage() {
  return (
    <>
      <div
        className="flex flex-col items-center overflow-hidden w-full bg-cover p-4 after:content-[''] after:bg-[url('https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpVmOHiw.png')]"
      >
        <div className="flex items-center justify-start w-fit self-start">
          <Image
            src={Logo}
            width={50}
            height={50}
            alt="Logo"
            className="dark:invert"
          />
          <p className="text-sm w-24 md:text-md">Everything About Chess</p>
        </div>
        <div className="flex flex-col justify-center items-center h-full px-20">
            <h1 className="text-3xl font-bold text-center">Welcome to Everything About Chess!</h1>
            <hr className="bg-white w-4/5 h-2 my-6 border-none rounded-md"></hr>
        </div>
      </div>
      <div className="flex w-full"></div>
    </>
  );
}
