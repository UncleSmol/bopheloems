import { useState } from "react";
import { Link } from "react-router-dom";
import BopheloMedLogo from "../../assets/images/bophelomedlogo.jpg";
import HomeIcon from "../../assets/gifs/home.gif";
import AboutIcon from "../../assets/gifs/info.gif";
import CareerIcon from "../../assets/gifs/work.gif";
import ServicesIcon from "../../assets/gifs/helpdesk.gif";
import ContactIcon from "../../assets/gifs/contact.gif";
import DevDocLogo from "../../sig/dev-doc-logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const NavItemsObject = [
  {
    navItemId: 1,
    navItemLabel: "HOME",
    navItemLink: "/",
    navItemIcon: HomeIcon,
  },
  {
    navItemId: 2,
    navItemLabel: "ABOUT",
    navItemLink: "/about",
    navItemIcon: AboutIcon,
  },
  {
    navItemId: 3,
    navItemLabel: "CAREERS",
    navItemLink: "/careers",
    navItemIcon: CareerIcon,
  },
  {
    navItemId: 4,
    navItemLabel: "SERVICES",
    navItemLink: "/services",
    navItemIcon: ServicesIcon,
  },
  {
    navItemId: 5,
    navItemLabel: "CONTACT",
    navItemLink: "/contact",
    navItemIcon: ContactIcon,
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-header flex h-[60px] items-center justify-between bg-surface px-md py-sm shadow-md">
      <figure className="flex-shrink-0">
        <img
          className="h-14 w-14 object-contain"
          src={BopheloMedLogo}
          alt="Bophelo EMS company logo"
        />
      </figure>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex items-center justify-end space-x-lg font-body text-text">
          {NavItemsObject.map((navItem) => (
            <li key={navItem.navItemId}>
              <Link
                to={navItem.navItemLink}
                className="flex items-center gap-2xs transition-colors duration-normal hover:text-primary-dark"
              >
                <figure className="h-6 w-6 flex-shrink-0">
                  <img
                    src={navItem.navItemIcon}
                    alt={navItem.navItemLabel + " Icon"}
                    className="h-full w-full object-contain"
                  />
                </figure>
                <span className="font-bold text-sm tracking-wide">
                  {navItem.navItemLabel}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* DevDoc Signature */}
      <figure className="hidden lg:block">
        <img className="h-6" src={DevDocLogo} alt="Dev Doc Logo" />
      </figure>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          className="text-text-muted hover:text-primary transition-colors duration-normal focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation (Conditional) */}
      <div
        className={`fixed top-[60px] left-0 right-0 h-[calc(100vh-60px)] z-modal bg-surface p-md transition-transform duration-normal ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col space-y-md">
          {NavItemsObject.map((navItem) => (
            <li key={navItem.navItemId} onClick={toggleMobileMenu}>
              <Link
                to={navItem.navItemLink}
                className="flex items-center gap-sm p-sm rounded-md transition-colors duration-normal hover:bg-surface-alt"
              >
                <figure className="h-8 w-8 flex-shrink-0">
                  <img
                    src={navItem.navItemIcon}
                    alt={navItem.navItemLabel + " Icon"}
                    className="h-full w-full object-contain"
                  />
                </figure>
                <span className="font-title text-lg font-bold text-primary">
                  {navItem.navItemLabel}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;