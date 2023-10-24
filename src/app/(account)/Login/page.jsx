import Image from "next/image";
import Logo from "@/../public/ChessLogo.png";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import ThemeButton from "@/app/components/Header/ThemeBttn/themeBttn";

export default function LoginPage() {
  return (
    <>
      <div
        className="flex flex-col items-center overflow-hidden w-full p-4
      after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:-z-10 dark:after:bg-login-image after:bg-login-image-l
      after:bg-cover after:blur-sm after:opacity-50"
      >
        <Link
          className="flex items-center justify-start w-fit self-start"
          href={"/"}
        >
          <Image
            src={Logo}
            width={50}
            height={50}
            alt="Logo"
            className="dark:invert"
          />
          <p className="text-sm w-24 md:text-md">Everything About Chess</p>
        </Link>
        <div className="flex flex-col justify-center items-center h-full px-20">
          <h1 className="text-6xl text-center">
            Welcome to Everything About Chess!
          </h1>
          <hr className="bg-black dark:bg-white w-48 h-2 my-6 border-none rounded-md"></hr>
          <p className="text-lg">
            Everything About Chess is your one-stop destination for all things
            chess. From beginners to grandmasters, we have something for
            everyone.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-evenly px-12 pb-24 w-full dark:bg-stone-800 bg-zinc-200 dark:text-white text-black">
        <div className="flex w-full justify-between">
          <ThemeButton />
          <Link href={"/"} className="flex justify-center items-center dark:bg-slate-700 p-2 rounded-sm bg-white">
            <FaXmark />
          </Link>
        </div>

        <div className="flex flex-col items-center gap-4 px-10">
          <h1 className="text-2xl font-bold">Login to your EAC account</h1>
          <p className="text-center opacity-50">
            If you’re new to Everything About Chess, we invite you to join our
            community. Click on the ‘Sign Up’ button below to create your
            account and start your journey in the world of chess.
          </p>
        </div>
        <form className="flex flex-col items-center gap-4 w-8/12">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="border-b-2 border-black dark:border-white">
              Email
            </label>
            <input
              type="email"
              id={"email"}
              className="h-11 border-l-8 border-transparent hover:border-indigo-800 outline-0
          rounded-l-none rounded-r-md pl-3.5 [&:not(:placeholder-shown)]:border-indigo-800 [&:not(:placeholder-shown)]:bg-blue-600 [&:not(:placeholder-shown)]:bg-opacity-25 transition-all duration-100"
              placeholder={"email"}
            ></input>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="password" className="border-b-2 border-black dark:border-white">
              Password
            </label>
            <input
              type="password"
              id={"password"}
              className="h-11 border-l-8 border-transparent hover:border-indigo-800 outline-0
          rounded-l-none rounded-r-md pl-3.5 [&:not(:placeholder-shown)]:border-indigo-800 [&:not(:placeholder-shown)]:bg-blue-600 [&:not(:placeholder-shown)]:bg-opacity-25 transition-all duration-100"
              placeholder={"password"}
            ></input>
          </div>
          <div className="flex gap-2 self-start">
            <label
              htmlFor="rememberMe"
              className="w-6 h-6 dark:bg-gray-600 bg-white rounded-md relative cursor-pointer"
            >
              <input type="checkbox" id="rememberMe" className="hidden peer" />
              <span className="absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 opacity-0 peer-checked:opacity-100 transition-opacity duration-100">
                <FaCheck />
              </span>
            </label>
            <p>Remember me</p>
          </div>
          <div className="flex justify-evenly w-full mt-3">
            <button
              type="submit"
              className="bg-indigo-700 px-8 py-2 rounded-md text-white"
            >
              Login
            </button>
            <Link
              className="bg-white text-indigo-700 px-8 py-2 rounded-md"
              href={"/SignUp"}
            >
              Create Account
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
