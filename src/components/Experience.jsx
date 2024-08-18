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
    <section className="flex justify-center pt-12 sm:pt-16 2xl:pt-28 px-4 lg:px-16 2xl:px-32">
      <div className="pb-8">
        <div className="flex justify-end flex-wrap px-4">
          <div className="h-12 md:h-14 xl:h-16 2xl:h-24 mt-4 lg:mt-6 2xl:mt-8 mb-3 lg:mb-4 2xl:mb-5 mx-auto flex items-center rounded-full bg-slate-900">
            <h4 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white px-8">
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
                <div className="min-w-10 max-w-10 min-h-10 max-h-10 mr-4 rounded-full border-solid border-slate-900 border-2 xs:min-w-20 xs:max-w-20 xs:min-h-20 xs:max-h-20 xs:mr-8 lg:min-w-24 lg:max-w-24 lg:min-h-24 lg:max-h-24 lg:mr-12 overflow-hidden">
                  <img
                    src={images[experience.image]}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="experience-cell">
                  <div className="w-full flex font-semibold mb-3 justify-between items-center text-[10px] xs:text-sm xl:text-base">
                    <h6>{experience.period}</h6>
                    <h6 className="px-3 py-1 text-white bg-slate-900 rounded-lg">
                      {experience.type}
                    </h6>
                  </div>
                  <div className="flex flex-col items-end lg:flex-row lg:items-center">
                    <h1 className="my-2 text-end font-semibold text-slate-900 text-xl xs:text-2xl xl:text-3xl">
                      {experience.role}
                    </h1>
                    <span className="hidden font-bold mx-2 lg:block text-2xl">
                      -
                    </span>
                    <h3 className="font-semibold text-slate-900 text-sm xs:text-lg lg:text-2xl xl:text-3xl">
                      {experience.name}
                    </h3>
                  </div>
                  {experience.desc === "" ? (
                    <></>
                  ) : (
                    <div className="text-text-slate-900 font-semibold mt-2 w-full border-solid border-slate-900 border-2 rounded-lg text-xs xs:text-sm lg:text-base 2xl:text-xl p-2">
                      {experience.desc}
                    </div>
                  )}
                </div>
                <span className="max-w-3 h-3 aspect-square rounded-full bg-slate-900 absolute top-2 right-2"></span>
                <span
                  className={`${
                    experience.id === data.experiences.length
                      ? ""
                      : "scale-y-110 lg:scale-y-[115%]"
                  } bg-slate-900 min-w-1 max-w-1 h-full mx-3 origin-top relative top-4 rounded-b-full`}
                ></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
