import React from "react";

import "./Button.scss";

const Button = ({mail}) => {
  return (
  <a className="link-mail" href={`mailto:${mail}`}>{mail}</a>
  );

}


export default Button;