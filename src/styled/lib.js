import styled, { keyframes } from "styled-components";

/*----- KEYFRAMES -----*/

export const fadeIn = keyframes`
0% {
 opacity: 0;
}
100% {
 opacity: 1;
}
`;

export const fadeInRight = keyframes`
0% {
      transform: translateX(150px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
`;

export const fadeInBottom = keyframes`
0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
`;

export const revealText = keyframes`
0% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(0);
    }
`;

export const revealTextReverse = keyframes`
0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
`;

export const open = keyframes`
  0% {
      transform: scaleY(1);
    }
    100% {
      transform: scaleY(0);
    }
`;

export const rotate = keyframes`
  0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(405deg);
    }
`;

export const topAnimation = keyframes`
  from {
    transform: translate(0rem, 0);
  }
  to {
    transform: translate(0rem, 3.5rem);
  }
`;

export const bottomAnimation = keyframes`
  from {
    transform: translate(-11.5rem, 0);
  }
  to {
    transform: translate(0rem, 0);
  }
`;

/*----- END OF KEYFRAMES -----*/

/*----- OPEN -----*/

export const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: top;
  animation: ${open} 1s ease-in-out forwards;
`;

export const Launch = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  /* z-index: 3; */

  ${Layer} {
    &:nth-child(1) {
      background: #000;
      /* z-index: 2; */
    }
    &:nth-child(2) {
      background: rgb(240, 157, 81);
      /* background: #03a9f4; */
      animation-delay: 1s;
      /* z-index: 1; */
    }
  }
`;

/*----- END OF OPEN -----*/

/*----- HEADER -----*/

export const Logo = styled.img`
  height: 40px;
  cursor: pointer;
  opacity: 0;
  animation: ${fadeIn} 0.5s linear forwards;
  animation-delay: 2s;
`;

export const NavBar = styled.div`
  position: fixed;
  box-sizing: border-box;
  background: ${(props) => {
    return !props.navbar ? "#fff" : "#333";
  }};
  /*top: 0;
  left: 0; */
  width: 100%;
  height: ${(props) => {
    return !props.navbar ? "100px" : "80px";
  }};
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 3;
  transition: all 0.5s ease-out;

  ul {
    margin: 0;
    padding: 0;
    /* z-index: 3; */
    display: flex;
    align-items: center;

    li {
      opacity: 0;
      font-size: 1.2em;
      color: #000;
      padding: 5px 10px;
      letter-spacing: 2px;
      list-style: none;
      margin: 0 10px;
      animation: ${fadeInRight} 0.5s linear forwards;
      cursor: pointer;
      color: ${(props) => {
        return !props.navbar ? "#000" : "#fff";
      }};

      span {
        border-color: ${(props) => {
          return !props.navbar ? "#000" : "#fff";
        }};
        color: ${(props) => {
          return !props.navbar ? "#000" : "#fff";
        }};
      }

      &:hover {
        background: ${(props) => {
          return !props.navbar ? "#000" : "#fff";
        }};
        color: ${(props) => {
          return !props.navbar ? "#fff" : "#000";
        }};
        span {
          border-color: ${(props) => {
            return !props.navbar ? "#fff" : "#000";
          }};
          color: ${(props) => {
            return !props.navbar ? "#fff" : "#000";
          }};
        }
      }

      &:last-child {
        margin-right: 0;
      }

      &:nth-child(1) {
        animation-delay: 2s;
      }

      &:nth-child(2) {
        animation-delay: 2.25s;
      }

      &:nth-child(3) {
        animation-delay: 2.5s;
      }

      &:nth-child(4) {
        animation-delay: 2.75s;
      }

      &:nth-child(5) {
        animation-delay: 3s;
      }

      &:nth-child(6) {
        animation-delay: 3.25s;
      }
    }
  }

  @media (max-width: 991px) {
    padding: 0 50px;
    ul {
      position: fixed;
      background: #fff;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: ${(props) => {
        return !props.showMenu ? "none" : "flex";
      }};
      /* z-index: 1010; */
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow-y: scroll;

      li {
        margin: 10px 0;
        animation-delay: 0s !important;
      }
    }
  }
`;

