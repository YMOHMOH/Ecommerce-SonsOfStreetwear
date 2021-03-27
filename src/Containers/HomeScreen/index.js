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
import ProductDetails from "../../Components/ProductDetails";
import Products from "../../Components/Products";

function HomeScreen({
  showMenu,
  setShowMenu,
  products,
  setProducts,
  cart,
  setCart,
  total,
  setTotal,
  setProductDetails,
  setDetailsInfos,
  productDetails,
  detailsInfos,
  isLoading,
  email,
  setEmail,
}) {
  let history = useHistory();

  return (
    <>
      <Header
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        setProductDetails={setProductDetails}
        nbCartItem={cart.length}
      />
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
            sons of anarchy, elle est la rencontre du monde du biker et du
            streetwear urbain d'aujourd'hui.
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
              GALERIE
            </Link>
          </div>
        </BannerText>
        <HomeImage src={Photo} alt="Photo de mannequins de la marque" />
        {/* <Social /> */}
        <FirstHomeElement></FirstHomeElement>
        <SecondHomeElement></SecondHomeElement>
      </Home>
      {isLoading ? (
        <div>is loading ...</div>
      ) : (
        <Products
          products={products}
          setProducts={setProducts}
          cart={cart}
          setCart={setCart}
          total={total}
          setTotal={setTotal}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          setProductDetails={setProductDetails}
          setDetailsInfos={setDetailsInfos}
          email={email}
          setEmail={setEmail}
        />
      )}
      {detailsInfos ? (
        <ProductDetails
          productDetails={productDetails}
          setProductDetails={setProductDetails}
          detailsInfos={detailsInfos}
          setDetailsInfos={setDetailsInfos}
          cart={cart}
          setCart={setCart}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default HomeScreen;
