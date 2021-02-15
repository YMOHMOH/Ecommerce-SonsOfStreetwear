import React from "react";
import {
  InfoBarContainer,
  InfoBarCard,
  InfoBarFace,
  InfoBarContent,
  InfoBarWrapper,
} from "../../styled/lib";

import delivery from "../../delivery.png";
import exchange from "../../exchange.png";
import payment from "../../credit-card.png";
import clock from "../../clock.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InfoBar() {
  return (
    <InfoBarWrapper>
      <InfoBarContainer>
        <InfoBarCard>
          <InfoBarFace>
            <InfoBarContent>
              <img src={delivery} />
              <h3>Livraison gratuite</h3>
            </InfoBarContent>
          </InfoBarFace>
          <InfoBarFace>
            <InfoBarContent>
              <p>Lorem ipsum dolor sit amet</p>
            </InfoBarContent>
          </InfoBarFace>
        </InfoBarCard>
        <InfoBarCard>
          <InfoBarFace>
            <InfoBarContent>
              <img src={exchange} />
              <h3>Satisfait ou remboursé</h3>
            </InfoBarContent>
          </InfoBarFace>
          <InfoBarFace>
            <InfoBarContent>
              <p>Lorem ipsum dolor sit amet</p>
            </InfoBarContent>
          </InfoBarFace>
        </InfoBarCard>
        <InfoBarCard>
          <InfoBarFace>
            <InfoBarContent>
              <img src={payment} />
              <h3>Paiements securisées</h3>
            </InfoBarContent>
          </InfoBarFace>
          <InfoBarFace>
            <InfoBarContent>
              <p>Lorem ipsum dolor sit amet</p>
            </InfoBarContent>
          </InfoBarFace>
        </InfoBarCard>
        <InfoBarCard>
          <InfoBarFace>
            <InfoBarContent>
              <img src={clock} />
              <h3>Expedition rapide</h3>
            </InfoBarContent>
          </InfoBarFace>
          <InfoBarFace>
            <InfoBarContent>
              <p>Lorem ipsum dolor sit amet</p>
            </InfoBarContent>
          </InfoBarFace>
        </InfoBarCard>
      </InfoBarContainer>
    </InfoBarWrapper>
  );
}

export default InfoBar;
