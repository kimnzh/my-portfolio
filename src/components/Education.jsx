import data from "../data/education.json";

import SMPN147Image from "../assets/education/SMPN147.jpg";
import SMAN64Image from "../assets/education/SMAN64.jpg";
import UIImage from "../assets/education/UI.jpg";

const images = {
  SMPN147: SMPN147Image,
  SMAN64: SMAN64Image,
  UI: UIImage,
};

export default function Education() {
  return (
    <>
      <section className="flex justify-center px-4 pt-12 sm:pt-16 lg:px-16 2xl:px-32 2xl:pt-28">
        <div className="mt-4 pb-8 lg:mt-6 2xl:mt-8">
          <div className="flex flex-wrap justify-center px-4">
            <div className="absolute mx-auto flex h-12 items-center rounded-full bg-slate-900 transition duration-300 dark:bg-white md:h-14 xl:h-16 2xl:h-24">
              <h4 className="px-8 text-2xl font-bold text-white transition duration-300 dark:text-slate-950 md:text-3xl xl:text-4xl 2xl:text-5xl">
                Education
              </h4>
            </div>
            <div className="mt-[22px] grid w-full grid-cols-1 gap-3 rounded-[24px] border-4 border-solid border-slate-900 bg-white px-3 pb-3 pt-8 transition duration-300 dark:border-white dark:bg-slate-950 md:mt-[26px] md:grid-cols-2 md:pt-10 xl:mt-[30px] xl:grid-cols-3 xl:pt-12 2xl:mt-[44px] 2xl:border-8 2xl:pt-20">
              {data.schools.map((school) => (
                <div
                  key={school.id}
                  className={`${
                    school.id === data.schools.length
                      ? "md:col-span-2 md:w-[60%] md:justify-self-center xl:col-span-1 xl:w-[100%]"
                      : ""
                  }`}
                >
                  <a
                    href={school.link}
                    target="_blank"
                    className="education-cell group"
                  >
                    <div className="m-1 h-48 max-w-full overflow-hidden rounded-[12px]">
                      <img
                        src={images[school.image]}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="mx-1 mb-1">
                      <div className="mt-3 flex justify-center">
                        <h1 className="rounded-[12px] border-2 border-solid border-white px-5 text-sm font-semibold text-white transition duration-300 dark:border-slate-950 dark:text-slate-950 xs:text-lg md:text-xl 2xl:text-2xl">
                          {school.name}
                        </h1>
                      </div>
                      <h1 className="my-1 text-center text-xs font-semibold text-white transition duration-300 dark:text-slate-950 xs:text-sm md:text-base 2xl:text-lg">
                        Grade: {school.grade}
                      </h1>
                      {school.cells.map((cell) => (
                        <div
                          key={cell.id}
                          className={`mx-1 ${
                            cell.id === school.cells.length ? "mb-1" : "mb-2"
                          } max-w-full rounded-[12px] bg-white p-3 text-xs font-semibold text-slate-900 transition duration-300 group-hover:text-slate-800 dark:bg-slate-950 dark:text-white dark:group-hover:text-slate-300 md:text-sm 2xl:text-base`}
                        >
                          {cell.major === "" ? (
                            <></>
                          ) : (
                            <div className="mb-2 flex items-center">
                              <span className="mr-2 aspect-square h-2 max-w-2 rounded-full bg-slate-900 transition-all duration-300 group-hover:bg-slate-800 dark:bg-white dark:group-hover:bg-slate-300"></span>
                              <h6>{cell.major}</h6>
                            </div>
                          )}
                          <div className="grid grid-cols-1 gap-2 xs:flex xs:items-center xs:justify-between">
                            <h6 className="ml-4">{cell.score}</h6>
                            <div className="flex justify-end">
                              <div className="rounded-[8px] border-2 border-solid border-slate-900 px-2 text-slate-900 transition-all duration-300 group-hover:border-slate-800 dark:border-white dark:text-white dark:group-hover:border-slate-300 dark:group-hover:text-slate-300">
                                {cell.date}
                              </div>
                            </div>
                          </div>
                          {cell.expected === "" ? (
                            <></>
                          ) : (
                            <div className="flex justify-end pt-2">
                              <div className="rounded-[8px] border-2 border-solid border-slate-900 px-2 text-slate-900 transition-all duration-300 group-hover:border-slate-800 dark:border-white dark:text-white dark:group-hover:border-slate-300 dark:group-hover:text-slate-300">
                                Expected {cell.expected}
                              </div>
                            </div>
                          )}
                          {cell.notes.length === 0 ? (
                            <></>
                          ) : (
                            <div className="mt-2 w-full rounded-[8px] border-2 border-solid border-slate-900 text-slate-900 transition duration-300 group-hover:border-slate-800 dark:border-white dark:text-white dark:group-hover:border-slate-300 dark:group-hover:text-slate-300">
                              <h4 className="my-1 ml-2 font-bold">NOTE:</h4>
                              {cell.notes.map((note) => (
                                <div
                                  key={note.id}
                                  className="mb-2 flex items-center"
                                >
                                  <span className="mx-2 aspect-square h-2 max-w-2 rounded-full bg-slate-900 transition-all duration-300 group-hover:bg-slate-800 dark:bg-white dark:group-hover:bg-slate-300"></span>
                                  <h6 className="mr-2">{note.note}</h6>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
