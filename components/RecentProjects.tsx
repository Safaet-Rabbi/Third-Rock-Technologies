"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { useState } from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={hovered === item.id ? "Live Link" : item.link}
              href={item.link}
            >
              <div
                className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10"
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => window.open(item.link, "_blank")} // Open link when container is clicked
              >
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {expanded === item.id
                  ? item.des
                  : `${item.des.slice(0, 60)}...`}
                {item.des.length > 60 && (
                  <button
                    className="text-purple ml-2"
                    onClick={() =>
                      setExpanded(expanded === item.id ? null : item.id)
                    }
                  >
                    {expanded === item.id ? "Read Less" : "Read More"}
                  </button>
                )}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                        backgroundColor: [1, 2, 3].includes(item.id)
                          ? "#fff"
                          : "transparent",
                      }}
                    >
                      <img src={icon} alt={`icon${index}`} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  {/* Make the text clickable and redirect to the link */}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex lg:text-xl md:text-xs text-sm text-purple cursor-pointer"
                  >
                    Check Live Site
                  </a>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