export const Bars = styled.div`
  opacity: 0;
  display: none;
  cursor: pointer;
  font-size: 28px;
  animation: ${fadeInRight} 0.5s linear forwards;
  animation-delay: 2s;
  color: ${(props) => {
    return !props.navbar ? "#000" : "#fff";
  }};
  @media (max-width: 991px) {
    display: initial;
  }
`;

export const Times = styled.div`
  cursor: pointer;
  font-size: 28px;
  position: absolute;
  top: 20px;
  right: 40px;
  display: none;
  @media (max-width: 991px) {
    display: block;
  }
`;

export const CartItem = styled.span`
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: solid 1px black;
  border-radius: 50%;
  color: black;
  margin-left: 0.3rem;
`;

export const Panier = styled.li`
  display: flex;
  align-items: center;
`;

/*----- END OF HEADER -----*/

/*----- HOME -----*/

export const Home = styled.section`
  /* position: absolute;
  width: 100%;
  min-height: calc(100vh - 80px);
  top: 80px;
  left: 0; */
  position: fixed;
  top: 80px;
  padding: 0 100px;
  box-sizing: border-box;

  background: #fff;
  /* background: green; */

  min-height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0rem 0rem 0rem 10rem;
  overflow-y: hidden;

  @media (max-width: 1280px) {
    /* height: auto !important; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px;
    box-sizing: border-box;
  }

  @media (max-width: 991px) {
    padding: 20px 40px 0px 40px;
  }
`;

/*----- END OF HOME -----*/

/*----- BANNERTEXT -----*/

export const BannerText = styled.div`
  /* position: absolute; */
  /* top: 50%;
  left: 10%; */
  transform: translateY(-50%);
  max-width: 700px;

  h2,
  h3 {
    position: relative;
    margin: 0;
    padding: 0;
    display: inline-block;
    transform-origin: left;
    text-transform: uppercase;
    transform: scaleX(0);
    animation: ${revealTextReverse} 1s ease-in-out forwards;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      background: #000;
      width: 100%;
      height: 100%;
      transform-origin: right;
      animation: ${revealText} 1s ease-in-out forwards;
      animation-delay: 1s;
    }
  }

  h2 {
    font-size: 6em;
    animation-delay: 0s;
    @media (max-width: 1280px) {
      margin-bottom: 0.5rem;
    }
    @media (max-width: 991px) {
      font-size: 3em;
    }
  }

  h3 {
    font-size: 3em;
    animation-delay: 1s;
    &:before {
      animation-delay: 2s;
    }
    @media (max-width: 1280px) {
      margin-bottom: 0.5rem;
    }
    @media (max-width: 991px) {
      font-size: 1.5em;
    }
  }

  p {
    opacity: 0;
    font-weight: 400;
    font-size: 1.2em;
    animation: ${fadeIn} 1s linear forwards;
    animation-delay: 2s;
    margin-bottom: 1rem;
  }

  div {
    /* opacity: 0;
    display: inline-block;
    margin: 20px 0 0;
    padding: 10px 20px;
    background: #c2510b;
    background: #f76208;
    color: #fff;
    font-weight: 700;
    font-size: 1.2em;
    letter-spacing: 1px;
    animation: ${fadeInBottom} 0.5s linear forwards;
    animation-delay: 2.5s;
    cursor: pointer;
    border: none;
    border-radius: 5px; */
    opacity: 0;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700;
    border: 0;
    //display: block;
    position: relative;
    letter-spacing: 0.15em;
    padding: 20px;
    background: transparent;
    outline: none;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    letter-spacing: 1px;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.15s;
    animation: ${fadeInBottom} 0.5s linear forwards;
    animation-delay: 2.5s;
    cursor: pointer;
    margin-bottom: 1rem;

    &::after,
    &::before {
      border: 0;
      content: "";
      position: absolute;
      height: 20px;
      width: 20px;
      transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      z-index: -2;
      border-radius: 50%;
      //animation: grow 1s infinite;
    }

    &::before {
      border: 0;
      background-color: #c2510b;
      top: -0.75rem;
      left: 0.5rem;
      animation: ${topAnimation} 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.25s
        infinite alternate;
    }
    &::after {
      background-color: #f76208;
      top: 3rem;
      left: 13rem;
      animation: ${bottomAnimation} 2s cubic-bezier(0.68, -0.55, 0.265, 1.55)
        0.5s infinite alternate;
    }

    &:hover {
      color: white;
      &::before,
      &::after {
        top: 0;
        //transform: skewx(-10deg);
        height: 100%;
        width: 100%;
        border-radius: 0;
        animation: none;
      }
      &::after {
        left: 0rem;
      }
      &::before {
        top: 0.5rem;
        left: 0.35rem;
      }
    }

    /* @media (max-width: 991px) {
      display: none;
    } */
  }

  @media (max-width: 1280px) {
    /* position: relative;
    top: 0;
    left: 0;
    margin-top: 100px;
    transform: translateY(0); */
    transform: translateY(0%);

    max-width: 700px;
    flex: 1;
    /* z-index: 1001; */
  }
`;

