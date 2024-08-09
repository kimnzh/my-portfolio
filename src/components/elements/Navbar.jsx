import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const navItems = [
  { id: "about-me", text: "About Me", path: "/about-me", current: false },
  { id: "education", text: "Education", path: "/education", current: false },
  { id: "experience", text: "Experience", path: "/experience", current: false },
];

export default function Navbar({ currentId }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentNavItems, setCurrentNavItems] = useState(navItems);
  const navMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

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

  return (
    <header className="h-12 sm:h-16 flex items-center fixed top-0 left-0 right-0 font-poppins bg-primary shadow-md z-[9999]">
      <div className="h-full w-full px-6 sm:px-12 flex justify-between items-center cursor-pointer">
        <div id="home" className="group" onClick={() => navigate("/")}>
          <span className="text-xl sm:text-2xl font-bold text-white">
            Hakim Nizami.
          </span>
        </div>
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
            <ul className="block lg:flex">
              {currentNavItems.map((item, index) => (
                <li
                  key={index}
                  id={item.id}
                  className="group"
                  onClick={() => {
                    handleNavClick();
                    navigate(item.path);
                  }}
                >
                  <div className="text-white mx-8 py-2 flex lg:flex-col justify-center transition duration-300">
                    {item.text}
                    <span
                      className={`${
                        item.current
                          ? "max-w-full transition-none"
                          : "group-hover:max-w-full transition-all duration-500"
                      } bg-white max-w-0 h-[2px] hidden lg:block`}
                      tabIndex="0"
                    ></span>
                  </div>
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
