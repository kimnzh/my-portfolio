import { useEffect, useRef, useState } from "react";

import data from "../data/projects.json";

import leftChevron from "../assets/symbol/chevron-left.svg";
import rightChevron from "../assets/symbol/chevron-right.svg";

import portfolioImage from "../assets/projects/portfolio.png";
import datathon24Image from "../assets/projects/datathon24.png";
import siakCImage from "../assets/projects/siakC.png";

const images = {
  portfolio: portfolioImage,
  datathon24: datathon24Image,
  siakC: siakCImage,
};

export default function Projects() {
  const projectList = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      updateIndicators();
    };

    const projectListRef = projectList.current;

    if (projectListRef) {
      projectListRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (projectListRef) {
        projectListRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  function scrollLeft() {
    if (projectList.current) {
      projectList.current.scrollBy({
        left: -projectList.current.offsetWidth,
        behavior: "smooth",
      });
      updateIndicators();
    }
  }

  function scrollRight() {
    if (projectList.current) {
      projectList.current.scrollBy({
        left: projectList.current.offsetWidth,
        behavior: "smooth",
      });
      updateIndicators();
    }
  }

  function updateIndicators() {
    if (projectList.current) {
      const scrollLeft = projectList.current.scrollLeft;
      const itemWidth = projectList.current.offsetWidth;
      const newCurrentIndex = Math.floor(scrollLeft / itemWidth);
      setCurrentIndex(newCurrentIndex);
    }
  }

  return (
    <section className="px-4 pt-12 sm:pt-16 lg:px-16 2xl:px-32 2xl:pt-28">
      <div className="flex flex-col items-center px-4 pb-8">
        <div className="mx-auto mb-3 mt-4 flex h-12 items-center rounded-full bg-slate-900 transition duration-300 dark:bg-white md:h-14 lg:mb-4 lg:mt-6 xl:h-16 2xl:mb-5 2xl:mt-8 2xl:h-24">
          <h4 className="px-8 text-2xl font-bold text-white transition duration-300 dark:text-slate-950 md:text-3xl xl:text-4xl 2xl:text-5xl">
            Projects
          </h4>
        </div>
        <div className="relative h-fit w-full max-w-[36rem] px-7 sm:px-8 2xl:max-w-[48rem]">
          <div
            className={`absolute -left-4 top-[50%] aspect-square w-7 cursor-pointer rounded-full bg-slate-900 p-1 transition duration-300 dark:bg-white sm:w-8 xl:-left-10 xl:w-12 ${
              currentIndex === 0
                ? "translate-x-7 scale-0 sm:translate-x-8 xl:translate-x-12"
                : "hover:scale-[110%]"
            }`}
            onClick={scrollLeft}
          >
            <img
              src={leftChevron}
              className="h-full w-full object-cover invert transition duration-300 dark:filter-none"
            />
          </div>
          <div
            className={`absolute -right-4 top-[50%] aspect-square w-7 cursor-pointer rounded-full bg-slate-900 p-1 transition duration-300 dark:bg-white sm:w-8 xl:-right-10 xl:w-12 ${
              currentIndex === data.projects.length - 1
                ? "-translate-x-7 scale-0 sm:-translate-x-8 xl:-translate-x-12"
                : "hover:scale-[110%]"
            }`}
            onClick={scrollRight}
          >
            <img
              src={rightChevron}
              className="h-full w-full object-cover invert transition duration-300 dark:filter-none"
            />
          </div>
          <ul className="project-list" ref={projectList}>
            {data.projects.map((project) => (
              <li key={project.id}>
                <div className="group h-full">
                  <div className="bg:bg-white h-full w-full rounded-[12px] bg-slate-900 p-3 text-white transition duration-300 group-hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:group-hover:bg-slate-300 sm:rounded-[24px] sm:p-6">
                    <div className="relative max-w-full overflow-hidden rounded-[4px] border-4 border-solid border-slate-900 transition duration-300 dark:border-slate-950 sm:rounded-[8px]">
                      <div className="absolute flex h-full w-full items-center justify-center bg-slate-950 font-semibold text-white opacity-0 transition duration-300 group-hover:bg-opacity-50 group-hover:opacity-100">
                        {project.notebook !== "" ? (
                          <a
                            href={project.notebook}
                            target="_blank"
                            className="rounded-xl bg-slate-800 p-3 text-center text-xs sm:p-4 sm:text-base"
                          >
                            NOTEBOOK
                          </a>
                        ) : project.github === "" && project.preview === "" ? (
                          <></>
                        ) : project.github === "" && project.preview !== "" ? (
                          <a
                            href={project.preview}
                            target="_blank"
                            className="rounded-xl bg-slate-800 p-2 text-center text-xs sm:p-4 sm:text-base"
                          >
                            PREVIEW
                          </a>
                        ) : project.github !== "" && project.preview === "" ? (
                          <a
                            href={project.github}
                            target="_blank"
                            className="rounded-xl bg-slate-800 p-2 text-center text-xs sm:p-4 sm:text-base"
                          >
                            GITHUB
                          </a>
                        ) : (
                          <div className="grid grid-cols-2 gap-3">
                            <a
                              href={project.github}
                              target="_blank"
                              className="rounded-xl bg-slate-800 p-2 text-center text-xs sm:p-4 sm:text-base"
                            >
                              GITHUB
                            </a>
                            <a
                              href={project.preview}
                              target="_blank"
                              className="rounded-xl bg-slate-800 p-2 text-center text-xs sm:p-4 sm:text-base"
                            >
                              PREVIEW
                            </a>
                          </div>
                        )}
                      </div>
                      <img
                        src={images[project.image]}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="my-4 text-lg font-semibold sm:text-xl">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed sm:text-base">
                      {project.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-3 flex items-center justify-center sm:mt-6">
          {data.projects.map((_, index) => (
            <div
              key={index}
              className={`project-indicator ${
                currentIndex === index ? "scale-[135%]" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
