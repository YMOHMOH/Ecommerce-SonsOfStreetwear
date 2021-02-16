import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Logo, NavBar, Bars, Times, CartItem, Panier } from "../../styled/lib";
import { Link, animateScroll as scroll } from "react-scroll";
import Img from "../../sons-of-street.jpg";

function Header({ showMenu, setShowMenu }) {
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
        <i class="fa fa-bars x2"></i>
      </Bars>
      <ul>
        <li
          onClick={() => {
            if (showMenu) {
              setShowMenu(false);
            }
          }}
        >
          <Link
            activeClass="active"
            to="products"
            smooth={true}
            offset={-80}
            duration={1000}
          >
            Produits
          </Link>
        </li>
        <li
          onClick={() => {
            if (showMenu) {
              setShowMenu(false);
            }
          }}
        >
          <Link
            activeClass="active"
            to="contact"
            smooth={true}
            offset={-80}
            duration={1000}
          >
            Contact
          </Link>
        </li>
        <Panier
          onClick={() => {
            if (showMenu) {
              setShowMenu(false);
            }
          }}
        >
          Panier
          <CartItem>{0}</CartItem>
        </Panier>
        <Times
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <i class="fa fa-times x2"></i>
        </Times>
      </ul>
    </NavBar>
  );
}

export default Header;
