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
    <section className="min-h-fit max-h-fit lg:min-h-screen lg:max-h-none px-4 lg:px-16 2xl:px-32 grid grid-rows-[1fr]">
      <div className="flex items-start lg:items-center mt-12 sm:mt-16 2xl:mt-20">
        <div className="w-full grid lg:grid-rows-1 lg:grid-cols-[1fr_40%] lg:gap-16 2xl:gap-16">
          <div className="flex justify-center w-full px-10 lg:px-8 py-10 lg:order-last">
            <div className="max-w-72 lg:max-w-[20.75rem] 2xl:max-w-[36rem] aspect-square relative">
              <div className="border-solid border-slate-900 border-2 2xl:border-4 aspect-square rounded-full shadow-xl overflow-hidden">
                <img
                  src={profile}
                  alt="Potrait"
                  className="w-full h-full object-cover scale-125"
                />
              </div>
              <a
                href="https://www.instagram.com/kim_nzh?igsh=anA0d3Q3eHlhNW9i&utm_source=qr"
                target="_blank"
              >
                <button className="socmed-button left-[5%] top-[5%]">
                  <div className="flex items-center justify-center">
                    <img
                      className="w-[75%] invert"
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
                      className="w-[75%] invert"
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
                <button className="socmed-button right-[5%] bottom-[5%]">
                  <div className="flex items-center justify-center">
                    <img
                      className="w-[65%] invert"
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
                <button className="socmed-button left-[5%] bottom-[5%]">
                  <div className="flex items-center justify-center">
                    <img
                      className="w-[65%] invert"
                      src={linkedinIcon}
                      alt="linkedin"
                    />
                  </div>
                </button>
              </a>
            </div>
          </div>
          <div className="self-center px-4">
            <h1 className="font-semibold text-slate-900 text-lg sm:text-xl lg:text-3xl 2xl:text-5xl">
              Hello, World! <span className="text-slate-900">I am</span>
              <span className="block font-bold text-slate-900 text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl my-2 2xl:my-4">
                Hakim Nizami
              </span>
            </h1>
            <h2 className="font-medium text-slate-900 mb-5 text-2xl lg:text-4xl 2xl:text-7xl dark:glowing-text">
              a{" "}
              <span className="text-slate-900 font-semibold">
                {applyStyles(text)}
              </span>
              <Cursor />
            </h2>
            <div className="w-full mt-3 lg:mt-7 grid grid-cols-2 gap-2 lg:gap-5 h-fit text-xs sm:text-base 2xl:text-3xl">
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
