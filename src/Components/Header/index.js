import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Logo, NavBar, Bars, Times, CartItem, Panier } from "../../styled/lib";
import { Link, animateScroll as scroll } from "react-scroll";
import Img from "../../sons-of-street.jpg";

function Header({ showMenu, setShowMenu, setProductDetails, nbCartItem }) {
  const [navbar, setNavbar] = useState(false);

  let history = useHistory();

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <NavBar showMenu={showMenu} navbar={navbar}>
      <Logo
        src={Img}
        alt="sons of street logo"
        onClick={() => {
          scroll.scrollToTop();
        }}
      />
      <Bars
        navbar={navbar}
        onClick={() => {
          setShowMenu(true);
        }}
      >
        <i className="fa fa-bars x2"></i>
      </Bars>
      <ul>
        <li>
          <Link
            activeClass="active"
            to="products"
            smooth={true}
            offset={-80}
            duration={1000}
            onClick={() => {
              if (showMenu) {
                setShowMenu(false);
              }
            }}
          >
            Galerie
          </Link>
        </li>
        {/* <li>
          <Link
            activeClass="active"
            to="contact"
            smooth={true}
            offset={-80}
            duration={1000}
            onClick={() => {
              if (showMenu) {
                setShowMenu(false);
              }
            }}
          >
            Contact
          </Link> 
        </li>*/}
        <li
          onClick={() => {
            // setProductDetails(true);
            if (showMenu) {
              setShowMenu(false);
            }
          }}
        >
          <a
            href="https://www.streetplace.fr/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Boutique
          </a>

          {/* Panier
          <CartItem>{nbCartItem}</CartItem> */}
        </li>
        <Times
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <i className="fa fa-times x2"></i>
        </Times>
      </ul>
    </NavBar>
  );
}

export default Header;
