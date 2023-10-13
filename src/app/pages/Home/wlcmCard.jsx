import { FaShareAlt, FaChess, FaPeopleCarry } from "react-icons/fa";
import Image from "next/image";

export default function newFunction() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-5 h-[calc(100vh-82px)] w-full max-[375px]:pt-0 lg:flex-row max-[280px]:scale-90 lg:gap-4 lg:px-16">
      <div
        className="flex flex-wrap gap-5 py-5 px-0 lg:gap-10"
        style={{ alignItems: "start" }}
      >
        <h1
          className="text-2xl font-bold text-center mx-auto max-[375px]:text-xl md:text-3xl"
          style={{ maxWidth: 300 }}
        >
          Level up your skills and share your knolowedge with other chess
          lovers!
        </h1>
        <div className="flex w-full flex-wrap gap-3 gap-y-0 justify-center items-start md:gap-0 sm:justify-evenly lg:items-center lg:gap-x-10 lg:flex-nowrap max-[280px]:gap-4">
          <div className="flex flex-col gap-1 justify-center w-32 text-center">
            <div className="flex flex-col items-center justify-center border-b-2 border-black">
              <FaShareAlt size={25} />
              <h1 className="text-lg font-bold max-[375px]:text-md">
                share and learn
              </h1>
            </div>
            <p className="max-[375px]:text-sm">
              Create bondings with other users thirsty for knowedge
            </p>
          </div>

          <div className="flex flex-col gap-1 justify-center w-32 text-center">
            <div className="flex flex-col items-center border-b-2 border-black">
              <FaChess size={25} />
              <h1 className="text-lg font-bold max-[375px]:text-md">
                play with friends
              </h1>
            </div>
            <p className="max-[375px]:text-sm">
              Play localy or online with your friends
            </p>
          </div>

          <div className="flex flex-col gap-1 justify-center w-32 text-center">
            <div className="flex flex-col items-center border-b-2 border-black">
              <FaPeopleCarry size={25} />
              <h1 className="text-lg font-bold max-[375px]:text-md">
                create groups
              </h1>
            </div>
            <p className="max-[375px]:text-sm">
              Add your best friends to groups and learn faster with their help
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center content-center w-fit max-[375px]:gap-2 lg:h-full">
        <Image
          src="https://cdn2.iconfinder.com/data/icons/board-games-5/66/1-512.png"
          width={300}
          height={0}
          className="hidden md:block rounded-lg"
          alt="Peças de xadrez"
        />
        <div className="flex flex-col gap-4 h-fit">
          <a className="flex items-center justify-center px-10 py-2 bg-lime-300 text-lg font-bold cursor-pointer max-[375px]:px-5">
            Join now
          </a>
          <a className="flex items-center justify-center px-10 py-2 bg-slate-300 text-lg font-bold cursor-pointer max-[375px]:px-5">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
