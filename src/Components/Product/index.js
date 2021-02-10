import React from "react";
import {
  ProductImage,
  ProductWrapper,
  ProductImageWrapper,
} from "../../styled/lib.js";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

export default function Product({
  products,
  setProducts,
  index,
  cart,
  setCart,
  total,
  setTotal,
}) {
  let history = useHistory();

  const handleStock = () => {
    let stock = "En stock :";
    if (products[index].stock["XS"] > 0) {
      stock += " XS";
    }
    if (products[index].stock["S"] > 0) {
      stock += " S";
    }
    if (products[index].stock["M"] > 0) {
      stock += " M";
    }
    if (products[index].stock["L"] > 0) {
      stock += " L";
    }
    if (products[index].stock["XL"] > 0) {
      stock += " XL";
    }
    if (products[index].stock["XXL"] > 0) {
      stock += " XXL";
    }
    if (products[index].stock["unique_size"] > 0) {
      stock += " Taille unique";
    }
    if (stock === "En stock :") {
      stock += " Aucune taille disponible";
    }

    return stock;
  };

  return (
    <Card>
      <Box>
        <Content>
          <ProductImageWrapper>
            <ProductImage background={products[index].pictures[0].secure_url} />
          </ProductImageWrapper>
          <h3>{products[index].title} </h3>
          <h4>
            <pre>
              {products[index].price}€{"   "}
              <span
                style={{
                  color: "grey",
                  textDecoration: "line-through",
                  fontWeight: 300,
                }}
              >
                {products[index].oldPrice}€
              </span>
            </pre>
          </h4>
          <h5>{handleStock()}</h5>
          {/* <h2>01</h2>
          <h3>Card One</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vitae pretium mi Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
          <a href="#">Read More</a> */}
        </Content>
      </Box>
    </Card>
    //   <ProductWrapper
    //   onClick={() => {
    //     history.push(`/product/${products[index].title}`, {
    //       index,
    //     });
    //   }}
    // >
    //   <ProductImageWrapper>
    //     <ProductImage
    //       background={products[index].pictures[0].secure_url}
    //       hoverBackground={products[index].pictures[1].secure_url}
    //     />
    //   </ProductImageWrapper>
    //   <h3>{products[index].title} </h3>
    //   <h4>{products[index].price} €</h4>
    //   <h5>{handleStock()}</h5>
    // </ProductWrapper>
  );
}

const Card = styled.div`
  position: relative;
  min-width: 320px;
  height: 440px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.05),
    inset -5px -5px 5px rgba(255, 255, 255, 0.5),
    5px 5px 5px rgba(0, 0, 0, 0.05), -5px -5px 5px rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  margin: 30px;
  cursor: pointer;
`;

const Box = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 260px;
  margin-bottom: 2%;
  cursor: pointer;
  background: transparent;

  h3 {
    text-transform: capitalize;
    font-size: 1.1rem;
    font-weight: 700;
    margin-top: 1rem;
    text-align: center;
  }

  h4 {
    margin-top: 0.3rem;
    font-size: 0.9rem;
    text-align: center;
    font-weight: 700;
    color: red;
  }

  h5 {
    margin-top: 0.3rem;
    font-size: 0.7rem;
    text-align: center;
  }
`;
