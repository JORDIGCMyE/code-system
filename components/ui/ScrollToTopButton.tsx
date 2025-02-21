'use client'
import { GoTriangleUp } from "react-icons/go";

const ScrollToTopButton = () => {


  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`z-50 bg-[#c21d2c] text-white fixed bottom-96 right-8 p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hidden sm:inline`}
      style={{ fontSize: "2rem" }}
    >
      <GoTriangleUp />
    </button>
  );
};

export default ScrollToTopButton;
