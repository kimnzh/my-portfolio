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
    <section className="flex justify-center px-4 pt-12 sm:pt-16 lg:px-16 2xl:px-32 2xl:pt-28">
      <div className="pb-8">
        <div className="flex flex-wrap justify-end px-4">
          <div className="mx-auto mb-3 mt-4 flex h-12 items-center rounded-full bg-slate-900 transition duration-300 dark:bg-white md:h-14 lg:mb-4 lg:mt-6 xl:h-16 2xl:mb-5 2xl:mt-8 2xl:h-24">
            <h4 className="px-8 text-2xl font-bold text-white transition duration-300 dark:text-slate-950 md:text-3xl xl:text-4xl 2xl:text-5xl">
              Experience
            </h4>
          </div>
          <ul className="flex w-full flex-col items-end">
            {data.experiences.map((experience) => (
              <li
                key={experience.id}
                className={`${
                  experience.id === 1 ? "" : "mt-6"
                } relative flex w-full items-center justify-end`}
              >
                <div className="mr-4 max-h-10 min-h-10 min-w-10 max-w-10 overflow-hidden rounded-full border-2 border-solid border-slate-900 transition duration-300 dark:border-white xs:mr-8 xs:max-h-20 xs:min-h-20 xs:min-w-20 xs:max-w-20 lg:mr-12 lg:max-h-24 lg:min-h-24 lg:min-w-24 lg:max-w-24">
                  <img
                    src={images[experience.image]}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="experience-cell">
                  <div className="mb-3 flex w-full items-center justify-between text-[10px] font-semibold dark:border-white xs:text-sm xl:text-base">
                    <h6>{experience.period}</h6>
                    <h6 className="rounded-lg bg-slate-900 px-3 py-1 text-white transition duration-300 dark:bg-white dark:text-slate-950">
                      {experience.type}
                    </h6>
                  </div>
                  <div className="flex flex-col items-end lg:flex-row lg:items-center">
                    <h1 className="my-2 text-end text-xl font-semibold xs:text-2xl xl:text-3xl">
                      {experience.role}
                    </h1>
                    <span className="mx-2 hidden text-2xl font-bold lg:block">
                      -
                    </span>
                    <h3 className="text-sm font-semibold xs:text-lg lg:text-2xl xl:text-3xl">
                      {experience.name}
                    </h3>
                  </div>
                  {experience.desc === "" ? (
                    <></>
                  ) : (
                    <div className="mt-2 w-full rounded-lg border-2 border-solid border-slate-900 p-2 text-xs font-semibold text-slate-950 transition duration-300 dark:border-white dark:text-white xs:text-sm lg:text-base 2xl:text-xl">
                      {experience.desc}
                    </div>
                  )}
                </div>
                <span className="absolute right-2 top-2 aspect-square h-3 max-w-3 rounded-full bg-slate-900 transition duration-300 dark:bg-white"></span>
                <span
                  className={`${
                    experience.id === data.experiences.length
                      ? ""
                      : "scale-y-110 lg:scale-y-[115%]"
                  } relative top-4 mx-3 h-full min-w-1 max-w-1 origin-top rounded-b-full bg-slate-900 transition duration-300 dark:bg-white`}
                ></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
