import React from "react";
import { ModalOverlay, ModalWrapper, CloseCart } from "../../styled/lib.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Cart({ cartModal, setCartModal }) {
  return (
    <ModalOverlay modalOpen={cartModal}>
      <ModalWrapper>
        <div>
          <CloseCart
            onClick={() => {
              setCartModal(false);
            }}
          >
            <FontAwesomeIcon icon="window-close" />
          </CloseCart>
        </div>
        <div>a</div>
      </ModalWrapper>
    </ModalOverlay>
  );
}
