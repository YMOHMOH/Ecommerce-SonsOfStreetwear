import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

import HomeScreen from "./Containers/HomeScreen";
import CartScreen from "./Containers/CartScreen";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarker,
  faPhone,
  faEnvelope,
  faWindowClose,
  faMinus,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faMapMarker,
  faPhone,
  faEnvelope,
  faWindowClose,
  faMinus,
  faPlus,
  faStar
);

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [detailsInfos, setDetailsInfos] = useState(null);
  const [email, setEmail] = useState("");
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const [productDetails, setProductDetails] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api-sonsofstreetwear.herokuapp.com/v1/products/`
        );
        const newProducts = [...response.data.products];
        const newProductsLength = newProducts.length;
        for (let i = 0; i < newProductsLength; i++) {
          newProducts[i].quantity = 1;
        }
        setProducts(newProducts);
        setDetailsInfos(response.data.products[0]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        // if (error.response.data.error === "User doesn't exist") {
        //   setErrorMessage(
        //     "L'utilisateur n'existe pas, Veuillez vous reconnecter"
        //   );
        //   alert("L'utilisateur n'existe pas, Veuillez vous reconnecter");
        // } else if (error.response.data.error === "Unauthorized") {
        //   setErrorMessage(
        //     "L'utilisateur n'est pas autorisé à effectué cette requete"
        //   );
        //   alert("L'utilisateur n'est pas autorisé à effectué cette requete");
        // }
      }
    };
    fetchData();
  }, []);

  const handleCart = (id) => {
    for (let i = 0; i < products.length; i++) {
      if (products[i]._id === id) {
        products[i].inCart = false;
      }
    }
  };

  return (
    <Router>
      <Switch>
        {/* <Route path="/contact">
          <ContactScreen showMenu={showMenu} setShowMenu={setShowMenu} />
        </Route>
        <Route path="/products">
          <ProductsScreen
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            products={products}
            setProducts={setProducts}
            cart={cart}
            setCart={setCart}
            total={total}
            setTotal={setTotal}
            handleCart={handleCart}
            isLoading={isLoading}
          />
        </Route> */}
        {/* <Route path="/cart">
          <CartScreen showMenu={showMenu} setShowMenu={setShowMenu} />
        </Route> */}
        <Route path="/" exact>
          <HomeScreen
            showMenu={showMenu}
            setShowMenu={setShowMenu}
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
            productDetails={productDetails}
            setProductDetails={setProductDetails}
            detailsInfos={detailsInfos}
            setDetailsInfos={setDetailsInfos}
            cart={cart}
            setCart={setCart}
            Ò
            isLoading={isLoading}
            email={email}
            setEmail={setEmail}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
