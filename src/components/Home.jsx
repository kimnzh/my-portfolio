import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

import profile from "../assets/img/hakim.jpg";
import instagramIcon from "../assets/socmed/instagram.svg";
import githubIcon from "../assets/socmed/github.svg";
import youtubeIcon from "../assets/socmed/youtube.svg";
import linkedinIcon from "../assets/socmed/linkedin.svg";

export default function Home() {
  const navigate = useNavigate();
  return (
    <section
      id="home"
      className="min-h-screen px-4 lg:px-16 grid grid-rows-[1fr]"
    >
      <div className="flex items-start lg:items-center mt-12 sm:mt-16 2xl:mt-20">
        <div className="w-full grid lg:grid-rows-1 lg:grid-cols-[1fr_40%] lg:gap-16 2xl:gap-16">
          <div className="flex justify-center w-full px-10 lg:px-8 py-10 lg:order-last">
            <div className="max-w-72 lg:max-w-[20.75rem] 2xl:max-w-[36rem] aspect-square relative">
              <div className="border-solid border-light border-2 2xl:border-3 aspect-square rounded-full shadow-xl overflow-hidden">
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
            <h1 className="text-sm font-semibold text-primary sm:text-base md:text-xl 2xl:text-4xl">
              Hello, World! <span className="text-default font-bold">I am</span>
              <span className="block font-bold text-dark text-3xl my-1 2xl:my-3 lg:text-5xl 2xl:text-8xl">
                Hakim Nizami
              </span>
            </h1>
            <h2 className="font-medium text-default text-sm mb-5 sm:text-base lg:text-2xl 2xl:text-4xl">
              Student | <span className="text-sky-500 font-semibold">Math</span>{" "}
              & <span className="text-blue-600 font-semibold">Computer</span>{" "}
              <span className="text-red-600 font-semibold">Science</span>{" "}
              Enthusiast
            </h2>
            <div className="w-full  mt-5 grid grid-cols-2 gap-2 lg:gap-5 h-fit text-xs  sm:text-base 2xl:text-3xl">
              <Link
                to="about-me"
                smooth={true}
                duration={500}
                onClick={() => navigate("/about-me")}
              >
                <button className="anchor">About Me</button>
              </Link>
              <button className="anchor">Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
