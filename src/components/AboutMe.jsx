export default function AboutMe() {
  return (
    <section className="px-4 pt-12 sm:pt-16 lg:px-16 2xl:px-32 2xl:pt-28">
      <div className="flex flex-col px-4">
        <div className="mx-auto mb-3 mt-4 flex h-12 items-center rounded-full bg-slate-900 transition-all duration-300 dark:bg-white md:h-14 lg:mb-4 lg:mt-6 xl:h-16 2xl:mb-5 2xl:mt-8 2xl:h-24">
          <h4 className="px-8 text-2xl font-bold text-white transition-all duration-300 dark:text-slate-950 md:text-3xl xl:text-4xl 2xl:text-5xl">
            About Me
          </h4>
        </div>
        <div className="w-full">
          <p className="font-semibold leading-8 text-slate-900 transition-all duration-300 dark:text-white sm:text-lg sm:leading-9 md:text-[1.25rem] xl:text-[1.375rem] xl:leading-loose 2xl:text-[2rem]">
            My full name is{" "}
            <span className="dark:glowing-text font-bold">
              Muhamad Hakim Nizami
            </span>
            , usually called{" "}
            <span className="dark:glowing-text font-bold">Hakim</span>. I am a
            first-year{" "}
            <a
              href="https://cs.ui.ac.id/"
              target="_blank"
              className="group hover:underline"
            >
              <span className="dark:glowing-text text-blue-600 group-active:text-blue-500">
                Computer
              </span>{" "}
              <span className="dark:glowing-text text-red-600 group-active:text-red-500">
                Science
              </span>
            </a>{" "}
            student at the{" "}
            <a
              href="https://www.ui.ac.id/"
              target="_blank"
              className="group hover:underline"
            >
              <span className="dark:glowing-text text-yellow-600 group-active:text-yellow-500">
                University of Indonesia
              </span>
            </a>
            , formerly concentrated in{" "}
            <a
              href="https://eng.ui.ac.id/"
              target="_blank"
              className="group hover:underline"
            >
              <span className="dark:glowing-text text-blue-600 group-active:text-blue-500">
                Computer Engineering
              </span>
            </a>{" "}
            at the same university. I have always been interested in the field
            of mathematics, analytics, and computational thinking. I also have
            the interest on learning the field of Information Technology,
            especially in{" "}
            <span className="dark:glowing-text text-sky-500">Data Science</span>{" "}
            and{" "}
            <span className="dark:glowing-text text-sky-500">
              Artificial Intelligence
            </span>
            . Nevertheless, I still need to look ahead for challenges and new
            exciting things to learn, engaged in personal and professional
            development for my future career.
          </p>
        </div>
      </div>
    </section>
  );
}
