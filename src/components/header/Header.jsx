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

// SVG Hamburger Menu Component
const HamburgerIcon = ({ isOpen }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
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
      transition={{ duration: 0.2, ease: "easeInOut" }}
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
  </svg>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-header bg-surface/95 backdrop-blur-sm border-b border-border shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.figure
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <img
                className="h-12 w-12 object-contain rounded-lg shadow-xs"
                src={BopheloMedLogo}
                alt="Bophelo EMS company logo"
              />
            </motion.figure>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-8">
                {NavItemsObject.map((navItem, index) => (
                  <motion.li
                    key={navItem.navItemId}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.1,
                      ease: "easeOut" 
                    }}
                  >
                    <Link
                      to={navItem.navItemLink}
                      className="group flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-normal hover:bg-surface-alt"
                    >
                      <figure className="h-5 w-5 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-normal">
                        <img
                          src={navItem.navItemIcon}
                          alt={navItem.navItemLabel + " Icon"}
                          className="h-full w-full object-contain"
                        />
                      </figure>
                      <span className="font-body font-bold text-sm tracking-wide text-text group-hover:text-primary transition-colors duration-normal">
                        {navItem.navItemLabel}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* DevDoc Logo - Hidden on mobile, visible on desktop */}
            <motion.figure
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden lg:block flex-shrink-0"
            >
              <img 
                className="h-6 opacity-60 hover:opacity-100 transition-opacity duration-normal" 
                src={DevDocLogo} 
                alt="Dev Doc Logo" 
              />
            </motion.figure>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                className="p-2 rounded-lg text-text-muted hover:text-primary hover:bg-surface-alt transition-all duration-normal focus:outline-none focus:ring-2 focus:ring-secondary/20"
              >
                <HamburgerIcon isOpen={isMobileMenuOpen} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-modal bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={toggleMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                opacity: { duration: 0.2 }
              }}
              className="fixed top-16 left-0 bottom-0 w-80 max-w-[85vw] z-modal bg-surface border-r border-border shadow-lg lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* DevDoc Logo - Visible on mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex justify-center mb-8 lg:hidden"
                >
                  <img 
                    className="h-8 opacity-80" 
                    src={DevDocLogo} 
                    alt="Dev Doc Logo" 
                  />
                </motion.div>

                <nav>
                  <ul className="space-y-2">
                    {NavItemsObject.map((navItem, index) => (
                      <motion.li
                        key={navItem.navItemId}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.1 + index * 0.05,
                          ease: "easeOut" 
                        }}
                        onClick={toggleMobileMenu}
                      >
                        <Link
                          to={navItem.navItemLink}
                          className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-normal hover:bg-surface-alt hover:shadow-xs active:scale-[0.98]"
                        >
                          <figure className="h-8 w-8 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-normal">
                            <img
                              src={navItem.navItemIcon}
                              alt={navItem.navItemLabel + " Icon"}
                              className="h-full w-full object-contain"
                            />
                          </figure>
                          <span className="font-title text-lg font-bold text-primary group-hover:text-primary-dark transition-colors duration-normal">
                            {navItem.navItemLabel}
                          </span>
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
      <div className="h-16" />
    </>
  );
};

export default Header;