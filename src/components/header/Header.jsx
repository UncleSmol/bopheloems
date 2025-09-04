import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import BopheloMedLogo from "../../assets/images/bophelomedlogo.jpg";
import HomeIcon from "../../assets/gifs/home.gif";
import AboutIcon from "../../assets/gifs/info.gif";
import CareerIcon from "../../assets/gifs/work.gif";
import ServicesIcon from "../../assets/gifs/helpdesk.gif";
import ContactIcon from "../../assets/gifs/contact.gif";
import DevDocLogo from "../../sig/dev-doc-logo.svg";

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

// Animated SVG Hamburger Menu Component
const HamburgerIcon = ({ isOpen }) => (
  <motion.svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="hamburger-svg"
  >
    <motion.path
      d="M3 6h18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      animate={{
        rotate: isOpen ? 45 : 0,
        y: isOpen ? 6 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
    <motion.path
      d="M3 12h18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      animate={{
        opacity: isOpen ? 0 : 1,
      }}
      transition={{ duration: 0.2 }}
    />
    <motion.path
      d="M3 18h18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      animate={{
        rotate: isOpen ? -45 : 0,
        y: isOpen ? -6 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
  </motion.svg>
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
          <motion.figure
            className="header-logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={BopheloMedLogo} alt="Bophelo EMS company logo" />
          </motion.figure>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <ul className="nav-list">
              {NavItemsObject.map((navItem, index) => (
                <motion.li
                  key={navItem.navItemId}
                  className="nav-item"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link to={navItem.navItemLink} className="nav-link">
                    <figure className="nav-icon">
                      <img
                        src={navItem.navItemIcon}
                        alt={navItem.navItemLabel + " Icon"}
                      />
                    </figure>
                    <span>{navItem.navItemLabel}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* DevDoc Logo - Hidden on desktop, visible on mobile */}
          <motion.figure
            className="devdoc-logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img src={DevDocLogo} alt="Dev Doc Logo" />
          </motion.figure>

          {/* Mobile Menu Button */}
          <motion.button
            className="mobile-menu-btn z-[99]"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            whileTap={{ scale: 0.95 }}
          >
            <HamburgerIcon isOpen={isMobileMenuOpen} />
          </motion.button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              className="mobile-menu"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="mobile-menu-content">
                {/* DevDoc Logo - Visible on mobile */}
                <motion.div
                  className="mobile-devdoc"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <a href="https://unclesmol.github.io/dev-doc">
                    <span className="text-sm text-gray-400">Developed By:</span>
                    <img src={DevDocLogo} alt="Dev Doc Logo" className="w-20" />
                  </a>
                </motion.div>

                <nav>
                  <ul className="mobile-nav-list">
                    {NavItemsObject.map((navItem, index) => (
                      <motion.li
                        key={navItem.navItemId}
                        className="mobile-nav-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
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
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="header-spacer" />

      <style jsx>{`
        /* Header Styles */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: var(--z-index-header);
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: var(--backdrop-blur);
          border-bottom: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--space-md);
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 4rem;
        }

        .header-logo {
          flex-shrink: 0;
          transition: transform var(--transition-normal);
        }

        .header-logo:hover {
          transform: scale(1.05);
        }

        .header-logo img {
          height: 3rem;
          width: 3rem;
          object-fit: contain;
          border-radius: var(--border-radius-md);
          box-shadow: var(--shadow-xs);
        }

        /* Desktop Navigation */
        .nav-desktop {
          display: none;
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: var(--space-lg);
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: var(--space-xs);
          padding: var(--space-sm) var(--space-md);
          border-radius: var(--border-radius-md);
          transition: all var(--transition-normal);
          font-family: var(--font-body);
          font-weight: var(--font-weight-bold);
          font-size: var(--font-size-sm);
          letter-spacing: var(--letter-spacing-wide);
          color: var(--color-text);
        }

        .nav-link:hover {
          background-color: var(--color-surface-alt);
          color: var(--color-primary);
        }

        .nav-icon {
          height: 1.5rem;
          width: 1.5rem;
          flex-shrink: 0;
          opacity: 0.8;
          transition: opacity var(--transition-normal);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .nav-link:hover .nav-icon {
          opacity: 1;
        }

        /* DevDoc Logo */
        .devdoc-logo {
          flex-shrink: 0;
          display: block;
        }

        .devdoc-logo img {
          height: 1.5rem;
          opacity: 0.6;
          transition: opacity var(--transition-normal);
        }

        .devdoc-logo:hover img {
          opacity: 1;
        }

        /* Mobile Menu Button */
        .mobile-menu-btn {
          display: block;
          padding: var(--space-xs);
          border-radius: var(--border-radius-md);
          color: var(--color-text-muted);
          transition: all var(--transition-normal);
          cursor: pointer;
          background: none;
          border: none;
        }

        .mobile-menu-btn:hover {
          color: var(--color-primary);
          background-color: var(--color-surface-alt);
        }

        .mobile-menu-btn:focus {
          outline: 2px solid var(--color-secondary);
          outline-offset: 2px;
        }

        /* Mobile Menu Overlay */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: var(--z-index-modal);
          background-color: rgba(0, 0, 0, 0.2);
          backdrop-filter: var(--backdrop-blur);
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 4rem;
          left: 0;
          bottom: 0;
          width: 20rem;
          max-width: 85vw;
          z-index: var(--z-index-modal);
          background-color: var(--color-surface);
          border-right: 1px solid var(--color-border);
          box-shadow: var(--shadow-lg);
          overflow-y: auto;
        }

        .mobile-menu-content {
          padding: var(--space-xl);
        }

        .mobile-devdoc {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-xxl);
        }

        .mobile-devdoc img {
          height: 2rem;
          opacity: 0.8;
          margin-top: 0.5rem;
        }

        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-md);
          border-radius: var(--border-radius-lg);
          transition: all var(--transition-normal);
          font-family: var(--font-title);
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-bold);
          color: var(--color-primary);
        }

        .mobile-nav-link:hover {
          background-color: var(--color-surface-alt);
          box-shadow: var(--shadow-xs);
          color: var(--color-primary-dark);
          transform: scale(0.98);
        }

        .mobile-nav-icon {
          height: 1.5rem;
          width: 1.5rem;
          flex-shrink: 0;
          opacity: 0.8;
          transition: opacity var(--transition-normal);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-nav-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .mobile-nav-link:hover .mobile-nav-icon {
          opacity: 1;
        }

        /* Header Spacer */
        .header-spacer {
          height: 4rem;
        }

        /* Responsive Design */
        @media (min-width: 1024px) {
          .nav-desktop {
            display: block;
          }

          .mobile-menu-btn {
            display: none;
          }

          .devdoc-logo {
            display: none;
          }
        }

        @media (max-width: 1023px) {
          .devdoc-logo {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
