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
        <h2>Subscribe to our Newsletter</h2>
        <InputBoxNews>
          <input type="text" name="" required="required" />
          <label>Enter Your Name</label>
        </InputBoxNews>
        <InputBoxNews>
          <input type="text" name="" required="required" />
          <label>Enter Your Email Address</label>
        </InputBoxNews>
        <input type="submit" value="Subcribe" name="" />
      </NewsletterForm>
    </NewsletterWrapper>
  );
}

export default Newsletter;
