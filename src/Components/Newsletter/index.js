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
        <h2>De nouveaux concepts arrivent</h2>
        <h3>Serez-vous les premiers à les découvrir ?</h3>
        <InputBoxNews>
          <input type="text" name="" required="required" />
          <label>Entrer votre nom</label>
        </InputBoxNews>
        <InputBoxNews>
          <input type="text" name="" required="required" />
          <label>Entrer votre adresse email</label>
        </InputBoxNews>
        <input type="submit" value="Envoyer" name="" />
      </NewsletterForm>
    </NewsletterWrapper>
  );
}

export default Newsletter;
