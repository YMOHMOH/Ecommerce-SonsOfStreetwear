import React from "react";
import {
  ProductsWrapper,
  ProductsTitle,
  ProductsCenterWrapper,
} from "../../styled/lib.js";
import Product from "../Product";

import ContactScreen from "../../Containers/ContactScreen";
import Newsletter from "../../Components/Newsletter";
import Footer from "../../Components/Footer";
import InfoBar from "../../Components/InfoBar";

export default function Products({
  products,
  setProducts,
  cart,
  setCart,
  total,
  setTotal,
  showMenu,
  setShowMenu,
  setProductDetails,
  setDetailsInfos,
  email,
  setEmail,
}) {
  return (
    <ProductsWrapper id="products">
      {/* <ProductsTitle>
        <h2>Nos produits</h2>
      </ProductsTitle> */}
      <ProductsCenterWrapper>
        {products.map((item, index) => {
          return (
            <Product
              key={item._id}
              products={products}
              setProducts={setProducts}
              index={index}
              cart={cart}
              setCart={setCart}
              total={total}
              setTotal={setTotal}
              setProductDetails={setProductDetails}
              setDetailsInfos={setDetailsInfos}
            />
          );
        })}
      </ProductsCenterWrapper>
      {/* <ContactScreen showMenu={showMenu} setShowMenu={setShowMenu} /> */}
      <Newsletter email={email} setEmail={setEmail} />
      {/* <InfoBar /> */}
      <Footer />
    </ProductsWrapper>
  );
}
