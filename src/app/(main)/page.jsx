"use client"

import WlcmCard from "../components/HomePage/wlcmCard"
import Carousel from "../components/HomePage/Carousel/Carousel";
import Testimonials from "../components/HomePage/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <WlcmCard />
      <hr className="bg-slate-300 w-4/5 h-1 my-16 dark:bg-zinc-800 border-none "></hr>
      <Carousel />
      <hr className="bg-slate-300 w-4/5 h-1 my-16 dark:bg-zinc-800 border-none"></hr>
      <Testimonials />
      <hr className="bg-slate-300 w-4/5 h-1 my-16 border-none dark:bg-zinc-800"></hr>
    </>
  );
}


