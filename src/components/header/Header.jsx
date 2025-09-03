import { useState } from "react";
import { Link } from "react-router-dom";
import BopheloMedLogo from "../../assets/images/bophelomedlogo.jpg";
import HomeIcon from "../../assets/gifs/home.gif";
import AboutIcon from "../../assets/gifs/info.gif";
import CareerIcon from "../../assets/gifs/work.gif";
import ServicesIcon from "../../assets/gifs/helpdesk.gif";
import ContactIcon from "../../assets/gifs/contact.gif";
import DevDocLogo from "../../sig/dev-doc-logo.svg";
import "./Header.css";

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

// SVG Hamburger Menu Component
const HamburgerIcon = ({ isOpen }) => (
  <svg
    className="hamburger-svg"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="hamburger-line"
      d="M3 6h18"
      style={{
        transform: isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none',
      }}
    />
    <path
      className="hamburger-line"
      d="M3 12h18"
      style={{
        opacity: isOpen ? 0 : 1,
      }}
    />
    <path
      className="hamburger-line"
      d="M3 18h18"
      style={{
        transform: isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none',
      }}
    />
  </svg>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <figure className="header-logo">
            <img
              src={BopheloMedLogo}
              alt="Bophelo EMS company logo"
            />
          </figure>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <ul className="nav-list">
              {NavItemsObject.map((navItem) => (
                <li key={navItem.navItemId} className="nav-item">
                  <Link to={navItem.navItemLink} className="nav-link">
                    <figure className="nav-icon">
                      <img
                        src={navItem.navItemIcon}
                        alt={navItem.navItemLabel + " Icon"}
                      />
                    </figure>
                    <span>{navItem.navItemLabel}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* DevDoc Logo - Hidden on mobile, visible on desktop */}
          <figure className="devdoc-logo">
            <img src={DevDocLogo} alt="Dev Doc Logo" />
          </figure>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <HamburgerIcon isOpen={isMobileMenuOpen} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={closeMobileMenu}
          />

          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <div className="mobile-menu-content">
              {/* DevDoc Logo - Visible on mobile */}
              <div className="mobile-devdoc">
                <img src={DevDocLogo} alt="Dev Doc Logo" />
              </div>

              <nav>
                <ul className="mobile-nav-list">
                  {NavItemsObject.map((navItem) => (
                    <li key={navItem.navItemId} className="mobile-nav-item">
                      <Link
                        to={navItem.navItemLink}
                        className="mobile-nav-link"
                        onClick={closeMobileMenu}
                      >
                        <figure className="mobile-nav-icon">
                          <img
                            src={navItem.navItemIcon}
                            alt={navItem.navItemLabel + " Icon"}
                          />
                        </figure>
                        <span>{navItem.navItemLabel}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </>
      )}

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="header-spacer" />
    </>
  );
};

export default Header;