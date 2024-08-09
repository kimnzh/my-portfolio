import { useNavigate } from "react-router-dom";

import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";

import profile from "../assets/img/hakim.jpg";
import instagramIcon from "../assets/socmed/instagram.svg";
import githubIcon from "../assets/socmed/github.svg";
import youtubeIcon from "../assets/socmed/youtube.svg";
import linkedinIcon from "../assets/socmed/linkedin.svg";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section
        id="home"
        className="min-h-screen lg:pt-10 px-4 lg:px-16 font-poppins"
      >
        <div className="pt-12 sm:pt-16 pb-8">
          <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
            <div className="w-full self-center px-4 lg:w-[55%]">
              <h1 className="text-sm font-semibold text-primary sm:text-base md:text-xl">
                Hello, World!{" "}
                <span className="text-default font-bold">I am</span>
                <span className="block font-bold text-dark text-3xl my-1 lg:text-5xl">
                  Hakim Nizami
                </span>
              </h1>
              <h2 className="font-medium text-default text-sm mb-5 sm:text-base lg:text-2xl">
                Student |{" "}
                <span className="text-sky-500 font-semibold">Math</span> &{" "}
                <span className="text-blue-600 font-semibold">Computer</span>{" "}
                <span className="text-red-600 font-semibold">Science</span>{" "}
                Enthusiast
              </h2>

              <div className="w-full grid grid-cols-2 gap-2 lg:gap-5 mt-5 h-fit text-xs">
                <button
                  className="w-full font-semibold text-background bg-primary py-3 rounded-full hover:shadow-lg hover:bg-light transition duration-300 ease-in-out sm:text-base sm:px-8"
                  onClick={() => navigate("/about-me")}
                >
                  About Me
                </button>
                <button className="w-full font-semibold text-background bg-primary py-3 rounded-full hover:shadow-lg hover:bg-light transition duration-300 ease-in-out sm:text-base sm:px-8">
                  Download CV
                </button>
              </div>
            </div>
            <div className="flex justify-center w-full lg:w-2/5 px-10 md:px-48 lg:px-8 py-10">
              <div className="h-full aspect-square relative">
                <div className="border-solid border-light border-2 max-w-72 aspect-square rounded-full shadow-xl overflow-hidden">
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
                  <button className="socmed-button left-[5%] md:left-[3%] top-[5%] md:top-[3%]">
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
                  <button className="socmed-button right-[5%] md:eight-[3%] top-[5%] md:top-[3%]">
                    <div className="shadow-2xl flex items-center justify-center">
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
                  <button className="socmed-button right-[5%] md:right-[3%] bottom-[5%] md:bottom-[3%]">
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
                  <button className="socmed-button left-[5%] md:right-[3%] bottom-[5%] md:bottom-[3%]">
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
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