/*----- END OF BANNERTEXT -----*/

/*----- SOCIAL -----*/

export const Sci = styled.ul`
  position: fixed;
  bottom: 15px;
  right: 30px;
  display: flex;
  flex-direction: column;

  li {
    opacity: 0;
    list-style: none;
    padding: 10px 0;
    text-align: center;
    animation: ${fadeInBottom} 0.5s linear forwards;
    color: #000;
    &:nth-child(1) {
      animation-delay: 2s;
    }
    &:nth-child(2) {
      animation-delay: 2.25s;
    }
    &:nth-child(3) {
      animation-delay: 2.5s;
    }
    &:nth-child(4) {
      animation-delay: 2.75s;
    }
    &:nth-child(5) {
      animation-delay: 3s;
    }
    &:nth-child(6) {
      animation-delay: 3.25s;
    }

    a {
      font-size: 1.2em;
      color: #000;
    }
  }
  @media (max-width: 1280px) {
    right: 20px;
  }
`;

/*----- END OF SOCIAL -----*/

/*----- HOME IMAGE -----*/

export const HomeImage = styled.img`
  opacity: 0;
  /* position: absolute; */
  /* right: 10%;
  top: 50%; */

  /* transform: translateY(-50%); */
  object-fit: cover;
  object-position: top;
  animation: ${fadeIn} 1s linear forwards;
  animation-delay: 3s;
  /* z-index: 100; */
  @media (max-width: 1280px) {
    animation: none;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

/*----- END OF HOME IMAGE -----*/

/*----- HOME ELEMENT -----*/

export const FirstHomeElement = styled.div`
  opacity: 0;
  position: absolute;
  bottom: -150px;
  left: 25%;
  width: 250px;
  height: 250px;
  border: 40px solid #000;
  animation: ${rotate} 40s linear infinite, ${fadeIn} 1s linear forwards;
  animation-delay: 4s;

  @media (max-width: 1280px) {
    width: 125px;
    height: 125px;
    border: 20px solid #000;
    bottom: -75px;
  }
`;

export const SecondHomeElement = styled.div`
  opacity: 0;
  position: absolute;
  left: -10px;
  top: 40%;
  width: 50px;
  height: 50px;
  border: 2px solid #000;
  animation: ${rotate} 30s linear infinite, ${fadeIn} 1s linear forwards;
  animation-delay: 4s;
`;

/*----- END OF HOME ELEMENT -----*/

/*----- CONTACT -----*/

export const Contact = styled.section`
  /* position: relative;
  min-height: calc(100vh - 80px);
  top: 80px;
  left: 0;
  padding: 3.125rem 6.25rem; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  background: #fff;
  box-sizing: border-box;

  @media (max-width: 991px) {
    padding: 50px;
  }
`;

export const Content = styled.div`
  max-width: 50rem;
  text-align: center;

  h2 {
    font-size: 2.1rem;
    font-weight: 500;
    color: #000;
  }

  p {
    font-weight: 300;
    color: #000;
  }
`;

export const Container = styled.div`
  width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const ContactInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 991px) {
    margin-bottom: 2.5rem;
    width: 100%;
  }
`;

export const Box = styled.div`
  position: relative;
  padding: 20px 0;
  display: flex;
`;

export const Icon = styled.div`
  min-width: 3.75rem;
  height: 3.75rem;
  background: #fff;
  border: 1px solid #f76208;
  color: #f76208;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.3rem;
`;

export const Text = styled.div`
  display: flex;
  margin-left: 1.25rem;
  font-size: 1rem;
  color: #000;
  flex-direction: column;
  font-weight: 300;

  h3 {
    font-weight: 500;
    /* color: #00bcd4; */
    color: #f76208;
  }
