import React from "react";
import {
  FooterWrapper,
  FooterContainer,
  AboutUs,
  SciFooter,
  QuickLinks,
  ContactFooter,
  InfoFooter,
  CopyrightText,
} from "../../styled/lib";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <>
      <FooterWrapper>
        <FooterContainer>
          <AboutUs>
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              non felis ac odio posuere viverra. Integer hendrerit sollicitudin
              sapien, ut iaculis diam scelerisque vitae. Nunc at velit ipsum.
              Curabitur venenatis neque nec sapien porta, non sollicitudin magna
              dictum. Vestibulum porta rutrum tortor, a tempor urna fringilla
              sit amet. Ut ligula ante, vestibulum sed diam eget, ultricies
              porta erat. Ut accumsan iaculis egestas. Ut vitae porta dolor.
            </p>
            <SciFooter>
              <li>
                <i class="fa fa-instagram"></i>
              </li>
              <li>
                <i class="fa fa-snapchat"></i>
              </li>
              <li>
                <i class="fa fa-facebook"></i>
              </li>
            </SciFooter>
          </AboutUs>
          <QuickLinks>
            <h2>Quick Links</h2>
            <ul>
              <li>About</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Help</li>
              <li>Terms and Conditions</li>
              <li>Contact</li>
            </ul>
          </QuickLinks>
          <ContactFooter>
            <h2>Contact Info</h2>
            <InfoFooter>
              <li>
                <span>
                  <FontAwesomeIcon icon="map-marker" />
                </span>
                <span>
                  647 Linda Street
                  <br />
                  Phoenixville, PA 19460, <br />
                  USA
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon="phone" />
                </span>
                <p>+1 234 567 8900</p>
                <br />
                <p>+1 234 567 8900</p>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon="envelope" />
                </span>
                <p>test@gmail.com</p>
              </li>
            </InfoFooter>
          </ContactFooter>
        </FooterContainer>
      </FooterWrapper>
      <CopyrightText>
        <p>Copyright @ 2021 Younes MOHMOH. All Rights Reserved.</p>
      </CopyrightText>
    </>
  );
}

export default Footer;
