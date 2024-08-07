import Navbar from "./elements/Navbar";

import data from "../data/experience.json";

import SemarakApresiasiImage from "../assets/experience/SemarakApresiasi.jpg";
import MADOEEImage from "../assets/experience/MADOEE.jpg";
import BETISImage from "../assets/experience/BETIS.jpg";
import TRUIImage from "../assets/experience/TRUI.jpg";

const images = {
  SemarakApresiasi: SemarakApresiasiImage,
  MADOEE: MADOEEImage,
  BETIS: BETISImage,
  TRUI: TRUIImage,
};

export default function Experience() {
  return (
    <div className="flex justify-center">
      <Navbar currentId="experience" />
      <section id="experience" className="min-h-screen xl:px-16">
        <div className="container font-poppins pt-16 sm:pt-20">
          <div className="flex justify-end flex-wrap px-4">
            <div className="flex items-center h-12 my-3 rounded-full bg-primary sm:scale-110 sm:my-4 xl:scale-125 xl:my-6">
              <h4 className="text-2xl font-bold text-background px-8">
                Experience
              </h4>
            </div>
            <ul className="w-full flex flex-col items-end">
              {data.experiences.map((experience) => (
                <li
                  key={experience.id}
                  className={`${
                    experience.id === 1 ? "" : "mt-6"
                  } flex w-full justify-end items-center relative`}
                >
                  <div className="min-w-10 max-w-10 min-h-10 max-h-10 mr-4 rounded-full border-solid border-primary border-2 xs:min-w-20 xs:max-w-20 xs:min-h-20 xs:max-h-20 xs:mr-8 lg:min-w-24 lg:max-w-24 lg:min-h-24 lg:max-h-24 lg:mr-12 overflow-hidden">
                    <img
                      src={images[experience.image]}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="experience-cell">
                    <div className="w-full flex font-semibold mb-3 justify-between items-center text-[10px] xs:text-sm">
                      <h6>{experience.period}</h6>
                      <h6 className="px-3 py-1 text-background bg-primary rounded-lg">
                        {experience.type}
                      </h6>
                    </div>
                    <div className="flex flex-col items-end lg:flex-row lg:items-center">
                      <h1 className="my-2 text-end font-semibold text-dark text-xl xs:text-2xl">
                        {experience.role}
                      </h1>
                      <span className="hidden font-bold mx-2 lg:block">-</span>
                      <h3 className="font-semibold text-dark text-sm xs:text-lg lg:text-2xl">
                        {experience.name}
                      </h3>
                    </div>
                    {experience.desc === "" ? (
                      <></>
                    ) : (
                      <div className="text-default font-semibold mt-2 w-full border-solid border-primary border-2 rounded-lg text-xs xs:text-sm p-2">
                        {experience.desc}
                      </div>
                    )}
                  </div>
                  <span className="max-w-3 h-3 aspect-square rounded-full bg-primary absolute top-2 right-2"></span>
                  <span
                    className={`${
                      experience.id === data.experiences.length
                        ? "bg-inherit"
                        : "bg-primary"
                    } min-w-1 max-w-1 h-full mx-3 scale-y-110 origin-top relative top-4 lg:scale-y-[115%]`}
                  ></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
