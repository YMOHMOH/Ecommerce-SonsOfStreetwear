import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import axios from "axios";
import {
  NewsletterWrapper,
  InputBoxNews,
  NewsletterForm,
} from "../../styled/lib";

function Newsletter({ email, setEmail }) {
  const alert = useAlert();

  const submitHandler = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const {
        data,
      } = await axios.post(
        "https://api-sonsofstreetwear.herokuapp.com/v1/newsletters",
        { email: email }
      );
      // const { data } = await axios.post(
      //   "http://localhost:3100/v1/newsletters",
      //   { email: email }
      // );
      console.log(data.success);
      alert.success("Nous avons bien enregistré votre email");
    } catch (error) {
      console.log(error.response.data.error);
      alert.error(
        "Une erreur est survenue lors de l'envoie : " +
          error.response.data.error
      );
    }
  };

  return (
    <NewsletterWrapper>
      <NewsletterForm>
        <h2>De nouveaux concepts arrivent</h2>
        <h3>Serez-vous les premiers à les découvrir ?</h3>
        {/* <InputBoxNews>
          <input type="text" name="" required="required" value=""/>
          <label>Entrer votre nom</label>
        </InputBoxNews> */}
        <InputBoxNews>
          <input
            type="text"
            required="required"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <label>Entrer votre adresse email</label>
        </InputBoxNews>
        <input type="submit" value="Envoyer" onClick={submitHandler} />
      </NewsletterForm>
    </NewsletterWrapper>
  );
}

export default Newsletter;
