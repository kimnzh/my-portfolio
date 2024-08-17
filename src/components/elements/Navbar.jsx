import { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";

const navItems = [
  { id: "about-me", text: "About Me", name: "AboutMe", current: false },
  { id: "education", text: "Education", name: "Education", current: false },
  { id: "experience", text: "Experience", name: "Experience", current: false },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const navMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // // Dark toggle
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleDark = () => {
  //   setIsDarkMode((prevMode) => {
  //     const newMode = !prevMode;
  //     if (newMode) {
  //       document.documentElement.classList.add("dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //     }
  //     return newMode;
  //   });
  // };

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
        !navMenuRef.current.contains(e.target)
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
      className={`${isMenuOpen ? "navbar-blur sm:shadow-lg" : ""} 
        ${
          !isMenuOpen && isNavbarFixed ? "navbar-blur shadow-lg" : ""
        } h-12 sm:h-16 2xl:h-20 flex items-center fixed top-0 left-0 right-0 bg-white z-[9999] transition duration-300`}
    >
      <div className="text-slate-900 h-full w-full px-6 sm:px-12 flex justify-between items-center cursor-pointer">
        <Link
          className="hover:text-slate-800 transition duration-300"
          to="home"
          smooth={true}
          duration={500}
        >
          <span className="text-xl sm:text-2xl 2xl:text-4xl font-extrabold">
            Hakim Nizami.
          </span>
        </Link>
        <div className="flex items-center">
          {/* <div className="flex bg-blue-600">
            <span>light</span>
            <input type="checkbox"></input>
            <label htmlFor="dark-toggle" onClick={toggleDark}></label>
            <span>dark</span>
          </div> */}
          <button
            ref={hamburgerRef}
            id="hamburger"
            name="hamburger"
            className={`${
              isMenuOpen ? "hamburger-active" : ""
            } block absolute right-6 scale-90 group lg:hidden`}
            onClick={toggleMenu}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          <nav
            ref={navMenuRef}
            id="nav-menu"
            className={`${
              isMenuOpen ? "navbar-blur lg:navbar-blur-none" : "scale-y-0"
            } ${
              isNavbarFixed ? "navbar-blur lg:navbar-blur-none" : ""
            } bg-white lg:bg-transparent lg:scale-y-100 shadow-lg w-full sm:max-w-64 lg:max-w-full lg:h-full py-5 lg:p-0 absolute lg:static top-full right-0 sm:right-4 left-0 sm:left-auto rounded-b-lg sm:rounded-lg lg:rounded-none lg:shadow-none transition lg:transition-none duration-300 origin-top z-[9999]`}
          >
            <ul className="block lg:flex 2xl:text-xl">
              {navItems.map((item, index) => (
                <li key={index} className="font-medium group">
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={500}
                    className="mx-8 py-2 flex lg:flex-col justify-center"
                    onClick={handleNavClick}
                  >
                    {item.text}
                    <span
                      className={`${
                        item.current
                          ? "max-w-full transition-none"
                          : "group-hover:max-w-full transition-all duration-500"
                      } bg-slate-900 max-w-0 h-[2px] 2xl:h-[3px] hidden lg:block`}
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

Navbar.propTypes = {
  currentId: PropTypes.string.isRequired,
};
