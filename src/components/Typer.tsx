"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function Typer() {
  const words = [
    {
      text: "Build",
      className: "text-white ",
    },
    {
      text: "awesome",
      className: "text-white ",
    },
    {
      text: "apps",
      className: "text-white ",
    },
    {
      text: "with",
      className: "text-white ",
    },
    {
      text: "Unity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] mt-50 ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
