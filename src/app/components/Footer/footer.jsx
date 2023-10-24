import {
  FaFacebook,
  FaInstagram,
  FaPaperPlane,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import Logo from "@/../public/ChessLogo.png";

export default function Footer() {
  return (
    <footer className="flex flex-col grid-area-footer w-full py-20 px-32 bg-slate-300 dark:bg-zinc-800 gap-10">
      <div className="flex justify-between">
        <div className="w-full ">
          <p className="font-black opacity-70">SUBSCRIBE TO OUR NEWSLETTER</p>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl">
              Keep yourself informed about the world of chess with our daily
              updated newsletter
            </h1>
            <form className="flex w-full">
              <label className="flex w-full">
                <input
                  type="email"
                  id="newsMail"
                  className="bg-transparent w-full py-1 outline-none border-b-2 border-black dark:border-white"
                  placeholder="Your email"
                ></input>
                <button type="submit">
                  <FaPaperPlane size={30}></FaPaperPlane>
                </button>
              </label>
            </form>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <img
            src="https://images.vexels.com/media/users/3/254912/isolated/preview/1c2393faecdc474afdb6dfbd48322f6f-pawn-fallen-color-illustration-chess-piece.png"
            width={150}
            height={150}
            className=" -rotate-90"
          ></img>
          <img
            src="https://images.vexels.com/media/users/3/254912/isolated/preview/1c2393faecdc474afdb6dfbd48322f6f-pawn-fallen-color-illustration-chess-piece.png"
            width={150}
            height={150}
            className=" -rotate-45"
          ></img>
          <img
            src="https://images.vexels.com/media/users/3/254912/isolated/preview/1c2393faecdc474afdb6dfbd48322f6f-pawn-fallen-color-illustration-chess-piece.png"
            width={150}
            height={150}
          ></img>
        </div>
      </div>
      <div className="flex w-full gap-12">
        <div className="flex flex-col gap-2 w-full">
          {" "}
          <div className="flex items-center justify-start w-fit">
            <Image
              src={Logo}
              width={50}
              height={50}
              alt="Logo"
              className="dark:invert"
            />
            <p className="text-sm w-24 md:text-md">Everything About Chess</p>
          </div>
          <p>
            The chess site that inovates learning and reconstructs the chess
            world community
          </p>
        </div>
        <div className="flex w-full gap-3">
          <ul className="w-full">
            <li className=" text-blue-700 cursor-pointer">About</li>
            <li className=" text-blue-700 cursor-pointer">Docs</li>
            <li className=" text-blue-700 cursor-pointer">Jobs</li>
          </ul>
          <ul className="w-full">
            <li className=" text-blue-700 cursor-pointer">
              Terms and Conditions
            </li>
            <li className=" text-blue-700 cursor-pointer">Privacy policy</li>
            <li className=" text-blue-700 cursor-pointer">Cookie policy</li>
          </ul>
          <ul className="w-full">
            <p>Talk with us</p>
            <li className=" text-blue-700 cursor-pointer">contact@eac.com</li>
            <li className="flex gap-3">
              <FaInstagram size={30}/> <FaFacebook size={30}/>
              <FaTwitter size={30}/>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
