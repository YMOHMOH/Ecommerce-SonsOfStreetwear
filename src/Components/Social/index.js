import React from "react";
import { Sci } from "../../styled/lib";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Social() {
  return (
    <Sci>
      <li>
        <i className="fa fa-instagram"></i>
      </li>
      <li>
        <i className="fa fa-snapchat"></i>
      </li>
      <li>
        <i className="fa fa-facebook"></i>
      </li>
    </Sci>
  );
}

export default Social;
