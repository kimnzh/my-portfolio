import portfolioImage from "../assets/projects/portfolio.png";

export default function Projects() {
  return (
    <section className="pt-12 sm:pt-16 2xl:pt-28 px-4 lg:px-16 2xl:px-32">
      <div className="pb-8 px-4 flex items-center flex-col">
        <div className="h-12 md:h-14 xl:h-16 2xl:h-24 mt-4 lg:mt-6 2xl:mt-8 mb-3 lg:mb-4 2xl:mb-5 mx-auto flex items-center rounded-full bg-slate-900">
          <h4 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-background px-8">
            Projects
          </h4>
        </div>
        <div className="max-w-[48rem] h-fit px-4 relative">
          <a
            href="https://kimnzh.github.io/my-portfolio/"
            target="_blank"
            className="group"
          >
            <div className="w-full h-full p-3 sm:p-6 bg-slate-900 group-hover:bg-slate-800 group-hover:scale-[103%] transition rounded-[12px] sm:rounded-[24px] text-white">
              <div className="max-w-full rounded-[4px] sm:rounded-[8px] overflow-hidden">
                <img
                  src={portfolioImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold my-4">
                Portfolio Website
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
                The one you&apos;re looking at right now. This website serves as
                my portofolio as well as my own personal website to document the
                progress I&apos;ve made in my professional career.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
