import "./style.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import slides from "./Slides";
import { useState } from "react";

let checked = false;

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const moveCarousel = (direction) => {
    if (direction === "left") {
      setCurrentImage((oldImage) =>
        oldImage === 0 ? slides.length - 1 : oldImage - 1
      );
    } else if (direction === "right") {
      setCurrentImage((oldImage) =>
        oldImage === slides.length - 1 ? 0 : oldImage + 1
      );
    }
  };

  return (
    <div className="flex-wrap m-10 items-start hidden lg:flex">
      <div className="carousel-container scale-75 select-none">
        <input
          type="checkbox"
          id="moveLeft"
          name="moveLeft"
          onClick={() => moveCarousel("left")}
        />
        <input
          type="checkbox"
          id="moveRight"
          name="moveRight"
          onClick={() => moveCarousel("right")}
        />
        <label htmlFor="moveLeft">
          <FaChevronLeft className="invert" />
        </label>
        <label htmlFor="moveRight">
          <FaChevronRight className="invert" />
        </label>
        <div className="carousel-overflow">
          <div className="carousel-images" id="carousel-images">
            {slides.map((slide, index) => (
              <div
                className={index === currentImage ? "image" : "hidden"}
                key={index}
              >
                <img
                  src={slide.image}
                  style={{ backgroundSize: "contain", width: "100%"}}
                  alt="Image"
                />
              </div>
            ))}
          </div>
        </div>
        {slides.map((slide, index) => (
          <input
            type="radio"
            name="image"
            id={`image${index}`}
            disabled
            checked={index === currentImage}
            key={index}
            readOnly
          />
        ))}
        <div className="carousel-bttns">
          {slides.map((slide, index) => (
            <label
              htmlFor={`image${index}`}
              className={index === currentImage ? "active" : ""}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-start w-96 h-full gap-5">
        <h1 className="text-2xl font-bold">Know your pieces!</h1>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={
              index === currentImage
                ? "flex flex-col items-start gap-2 w-126 h-fit bg-slate-400 rounded-md p-4"
                : "hidden"
            }
          >
            <h1 className="text-xl font-semibold">{slide.title}</h1>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
