import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";

export default function AboutMe() {
  return (
    <>
      <Navbar currentId="about-me" />
      <section id="about" className="min-h-screen px-4 lg:px-16 font-poppins">
        <div className="pt-20 sm:pt-24 px-4 flex flex-wrap">
          <div className="h-12 xl:mt-4 mb-4 sm:mb-6 xl:mb-8 flex items-center rounded-full bg-primary sm:scale-110 xl:scale-125">
            <h4 className="text-2xl font-bold text-background px-8">
              About Me
            </h4>
          </div>
          <div className="w-full">
            <p className="text-base text-default font-semibold leading-8 sm:text-lg sm:leading-9">
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
              especially in <span className="text-sky-500">Data Science</span>{" "}
              and <span className="text-sky-500">Artificial Intelligence</span>.
              Nevertheless, I still need to look ahead for challenges and new
              exciting things to learn, engaged in personal and professional
              development for my future career.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
