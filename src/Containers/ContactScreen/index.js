import React from "react";
import "../../App.css";

import {
  Contact,
  Content,
  Container,
  ContactInfo,
  Box,
  Icon,
  Text,
  ContactForm,
  InputBox,
} from "../../styled/lib";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactScreen({ showMenu, setShowMenu }) {
  return (
    <>
      <Contact>
        <Content>
          <h2>Contacter nous</h2>
          <p>
            Duis feugiat mollis eros, condimentum dapibus quam pulvinar a.
            Quisque sit amet odio vitae neque porttitor imperdiet a et ex.
          </p>
        </Content>
        <Container>
          <ContactInfo>
            <Box>
              <Icon>
                <FontAwesomeIcon icon="map-marker" />
              </Icon>
              <Text>
                <h3>Adresse</h3>
                <p>
                  13 Rue Robert Schumann
                  <br />
                  95600 Eaubonne
                </p>
              </Text>
            </Box>
            <Box>
              <Icon>
                <FontAwesomeIcon icon="phone" />
              </Icon>
              <Text>
                <h3>Téléphone</h3>
                <p>+336.67.49.86.94</p>
              </Text>
            </Box>
            <Box>
              <Icon>
                <FontAwesomeIcon icon="envelope" />
              </Icon>
              <Text>
                <h3>Email</h3>
                <p>sonsofstreetwear@gmail.com</p>
              </Text>
            </Box>
          </ContactInfo>
          <ContactForm>
            <form>
              <h2>Envoyer un message</h2>
              <InputBox>
                <input type="text" name="" required="required"></input>
                <span>Nom complet</span>
              </InputBox>
              <InputBox>
                <input type="text" name="" required="required"></input>
                <span>Email</span>
              </InputBox>
              <InputBox>
                <textarea rows="5" required=" required"></textarea>
                <span>Entrer votre Message...</span>
              </InputBox>
              <InputBox>
                <input type="submit" name="" value="Envoyer"></input>
              </InputBox>
            </form>
          </ContactForm>
        </Container>
      </Contact>
    </>
  );
}

export default ContactScreen;
