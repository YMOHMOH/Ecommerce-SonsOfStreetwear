import React from "react";
import "../../App.css";

import Products from "../../Components/Products";

function ProductsScreen({
  showMenu,
  setShowMenu,
  products,
  setProducts,
  cart,
  setCart,
  total,
  setTotal,
  handleCart,
  isLoading,
}) {
  return (
    <>
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
        />
      )}
    </>
  );
}

export default ProductsScreen;
