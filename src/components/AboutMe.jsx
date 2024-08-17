export default function AboutMe() {
  return (
    <section className="pt-12 sm:pt-16 2xl:pt-28 px-4 lg:px-16 2xl:px-32">
      <div className="px-4 flex flex-wrap">
        <div className="h-12 md:h-14 xl:h-16 2xl:h-24 mt-4 lg:mt-6 2xl:mt-8 mb-3 lg:mb-4 2xl:mb-5 mx-auto flex items-center rounded-full bg-slate-900">
          <h4 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-background px-8">
            About Me
          </h4>
        </div>
        <div className="w-full">
          <p className="md:text-[1.25rem] xl:text-[1.375rem] xl:leading-loose 2xl:text-[2rem] text-slate-900 font-semibold leading-8 sm:text-lg sm:leading-9">
            My full name is{" "}
            <span className="font-bold">Muhamad Hakim Nizami</span>, usually
            called <span className="font-bold">Hakim</span>. I am a first-year{" "}
            <a
              href="https://cs.ui.ac.id/"
              target="_blank"
              className="hover:underline group"
            >
              <span className="text-blue-600 group-active:text-blue-500">
                Computer
              </span>{" "}
              <span className="text-red-600 group-active:text-red-500">
                Science
              </span>
            </a>{" "}
            student at the{" "}
            <a
              href="https://www.ui.ac.id/"
              target="_blank"
              className="hover:underline group"
            >
              <span className="text-yellow-600 group-active:text-yellow-500">
                University of Indonesia
              </span>
            </a>
            , formerly concentrated in{" "}
            <a
              href="https://eng.ui.ac.id/"
              target="_blank"
              className="hover:underline group"
            >
              <span className="text-blue-600 group-active:text-blue-500">
                Computer Engineering
              </span>
            </a>{" "}
            at the same university. I have always been interested in the field
            of mathematics, analytics, and computational thinking. I also have
            the interest on learning the field of Information Technology,
            especially in <span className="text-sky-500">Data Science</span> and{" "}
            <span className="text-sky-500">Artificial Intelligence</span>.
            Nevertheless, I still need to look ahead for challenges and new
            exciting things to learn, engaged in personal and professional
            development for my future career.
          </p>
        </div>
      </div>
    </section>
  );
}