`;

export const ContactForm = styled.div`
  width: 40%;
  padding: 2.5rem;
  /* background: #fff; */

  h2 {
    font-size: 1.875rem;
    color: #333;
    font-weight: 500;
  }
  @media (max-width: 991px) {
    width: 100%;
    padding: 0px;
  }
`;

export const InputBox = styled.div`
  position: relative;
  width: 100%;
  margin-top: 10px;

  input,
  textarea {
    width: 100%;
    padding: 5px 0;
    font-size: 1rem;
    margin: 10px 0;
    border: none;
    border-bottom: 2px solid #333;
    outline: none;
    resize: none;

    &:focus,
    &:valid {
      ~ span {
        color: #f76208;
        font-size: 0.75rem;
        transform: translateY(-20px);
      }
    }
  }

  span {
    position: absolute;
    left: 0;
    padding: 5px 0;
    font-size: 1rem;
    margin: 10px 0;
    pointer-events: none;
    transition: 0.5s;
    color: #666;
  }

  input[type="submit"] {
    width: 6.25rem;
    background: #f76208;

    color: #fff;
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 1.1rem;
  }
`;

/*----- END OF CONTACT -----*/

/* --------------- Products ---------------- */

export const ProductsWrapper = styled.section`
  /* position: absolute;
  width: 100%;
  min-height: calc(100vh - 80px);
  top: 80px;
  top: 100vh;
  left: 0; */
  position: absolute;
  top: 100vh;
  left: 0;
  width: 100%;
  padding-top: 3rem;
  /* background: radial-gradient(#0021ce, #050f44); */
  /* background: radial-gradient(#ee9617, #fe5858); */
  background: #fff;
  box-sizing: border-box;

  z-index: 2;
`;

export const ProductsTitle = styled.div`
  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 5rem;
    letter-spacing: var(--mainSpacing);
  }
`;

export const ProductsCenterWrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

/* --------------- End of Products ---------------- */

/* --------------- Product ---------------- */

export const ProductImage = styled.div`
  background: ${(props) => `url(${props.background}) center/cover no-repeat;`};
  display: block;
  width: 100%;
  min-height: 20rem;
  transition: var(--mainTransition);
  background-size: contain;
`;

export const ProductWrapper = styled.section`
  width: 260px;
  margin-bottom: 2%;
  cursor: pointer;
  background: transparent;
  box-sizing: border-box;

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
  }

  h5 {
    margin-top: 0.3rem;
    font-size: 0.7rem;
    text-align: center;
  }
`;

export const ProductImageWrapper = styled.section`
  position: relative;
  overflow: hidden;
`;

/*----- CART -----*/

export const Cart = styled.section`
  position: absolute;
  width: 100%;
  min-height: calc(100vh - 80px);
  top: 80px;
  left: 0;
  background: green;
`;

/*----- END OF CART -----*/

/* --------------- NEWSLETTER ---------------- */

export const NewsletterWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: radial-gradient(#0021ce, #050f44); */
  background: #333;
  /* background-color #ee9617;
background-image linear-gradient(315deg, #ee9617 0%, #fe5858 74%); */
  background: radial-gradient(#ee9617, #fe5858);

  /* height: 50vh; */
  height: 25rem;
  box-sizing: border-box;
`;

export const NewsletterForm = styled.div`
  position: relative;
  padding: 2.5rem;
  /* min-width: 37.5rem; */
  background: #0b229e;
  background: #fe5858;
  box-shadow: 0 60px 50px rgba(0, 0, 0, 0.3);

  h2 {
    margin: 0 0 1.25rem;
    padding: 0;
    font-size: 2rem;
    color: #fff;
  }

  input[type="submit"] {
    background: #fff;
    color: #000;
    padding: 10px 20px;
    border: none;
    outline: none;
    margin: 10px 0 0;
    cursor: pointer;
    font-size: 1.2rem;
    transition: 0.5s;
    font-weight: 700;

    &:hover {
      background: linear-gradient(to right, #1db0dc, #23d0d3);
      color: #fff;
    }
  }
`;

