import { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";

import lightImage from "../../assets/symbol/sun.svg";
import darkImage from "../../assets/symbol/moon.svg";

const navItems = [
  { id: "about-me", text: "About Me", name: "AboutMe" },
  { id: "education", text: "Education", name: "Education" },
  { id: "experience", text: "Experience", name: "Experience" },
  { id: "projects", text: "Projects", name: "Projects" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const navMenuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const darkModeRef = useRef(null);

  // Dark toggle
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  const toggleDark = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
      }
      return newMode;
    });
  };

  // To handle the navbar when it is scrolled (it becomes blurred)
  useEffect(() => {
    const handleScroll = () => {
      const fixedNav = headerRef.current.offsetTop;
      if (window.scrollY > fixedNav) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle to close the navbar when clicked outside the elements
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !hamburgerRef.current.contains(e.target) &&
        !navMenuRef.current.contains(e.target) &&
        !darkModeRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Toggle the states
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Reference for the header tag
  const headerRef = useRef(null);

  return (
    <header
      ref={headerRef}
      className={`${isMenuOpen ? "bg-opacity-90 dark:bg-opacity-90 sm:shadow-lg lg:bg-opacity-70 lg:backdrop-blur-md dark:lg:bg-opacity-70 dark:lg:backdrop-blur-md" : ""} ${
        !isMenuOpen && isNavbarFixed
          ? "bg-opacity-90 shadow-lg dark:bg-opacity-90 lg:bg-opacity-70 lg:backdrop-blur-md dark:lg:bg-opacity-70 dark:lg:backdrop-blur-md"
          : ""
      } fixed left-0 right-0 top-0 z-[9999] flex h-12 items-center bg-white transition-all duration-300 dark:bg-slate-950 sm:h-16 2xl:h-20`}
    >
      <div className="flex h-full w-full cursor-pointer items-center justify-between px-6 text-slate-900 dark:text-white sm:px-12">
        <Link
          className="transition hover:text-slate-700 dark:hover:text-slate-300"
          to="home"
          smooth={true}
          duration={500}
        >
          <span className="text-xl font-extrabold sm:text-2xl 2xl:text-4xl">
            Hakim Nizami.
          </span>
        </Link>
        <div className="flex items-center">
          <button ref={darkModeRef} onClick={toggleDark}>
            <div
              className={`${
                isDarkMode
                  ? "bg-white hover:bg-slate-200"
                  : "bg-slate-900 hover:bg-slate-700"
              } relative mr-14 aspect-square w-7 overflow-hidden rounded-full transition-all duration-300 sm:mr-8 sm:w-9 2xl:w-11`}
            >
              <div
                className={`absolute h-full w-full p-1 transition duration-300 ${
                  isDarkMode ? "-translate-x-[200%]" : ""
                }`}
              >
                <img
                  src={lightImage}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div
                className={`absolute h-full w-full p-1 transition duration-300 ${
                  isDarkMode ? "" : "translate-x-[200%]"
                }`}
              >
                <img
                  src={darkImage}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </button>
          <button
            ref={hamburgerRef}
            id="hamburger"
            name="hamburger"
            className={`${
              isMenuOpen ? "hamburger-active" : ""
            } group absolute right-6 block scale-90 lg:hidden`}
            onClick={toggleMenu}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          <nav
            ref={navMenuRef}
            id="nav-menu"
            className={`${isMenuOpen ? "" : "scale-y-0"} ${
              isMenuOpen || isNavbarFixed
                ? "bg-opacity-90 dark:bg-opacity-90 lg:bg-opacity-70 dark:lg:bg-opacity-70"
                : ""
            } absolute left-0 right-0 top-full z-[9999] w-full origin-top rounded-b-lg bg-white py-5 shadow-lg transition duration-300 dark:bg-slate-950 sm:left-auto sm:right-4 sm:max-w-64 sm:rounded-lg lg:static lg:h-full lg:max-w-full lg:scale-y-100 lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none lg:transition-none dark:lg:bg-transparent`}
          >
            <ul className="block lg:flex 2xl:text-xl">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="group font-medium transition max-lg:hover:text-slate-700 dark:max-lg:hover:text-slate-300"
                >
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={500}
                    className="mx-8 flex justify-center py-2 lg:flex-col"
                    onClick={handleNavClick}
                  >
                    {item.text}
                    <span
                      className={`${
                        item.current
                          ? "max-w-full transition-none"
                          : "transition-all duration-500 group-hover:max-w-full"
                      } hidden h-[2px] max-w-0 bg-slate-900 dark:bg-white lg:block 2xl:h-[3px]`}
                      tabIndex="0"
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
