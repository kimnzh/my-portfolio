import { Fragment } from "react";
import { Link } from "react-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import profile from "../assets/img/hakim.jpg";
import instagramIcon from "../assets/socmed/instagram.svg";
import githubIcon from "../assets/socmed/github.svg";
import youtubeIcon from "../assets/socmed/youtube.svg";
import linkedinIcon from "../assets/socmed/linkedin.svg";

export default function Home() {
  const [text] = useTypewriter({
    words: [
      "Computer Science Student",
      "Math Enthusiast",
      "Web Developer",
      "Problem Solver",
      "Full-time Learner",
    ],
    loop: true,
    delaySpeed: 5000,
  });

  const styleMap = {
    Computer: "#2563eb", // blue-600
    Science: "#dc2626", // red-600
    Math: "#0ea5e9", // sky-500
  };

  const applyStyles = (text) => {
    const words = text.split(" "); // Split the text into words by spaces
    return words.map((word, index) => {
      let styledWord = word;
      // Check if the word matches any key in styleMap
      Object.keys(styleMap).forEach((key) => {
        if (word.startsWith(key)) {
          // Apply the color to the matching part of the word
          styledWord = (
            <span key={index} style={{ color: styleMap[key] }}>
              {word}
            </span>
          );
        }
      });

      return (
        <Fragment key={index}>
          {styledWord}
          {index < words.length - 1 && " "}
        </Fragment>
      );
    });
  };

  return (
    <section className="grid max-h-fit min-h-fit grid-rows-[1fr] px-4 lg:max-h-none lg:min-h-screen lg:px-16 2xl:px-32">
      <div className="mt-12 flex items-start sm:mt-16 lg:items-center 2xl:mt-20">
        <div className="grid w-full lg:grid-cols-[1fr_40%] lg:grid-rows-1 lg:gap-16 2xl:gap-16">
          <div className="flex w-full justify-center px-10 py-10 lg:order-last lg:px-8">
            <div className="relative aspect-square max-w-72 lg:max-w-[20.75rem] 2xl:max-w-[36rem]">
              <div className="aspect-square overflow-hidden rounded-full border-2 border-solid border-slate-900 shadow-xl 2xl:border-4">
                <img
                  src={profile}
                  alt="Potrait"
                  className="h-full w-full scale-125 object-cover"
                />
              </div>
              <a
                href="https://www.instagram.com/kim_nzh?igsh=anA0d3Q3eHlhNW9i&utm_source=qr"
                target="_blank"
              >
                <button className="socmed-button left-[5%] top-[5%]">
                  <div className="flex items-center justify-center">
                    <img
                      className="w-[75%] invert transition duration-300 dark:filter-none"
                      src={instagramIcon}
                      alt="instagram"
                    />
                  </div>
                </button>
              </a>
              <a href="https://github.com/kimnzh" target="_blank">
                <button className="socmed-button right-[5%] top-[5%]">
                  <div className="flex items-center justify-center">
                    <img
                      className="w-[75%] invert transition duration-300 dark:filter-none"
                      src={githubIcon}
                      alt="github"
                    />
                  </div>
                </button>
              </a>
              <a
                href="https://www.youtube.com/@hakimnizami6651"
                target="_blank"
              >
                <button className="socmed-button bottom-[5%] right-[5%]">
                  <div className="flex items-center justify-center">
                    <img
                      className="w-[65%] invert transition duration-300 dark:filter-none"
                      src={youtubeIcon}
                      alt="youtube"
                    />
                  </div>
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/muhamad-hakim-nizami-a79120293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
              >
                <button className="socmed-button bottom-[5%] left-[5%]">
                  <div className="flex items-center justify-center">
                    <img
                      className="w-[65%] invert transition duration-300 dark:filter-none"
                      src={linkedinIcon}
                      alt="linkedin"
                    />
                  </div>
                </button>
              </a>
            </div>
          </div>
          <div className="self-center px-4 text-slate-900 transition-all duration-300 dark:text-white">
            <h1 className="text-lg font-semibold sm:text-xl lg:text-3xl 2xl:text-5xl">
              Hello, World! I am
              <span className="my-2 block text-4xl font-bold md:text-5xl lg:text-6xl 2xl:my-4 2xl:text-8xl">
                Hakim Nizami
              </span>
            </h1>
            <h2 className="mb-5 text-2xl font-medium lg:text-4xl 2xl:text-7xl">
              a{" "}
              <span className="dark:glowing-text font-semibold">
                {applyStyles(text)}
              </span>
              <Cursor />
            </h2>
            <div className="mt-3 grid h-fit w-full grid-cols-2 gap-2 text-xs sm:text-base lg:mt-7 lg:gap-5 2xl:text-3xl">
              <Link to="about-me" smooth={true} duration={500}>
                <button className="anchor">About Me</button>
              </Link>
              <a
                href="https://drive.google.com/file/d/1cFVKeOSfZtjoHqsEhtbCUMybKoKyDKrl/view?usp=sharing"
                target="_blank"
              >
                <button className="anchor">Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
