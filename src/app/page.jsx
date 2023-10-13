"use client"

import WlcmCard from "./pages/Home/wlcmCard"
import Carousel from "./pages/Home/Carousel/Carousel";
import Testimonials from "./pages/Home/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <WlcmCard />
      <hr className="bg-slate-300 w-4/5 h-1 my-16"></hr>
      <Carousel />
      <hr className="bg-slate-300 w-4/5 h-1 my-16"></hr>
      <Testimonials />
      <hr className="bg-slate-300 w-4/5 h-1 my-16"></hr>
    </>
  );
}


