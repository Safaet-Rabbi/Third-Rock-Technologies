import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useEffect, useState } from "react";

const Hero = () => {
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    const toggleInterval = setInterval(() => {
      setShowTyping((prev) => !prev); // Toggle the state
    }, 4000); // 4 seconds interval for the typing effect

    return () => clearInterval(toggleInterval); // Cleanup interval
  }, []);

  return (
    <div className="pb-20 pt-36 relative">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[70vh] w-[40vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[70vh] w-[40vw]" fill="blue" />
      </div>

      {/* Grid Background */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.03]
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Hero Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* Marquee Effect for TextGenerateEffect */}
          <div className="marquee-wrapper">
            <div className="marquee">
              <TextGenerateEffect
                words="Third Rock Technologies"
                className="text-center text-[32px] sm:text-[36px] md:text-[48px] lg:text-[56px]"
              />
            </div>
          </div>

          {/* Toggling Text */}
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl flex items-center justify-center whitespace-nowrap">
            We craft innovative web, iOS, and Android applications{" "}
            <span
              className={`${
                typeof window !== "undefined" && showTyping
                  ? "text-blue-600 typing-animation"
                  : "invisible"
              } ml-2`}
            >
              {typeof window !== "undefined" && showTyping
                ? "to elevate your business.".trim()
                : ""}
            </span>
          </p>

          <a href="#projects">
            <MagicButton
              title="Explore Our Projects"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>

      {/* Styles for Marquee and Typing Animation */}
      <style jsx>{`
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }

        @keyframes marquee {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .typing-animation {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid blue;
          animation:
            typing 4s steps(40, end),
            blink 0.75s step-end infinite;
        }

        .marquee-wrapper {
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
          position: relative;
        }

        .marquee {
          display: inline-block;
          animation: marquee 10s linear infinite;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

export default Hero;
