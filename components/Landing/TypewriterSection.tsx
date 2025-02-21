"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Code-",
      className: "text-[#c21d2c]",
    },
    {
      text: "System.",
      className: "text-[#c21d2c]",
    },
  ];
  return (
    <TypewriterEffect words={words} />
  );
}
