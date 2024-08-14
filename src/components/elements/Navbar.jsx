import { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";

const navItems = [
  { id: "about-me", text: "About Me", name: "AboutMe", current: false },
  { id: "education", text: "Education", name: "Education", current: false },
  { id: "experience", text: "Experience", name: "Experience", current: false },
];

export default function Navbar({ currentId }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentNavItems, setCurrentNavItems] = useState(navItems);
  const navMenuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

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

  useEffect(() => {
    setCurrentNavItems(
      navItems.map((item) => ({
        ...item,
        current: item.id === currentId,
      }))
    );
  }, [currentId]);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const headerRef = useRef(null);

  return (
    <header
      ref={headerRef}
      className={`${
        isNavbarFixed ? "sm:navbar-blur" : ""
      } h-12 sm:h-16 2xl:h-20 flex items-center fixed top-0 left-0 right-0 bg-primary shadow-md z-[9999]`}
    >
      <div className="h-full w-full px-6 sm:px-12 flex justify-between items-center cursor-pointer">
        <Link to="home" smooth={true} duration={500}>
          <span className="text-xl sm:text-2xl 2xl:text-4xl font-bold text-white">
            Hakim Nizami.
          </span>
        </Link>
        <div className="flex items-center">
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
              isMenuOpen ? "" : "scale-y-0"
            } lg:scale-y-100 w-full sm:max-w-64 lg:max-w-full lg:h-full py-5 lg:p-0 absolute lg:static top-full right-0 sm:right-4 left-0 sm:left-auto bg-primary lg:bg-transparent rounded-b-lg sm:rounded-lg lg:rounded-none transition lg:transition-none duration-300 origin-top z-[9999]`}
          >
            <ul className="block lg:flex text-white 2xl:text-xl">
              {currentNavItems.map((item, index) => (
                <li key={index} className="group">
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
                      } bg-white max-w-0 h-[2px] 2xl:h-[3px] hidden lg:block`}
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