export const InputBoxNews = styled.div`
  position: relative;
  margin: 2.5rem 0 1.25rem;
  width: 100%;

  input {
    position: absolute;
    background: transparent;
    border: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    outline: none;
    padding: 10px 0;
    width: 100%;
    color: 1.2rem;
    color: #fff;
    transition: 0.5s;

    &:focus,
    &:valid {
      border-bottom: 2px solid rgba(255, 255, 255, 1);

      ~ label {
        color: rgba(255, 255, 255, 0.2);
        transform: translateY(-30px);
      }
    }
  }

  label {
    position: relative;
    font-size: 1.2rem;
    color: #fff;
    padding: 10px 0;
    display: inline-block;
    pointer-events: none;
    transition: 0.5s;
  }
`;

/* --------------- END OF NEWSLETTER ---------------- */

/* --------------- FOOTER ---------------- */

export const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  height: auto;
  padding: 3.1rem 6.25rem;
  background: #333;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;

  @media (max-width: 991px) {
    padding: 40px;
  }

  p {
    color: #999;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    flex-direction: column;
  }

  h2 {
    position: relative;
    color: #fff;
    font-weight: 500;
    margin-bottom: 15px;

    &:before {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 50px;
      height: 2px;
      background: #f00;
    }
  }
`;

export const AboutUs = styled.div`
  margin-right: 1.9rem;
  width: 40%;

  @media (max-width: 991px) {
    margin-right: 0rem;
    margin-bottom: 2.5rem;
    width: 100%;
  }
`;

export const SciFooter = styled.ul`
  margin-top: 20px;
  display: flex;

  li {
    list-style: none;
    width: 40px;
    height: 40px;
    background: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    text-decoration: none;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;

    &:hover {
      background: #f00;
    }
  }
`;

export const QuickLinks = styled.div`
  position: relative;
  width: 25%;
  margin-right: 1.9rem;

  @media (max-width: 991px) {
    margin-right: 0rem;
    margin-bottom: 2.5rem;
    width: 100%;
  }
  ul {
    li {
      color: #999;
      margin-bottom: 10px;
      cursor: pointer;
      &:hover {
        color: #fff;
      }
    }
  }
`;

export const ContactFooter = styled.div`
  margin-right: 1.9rem;
  width: calc(35% - 3.8rem);
  margin-right: 0 !important;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const InfoFooter = styled.ul`
  position: relative;
  li {
    display: flex;
    margin-bottom: 1rem;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
    p {
      color: #999;
      &:hover {
        color: #fff;
      }
    }
    span {
      color: #999;
      &:hover {
        color: #fff;
      }
      &:nth-child(1) {
        color: #fff;
        font-size: 1.25rem;
        margin-right: 10px;
      }
    }
  }
`;

export const CopyrightText = styled.div`
  width: 100%;
  background: #181818;
  /* padding: 8px 6.25rem; */
  /* text-align: center; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: #999;
  /* @media (max-width: 991px) {
    padding: 8px 2.5rem;
  } */
  @media (max-width: 991px) {
    padding: 0rem;
  }
`;

/* --------------- END OF FOOTER ---------------- */

/* --------------- INFOBAR ---------------- */
export const InfoBarWrapper = styled.div`
  background: #333;
  /* height: 75vh; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoBarContainer = styled.div`
  width: 700px;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: hidden;

  @media (max-width: 991px) {
    width: 440px;
    justify-content: space-around;
  }
`;

export const InfoBarContent = styled.div`
  p {
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 50px;
  }

  h3 {
    margin: 10px 0 0;
    padding: 0;
    color: #fff;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 600;
  }
`;

export const InfoBarFace = styled.div`
  width: 150px;
  height: 100px;
  transition: 0.5s;
  &:nth-child(1) {
    position: relative;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(50px);

    ${InfoBarContent} {
      opacity: 0.2;
      transition: 0.5;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  &:nth-child(2) {
    position: relative;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.8);
    transform: translateY(-50px);
    /* @media (max-width: 991px) {
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.8);
    } */
  }
`;

export const InfoBarCard = styled.div`
  position: relative;
  &:hover {
    ${InfoBarFace} {
      &:nth-child(1) {
        transform: translateY(0);
        background: #f00;
        ${InfoBarContent} {
          opacity: 1;
        }
      }
      &:nth-child(2) {
        transform: translateY(0);
      }
    }
  }

  /* @media (max-width: 991px) {
    margin-right: 50px;
  } */
`;

/* --------------- END OF INFOBAR ---------------- */
