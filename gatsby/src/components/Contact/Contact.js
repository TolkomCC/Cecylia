import React from "react";

import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact-container">
        <p>Pour échanger</p>
        <link className='link-to-mail' onClick={handleClick}> cyl_illustrations@gmail.com
        </link>
      </div>
  );

  function handleClick(e) {
    e.preventDefault()
    console.log('Accéder à ladresse mail', e)
}

};

export default Contact;