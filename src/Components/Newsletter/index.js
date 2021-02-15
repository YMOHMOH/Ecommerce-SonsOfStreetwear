import React from "react";
import {
  NewsletterWrapper,
  InputBoxNews,
  NewsletterForm,
} from "../../styled/lib";

function Newsletter() {
  return (
    <NewsletterWrapper>
      <NewsletterForm>
        <h2>Souscrire à notre Newsletter</h2>
        <InputBoxNews>
          <input type="text" name="" required="required" />
          <label>Entrer votre nom</label>
        </InputBoxNews>
        <InputBoxNews>
          <input type="text" name="" required="required" />
          <label>Entrer votre adresse email</label>
        </InputBoxNews>
        <input type="submit" value="Inscription" name="" />
      </NewsletterForm>
    </NewsletterWrapper>
  );
}

export default Newsletter;
