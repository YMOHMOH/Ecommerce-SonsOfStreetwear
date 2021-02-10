import React from "react";
import {
  ProductsWrapper,
  ProductsTitle,
  ProductsCenterWrapper,
} from "../../styled/lib.js";
import Product from "../Product";

import ContactScreen from "../../Containers/ContactScreen";

export default function Products({
  products,
  setProducts,
  cart,
  setCart,
  total,
  setTotal,
  showMenu,
  setShowMenu,
}) {
  return (
    <ProductsWrapper>
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
            />
          );
        })}
      </ProductsCenterWrapper>
      <ContactScreen showMenu={showMenu} setShowMenu={setShowMenu} />
    </ProductsWrapper>
  );
}
