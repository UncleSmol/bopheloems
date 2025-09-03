import { Link } from "react-router-dom";
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

const Header = () => {
  return (
    <header className="Header">
      <figure className="HeaderLogoContainer">
        <img src={BopheloMedLogo} alt="Bophelo EMS company logo" />
      </figure>

      <nav className="NavigationBar">
        <ul className="NavigationList">
          {NavItemsObject.map((navItem) => (
            <li className="NavItem" key={navItem.navItemId}>
              <Link to={navItem.navItemLink} className="NavLink">
                <figure className="NavIconWrapper">
                  <img
                    src={navItem.navItemIcon}
                    alt={navItem.navItemLabel + " Icon"}
                  />
                </figure>
                <span className="NavLabel">{navItem.navItemLabel}</span>
              </Link>
            </li>
          ))}
        </ul>
        <figure className="DevDocSig">
          <img src={DevDocLogo} alt="Dev Doc Logo" />
        </figure>
      </nav>
    </header>
  );
};

export default Header;
