import Navbar from "./elements/Navbar";

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
      <Navbar currentId="education" />
      <section
        id="education"
        className="min-h-screen flex justify-center lg:px-16"
      >
        <div className="container font-poppins pt-16 sm:pt-20">
          <div className="flex flex-wrap justify-center px-4">
            <div className="absolute flex items-center bg-primary h-12 my-3 rounded-full sm:scale-110 sm:my-4 xl:scale-125">
              <h4 className="text-2xl font-bold text-background px-8">
                Education
              </h4>
            </div>
            <div className="flex justify-center gap-3 flex-wrap w-full aspect-square bg-background rounded-[24px] border-solid border-4 border-primary mt-9">
              {data.schools.map((school) => (
                <a
                  key={school.id}
                  href={school.link}
                  target="_blank"
                  className={`${
                    school.id === 1
                      ? "education-cell-first"
                      : school.id === data.schools.length
                      ? "education-cell-last"
                      : "education-cell"
                  } group`}
                >
                  <div className="m-1 bg-background max-w-full h-48 rounded-[12px] overflow-hidden">
                    <img
                      src={images[school.image]}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mx-1 mb-1">
                    <div className="mt-3 flex justify-center">
                      <h1 className="text-sm xs:text-lg px-5 rounded-[12px] text-background font-semibold border-solid border-2 border-background md:text-xl">
                        {school.name}
                      </h1>
                    </div>
                    <h1 className="text-center my-1 text-xs xs:text-sm text-background font-semibold md:text-base">
                      Grade: {school.grade}
                    </h1>
                    {school.cells.map((cell) => (
                      <div
                        key={cell.id}
                        className="mx-1 mb-2 p-3 bg-background max-w-full rounded-[12px] text-xs text-default font-semibold md:text-sm"
                      >
                        {cell.major === "" ? (
                          <></>
                        ) : (
                          <div className="mb-2 flex items-center">
                            <span className="max-w-2 h-2 aspect-square mr-2 rounded-full bg-primary group-hover:bg-light transition-all duration-300"></span>
                            <h6>{cell.major}</h6>
                          </div>
                        )}
                        <div className="grid grid-cols-1 gap-2 xs:flex xs:items-center xs:justify-between">
                          <h6 className="ml-4">{cell.score}</h6>
                          <div className="flex justify-end">
                            <div className="border-solid border-2 border-primary px-2 rounded-[8px] group-hover:border-light transition-all duration-300">
                              {cell.date}
                            </div>
                          </div>
                        </div>
                        {cell.expected === "" ? (
                          <></>
                        ) : (
                          <div className="flex justify-end pt-2">
                            <div className="border-solid border-2 border-primary px-2 rounded-[8px] group-hover:border-light transition-all duration-300">
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
                              className="mt-2 w-full border-solid border-primary border-2 rounded-[8px] group-hover:border-light transition duration-300"
                            >
                              <h4 className="ml-2 font-bold my-1">NOTE:</h4>
                              <div className="flex items-center mb-2">
                                <span className="max-w-2 h-2 aspect-square mx-2 rounded-full bg-primary group-hover:bg-light transition-all duration-300"></span>
                                <h6 className="mr-2">{note.note}</h6>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
