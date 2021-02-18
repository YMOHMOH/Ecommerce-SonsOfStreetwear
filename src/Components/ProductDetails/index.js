import React, { useState } from "react";
import {
  ModalOverlay,
  ModalWrapper,
  CloseCart,
  Details,
  BigImg,
  DetailsBox,
  DetailsRow,
  DetailsSize,
  DetailsThumb,
  DetailsButton,
  ThumbImage,
  Size,
  ItemAmount,
  Plus,
  Minus,
  NumberItem,
  Quantity,
} from "../../styled/lib.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductDetails({
  productDetails,
  setProductDetails,
  detailsInfos,
  setDetailsInfos,
  cart,
  setCart,
}) {
  const [indexThumbs, setIndexThumbs] = useState(0);
  const [indexSize, setIndexSize] = useState(1);

  const handleStock = () => {
    let stock = ["En stock :"];
    if (detailsInfos.stock["XS"] > 0) {
      stock.push(" XS");
    }
    if (detailsInfos.stock["S"] > 0) {
      stock.push(" S");
    }
    if (detailsInfos.stock["M"] > 0) {
      stock.push(" M");
    }
    if (detailsInfos.stock["L"] > 0) {
      stock.push(" L");
    }
    if (detailsInfos.stock["XL"] > 0) {
      stock.push(" XL");
    }
    if (detailsInfos.stock["XXL"] > 0) {
      stock.push(" XXL");
    }
    if (detailsInfos.stock["unique_size"] > 0) {
      stock.push(" Taille unique");
    }
    if (stock === "En stock :") {
      stock.push(" Aucune taille disponible");
    }
    return stock;
  };

  const stock = handleStock();

  const handleTabThumbs = (i) => {
    setIndexThumbs(i);
  };

  const handleTabSize = (i) => {
    setIndexSize(i);
  };

  const addToCart = (id, size) => {
    const check = checkInCart(id, size);
    if (check) {
      alert("deja dans le panier");
    } else {
      const newCart = [...cart];
      const newProducts = { ...detailsInfos };
      newProducts.stock = newProducts.stock[size];
      newProducts.size = size;
      newCart.push(newProducts);
      console.log(newCart);
      setCart(newCart);
    }
  };

  const checkInCart = (id, size) => {
    const cartLength = cart.length;
    for (let i = 0; i < cartLength; i++) {
      if (id === cart[i]._id) {
        if (size === cart[i].size) {
          return true;
        }
      }
    }
    return false;
  };

  return (
    <>
      <ModalOverlay modalOpen={productDetails}>
        <ModalWrapper>
          <div>
            <CloseCart
              onClick={() => {
                setIndexThumbs(0);
                setIndexSize(1);
                setProductDetails(false);
              }}
            >
              <FontAwesomeIcon icon="window-close" />
            </CloseCart>
          </div>
          <div>
            {
              <Details>
                <BigImg>
                  <img
                    src={detailsInfos.pictures[indexThumbs].secure_url}
                    alt=""
                  />
                </BigImg>
                <DetailsBox>
                  <DetailsRow>
                    <h2>{detailsInfos.title}</h2>
                    <span>{detailsInfos.price}€</span>
                  </DetailsRow>
                  <DetailsRow>
                    <DetailsSize>
                      {stock.map((item, i) => {
                        if (i > 0 && item !== " Aucune taille disponible") {
                          return (
                            <Size
                              isActive={i === indexSize ? true : false}
                              key={i}
                              onClick={() => handleTabSize(i)}
                            >
                              {item}
                            </Size>
                          );
                        }
                      })}
                    </DetailsSize>
                    <Quantity>
                      <Minus disable={detailsInfos.quantity < 2 ? true : false}>
                        <span
                          onClick={() => {
                            if (detailsInfos.quantity > 1) {
                              const newDetails = { ...detailsInfos };
                              newDetails.quantity = newDetails.quantity - 1;
                              setDetailsInfos(newDetails);

                              // const amount = total - Number(newCart[index].price);
                              // setTotal(amount);
                            }

                            // else {
                            //   handleCart(cart[index]._id);

                            //   const amount = total - Number(cart[index].price);
                            //   setTotal(amount);

                            //   const newCart = [...cart];
                            //   newCart.splice(index, 1);
                            //   setCart(newCart);
                            // }
                          }}
                        >
                          <FontAwesomeIcon icon="minus" />
                        </span>
                      </Minus>
                      <NumberItem>
                        <ItemAmount>{detailsInfos.quantity}</ItemAmount>
                      </NumberItem>
                      <Plus
                        disable={
                          detailsInfos.quantity >=
                          detailsInfos.stock[stock[indexSize].trim()]
                            ? true
                            : false
                        }
                      >
                        <span
                          onClick={() => {
                            if (
                              detailsInfos.quantity <
                              detailsInfos.stock[stock[indexSize].trim()]
                            ) {
                              const newDetails = { ...detailsInfos };
                              newDetails.quantity = newDetails.quantity + 1;
                              setDetailsInfos(newDetails);

                              // const amount = total - Number(newCart[index].price);
                              // setTotal(amount);
                            }
                            // const newCart = [...cart];
                            // newCart[index].quantity = newCart[index].quantity + 1;
                            // setCart(newCart);

                            // const amount = total + Number(newCart[index].price);
                            // setTotal(amount);
                          }}
                        >
                          <FontAwesomeIcon icon="plus" />
                        </span>
                      </Plus>
                    </Quantity>
                  </DetailsRow>

                  <p style={{ display: "inline" }}>
                    {detailsInfos.description}
                  </p>
                  <span style={{ color: "green", fontWeight: "700" }}>
                    {" En stock : " +
                      detailsInfos.stock[stock[indexSize].trim()]}
                  </span>

                  <DetailsThumb>
                    {detailsInfos.pictures.map((img, i) => {
                      return (
                        <ThumbImage
                          src={img.secure_url}
                          alt=""
                          key={i}
                          isActive={i === indexThumbs ? true : false}
                          onClick={() => handleTabThumbs(i)}
                        />
                      );
                    })}
                  </DetailsThumb>

                  <DetailsButton
                    onClick={() =>
                      addToCart(detailsInfos._id, stock[indexSize].trim())
                    }
                  >
                    Add to cart
                  </DetailsButton>
                </DetailsBox>
              </Details>
            }
          </div>
        </ModalWrapper>
      </ModalOverlay>
      )
    </>
  );
}
