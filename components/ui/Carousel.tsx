'use client'

import { useState } from "react";
import { IoMdArrowDroprightCircle,IoMdArrowDropleftCircle } from "react-icons/io";
import Image from "next/image";

interface Carousel2Props {
  images: string[];
}

const Carousel2: React.FC<Carousel2Props> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div id="carrousel" className="relative flex flex-col items-center">
      {/* Carousel content */}
      <div className="max-w-3xl relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full pr-8 pl-8 "
              style={{ zIndex: images.length - index }}
            >
              <Image
                width={600}
                height={500}
                src={image}
                alt={`Slide ${index}`}
                className="w-full rounded-3xl h-96 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Buttons below the carousel */}
      <div className="flex space-x-4 mt-4">
        <button
          onClick={prevSlide}
          className="flex items-center justify-center bg-white hover:scale-105 transition-all duration-300 ease-in-out p-2 rounded-full"
        >
          <IoMdArrowDropleftCircle className="text-[#c21d2c]" style={{ fontSize: "3rem" }} />
        </button>

        <button
          onClick={nextSlide}
          className="flex items-center justify-center bg-white hover:scale-105 transition-all duration-300 ease-in-out p-2 rounded-full"
        >
          <IoMdArrowDroprightCircle className="text-[#c21d2c]" style={{ fontSize: "3rem" }} />
        </button>
      </div>
    </div>
  );
};

export default Carousel2;
