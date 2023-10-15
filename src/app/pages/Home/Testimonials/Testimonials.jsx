import Cntnt from "./TestimonialContent";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="mx-6">
      <h1 className="text-3xl mb-10 text-center">
        What our users say about us?
      </h1>
      <div className="flex flex-wrap gap-10 items-strech justify-center content-center mx-8">
        {Cntnt.map((testimonial, index) => {
          return (
            <div
              className="flex flex-col justify-between max-w-lg px-5 py-4 bg-slate-200 shadow-lg rounded-md dark:bg-gray-800"
              key={index}
              style={{
                opacity: isInView ? 1 : 0,
                transition: "opacity 3s",
              }}
            >
              <div className="min-h-32">
                <span className="text-6xl font-bold">“</span>
                <p className="font-2xl break-words text-justify">
                  {testimonial.text}
                </p>
                <span className="flex justify-end text-6xl font-bold">”</span>
              </div>
              <div className="flex items-center mt-3">
                <img
                  className="block w-16 h-16 rounded-full"
                  src={testimonial.image}
                  alt
                />
                <div className="ml-2">
                  <h4 className="text-16 font-bold ">{testimonial.name}</h4>
                  <span className="text-wedges-gray-500 text-sm">
                    {testimonial.desc}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
