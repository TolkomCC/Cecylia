import React, {useEffect, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./Serie.scss";

const Serie = ({ title, css }) => {
  const div = useRef(null)
  useEffect(() => {
   console.log(div.current.scrollLeft)
  });
  return (
    <div ref={div} className={css}>
      <StaticImage  src="../../images/series/Série_Coco2pointzero4.jpg" alt="A dinosaur" placeholder="blurred" layout="fixed" />
    </div>
  );
};

export default Serie;
