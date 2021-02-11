import React from "react";
import {
  FooterWrapper,
  FooterContainer,
  AboutUs,
  SciFooter,
  QuickLinks,
} from "../../styled/lib";

function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <AboutUs>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non
            felis ac odio posuere viverra. Integer hendrerit sollicitudin
            sapien, ut iaculis diam scelerisque vitae. Nunc at velit ipsum.
            Curabitur venenatis neque nec sapien porta, non sollicitudin magna
            dictum. Vestibulum porta rutrum tortor, a tempor urna fringilla sit
            amet. Ut ligula ante, vestibulum sed diam eget, ultricies porta
            erat. Ut accumsan iaculis egestas. Ut vitae porta dolor.
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
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;
