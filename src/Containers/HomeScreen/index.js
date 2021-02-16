import React, { useState } from "react";
import "../../App.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { useHistory } from "react-router-dom";

import {
  Home,
  BannerText,
  HomeImage,
  FirstHomeElement,
  SecondHomeElement,
} from "../../styled/lib";

import Photo from "../../hero-bcg.png";

import Open from "../../Components/Open";
import Header from "../../Components/Header";
import Social from "../../Components/Social";

function HomeScreen({ showMenu, setShowMenu }) {
  let history = useHistory();

  return (
    <>
      {/* <Open /> */}
      <Home>
        <BannerText>
          <h2>
            SONS OF STREET<span style={{ color: "#f76208" }}>WEAR</span>
          </h2>
          <br />
          <h3>adoptez la culture urbaine</h3>
          <p>
            La marque sons of street a été créée en 2013. Inspirée par la série
            sons of anarchy, elle est la rencontre entre le monde des bikers et
            le streetwear urbain d'aujourd'hui.
          </p>
          <div
          // onClick={() => {
          //   history.push(`/products`);
          // }}
          >
            <Link
              activeClass="active"
              to="products"
              smooth={true}
              offset={-80}
              duration={1000}
              delay={500}
            >
              JE COMMANDE
            </Link>
          </div>
        </BannerText>
        <HomeImage src={Photo} alt="Photo de mannequins de la marque" />
        <Social />
        <FirstHomeElement></FirstHomeElement>
        <SecondHomeElement></SecondHomeElement>
      </Home>
    </>
  );
}

export default HomeScreen;
