import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isItOpen, setIsItOpen] = useState(false);
  const [isItDark, setIsItDark] = useState(false);

  const toggleSwitch = () => {
    setIsItDark(!isItDark);
    if (isItDark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const handleIsItOpen = () => {
    setIsItOpen(!isItOpen);
  };

  const routes = [
    {
      path: "/about-me",
      name: "Acerca de mí",
    },
    {
      path: "/projects",
      name: "Proyectos",
    },
    {
      path: "/contact-me",
      name: "Contáctame",
    },
    {
      path: "/education",
      name: "Educación",
    },
    {
      path: "/skills",
      name: "Habilidades",
    },
  ];

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <header className="flex min-h-[8rem] w-full">
      <nav className="fixed top-0 z-10 flex h-24 w-full flex-col justify-center bg-gray-100 dark:bg-gray-900 xl:flex-row xl:items-center xl:justify-between">
        <ul className="flex w-full items-center justify-between px-2 xl:w-max">
          <li className="flex h-max w-max items-center justify-center">
            <NavLink to="/" className="flex items-center" caseSensitive>
              <span className="inline-block h-12 w-12 bg-logoLight bg-contain bg-center bg-no-repeat dark:bg-logoDark small:h-14 small:w-14 large:h-16 large:w-16"></span>
              <span className="font-serif text-3xl font-semibold text-gray-900 dark:text-gray-50 small:text-4xl">
                Brandon.A
              </span>
            </NavLink>
          </li>
          <li className="h-max w-max">
            <div className="flex items-center justify-center xl:hidden">
              {isItOpen ? (
                <button className="z-20" onClick={handleIsItOpen}>
                  <i className="bx bx-x text-4xl small:text-5xl large:text-6xl"></i>
                </button>
              ) : (
                <button className="z-20" onClick={handleIsItOpen}>
                  <i className="bx bx-menu text-4xl small:text-5xl large:text-6xl"></i>
                </button>
              )}
            </div>
          </li>
        </ul>
        <div
          className={`z-10 w-full bg-gray-100 max-xl:fixed max-xl:top-0 max-xl:h-screen max-xl:transform sm:bg-transparent sm:backdrop-brightness-90 xl:w-max  xl:px-2 xl:backdrop-brightness-100 ${
            isItOpen ? "max-xl:translate-x-0" : "max-xl:translate-x-full"
          } max-xl:transition-transform max-xl:duration-500`}
        >
          <ul className="flex items-center gap-2 text-gray-50 max-xl:h-screen max-xl:flex-col max-xl:justify-center max-xl:bg-gray-100 max-sm:gap-4 small:gap-6 medium:gap-8 sm:absolute sm:right-0 sm:w-96 xl:static xl:w-max">
            <li onClick={handleIsItOpen} className="xl:hidden">
              <NavLink to="/">
                <img
                  className="w-64 object-contain"
                  src="/png/logoFooter.png"
                />
              </NavLink>
            </li>
            {routes.map((route) => (
              <li key={route.path} onClick={handleIsItOpen} className="w-max">
                <NavLink
                  to={route.path}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ""
                      : isActive
                      ? "flex w-36 cursor-pointer justify-center rounded-lg border-b-4 border-b-blue-800 bg-blue-500 p-3 font-serif font-semibold text-gray-900 hover:border-b-green-900 hover:bg-green-600 active:bg-gradient-to-tr active:from-green-500 active:to-green-600"
                      : "flex w-36 cursor-pointer justify-center rounded-lg border border-b-4 border-blue-500 p-3 font-serif font-semibold text-gray-900 hover:border-green-600 hover:bg-green-50 hover:bg-gradient-to-tr active:border-b-green-800 active:bg-gradient-to-tr active:from-green-500 active:to-green-600"
                  }
                  caseSensitive
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
            <li className="absolute right-4 top-[45%] small:right-8 medium:right-12 large:right-16 super:right-24 normal:right-36 sm:right-8 xl:static">
              <div
                className="switch"
                data-ison={isItDark}
                onClick={toggleSwitch}
              >
                <motion.button
                  className={`handle ${isItDark && "bg-black"}`}
                  layout
                  transition={spring}
                ></motion.button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
