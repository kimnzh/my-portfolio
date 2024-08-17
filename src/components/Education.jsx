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
      <section
        id="education"
        className="flex justify-center pt-12 sm:pt-16 2xl:pt-28 px-4 lg:px-16 2xl:px-32"
      >
        <div className="mt-4 lg:mt-6 2xl:mt-8 pb-8">
          <div className="flex flex-wrap justify-center px-4">
            <div className="h-12 md:h-14 xl:h-16 2xl:h-24 mx-auto flex items-center rounded-full bg-slate-900 absolute">
              <h4 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white px-8">
                Education
              </h4>
            </div>
            <div className="px-3 pb-3 pt-8 md:pt-10 xl:pt-12 2xl:pt-20 mt-[22px] md:mt-[26px] xl:mt-[30px] 2xl:mt-[44px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 w-full bg-white rounded-[24px] border-solid border-4 2xl:border-8 border-slate-900">
              {data.schools.map((school) => (
                <div
                  key={school.id}
                  className={`${
                    school.id === data.schools.length
                      ? "md:w-[60%] xl:w-[100%] md:col-span-2 md:justify-self-center xl:col-span-1"
                      : ""
                  }`}
                >
                  <a
                    href={school.link}
                    target="_blank"
                    className="education-cell group"
                  >
                    <div className="m-1 bg-white max-w-full h-48 rounded-[12px] overflow-hidden">
                      <img
                        src={images[school.image]}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mx-1 mb-1">
                      <div className="mt-3 flex justify-center">
                        <h1 className="text-sm xs:text-lg 2xl:text-2xl px-5 rounded-[12px] text-white font-semibold border-solid border-2 border-white md:text-xl">
                          {school.name}
                        </h1>
                      </div>
                      <h1 className="text-center my-1 text-xs xs:text-sm 2xl:text-lg text-white font-semibold md:text-base">
                        Grade: {school.grade}
                      </h1>
                      {school.cells.map((cell) => (
                        <div
                          key={cell.id}
                          className={`mx-1 ${
                            cell.id === school.cells.length ? "mb-1" : "mb-2"
                          } p-3 bg-white max-w-full rounded-[12px] text-xs 2xl:text-base text-slate-900 group-hover:textx-slate-800 font-semibold md:text-sm`}
                        >
                          {cell.major === "" ? (
                            <></>
                          ) : (
                            <div className="mb-2 flex items-center">
                              <span className="max-w-2 h-2 aspect-square mr-2 rounded-full bg-slate-900 group-hover:bg-slate-800 transition-all duration-300"></span>
                              <h6>{cell.major}</h6>
                            </div>
                          )}
                          <div className="grid grid-cols-1 gap-2 xs:flex xs:items-center xs:justify-between">
                            <h6 className="ml-4">{cell.score}</h6>
                            <div className="flex justify-end">
                              <div className="border-solid border-2 border-slate-900 px-2 rounded-[8px] group-hover:border-slate-800 transition-all duration-300">
                                {cell.date}
                              </div>
                            </div>
                          </div>
                          {cell.expected === "" ? (
                            <></>
                          ) : (
                            <div className="flex justify-end pt-2">
                              <div className="border-solid border-2 border-slate-900 px-2 rounded-[8px] group-hover:border-slate-800 transition-all duration-300">
                                Expected {cell.expected}
                              </div>
                            </div>
                          )}
                          {cell.notes.length === 0 ? (
                            <></>
                          ) : (
                            cell.notes.map((note) => (
                              <div
                                key={note.id}
                                className="mt-2 w-full border-solid border-slate-900 border-2 rounded-[8px] group-hover:border-slate-800 transition duration-300"
                              >
                                <h4 className="ml-2 font-bold my-1">NOTE:</h4>
                                <div className="flex items-center mb-2">
                                  <span className="max-w-2 h-2 aspect-square mx-2 rounded-full bg-slate-900 group-hover:bg-slate-700 transition-all duration-300"></span>
                                  <h6 className="mr-2">{note.note}</h6>
                                </div>
                              </div>
                            ))
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
