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
} from "../../styled/lib.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductDetails({
  productDetails,
  setProductDetails,
  detailsInfos,
  cart,
  setCart,
  total,
  setTotal,
}) {
  const [indexThumbs, setIndexThumbs] = useState(0);
  const [indexSize, setIndexSize] = useState(1);
  const [activeThumbs, setactiveThumbs] = useState(0);

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
                  <p>{detailsInfos.description}</p>

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

                  <DetailsButton onClick={() => {}}>Add to cart</DetailsButton>
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
