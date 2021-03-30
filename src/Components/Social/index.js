import React from "react";
import { Sci } from "../../styled/lib";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Social() {
  return (
    <Sci>
      <li>
        <a
          href="http://instagram.com/sonsofstreetwear"
          target="_blank"
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <i className="fa fa-instagram"></i>
        </a>
      </li>
      <li>
        <a
          href="https://facebook.com/sonsofstreetshop"
          target="_blank"
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <i className="fa fa-facebook"></i>
        </a>
      </li>
      <li>
        <a
          href="https://www.snapchat.com/add/sosstreetwear"
          target="_blank"
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <i className="fa fa-snapchat"></i>
        </a>
      </li>
    </Sci>
  );
}

export default Social;
