import React from "react";

import "./Serie.scss";

const Serie = ({title, css}) => {
  return (
  <div className={css}>
      <span>Série</span>
      <h2>{title}</h2>
  </div>
  );

}


export default Serie;