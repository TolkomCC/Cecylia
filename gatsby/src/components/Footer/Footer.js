import React from "react";
import "./Footer.scss";
import {Link} from "gatsby";

const Footer = ({pageActive}) => {
  return (
    <div className="footer">
        <div className="page-resume">
        <h1>Toutes <br/> Les {pageActive}</h1>
        </div>

        {/* </Contact> */}

        {/*Les 3 colonnes avec liens*/}
        <div className="footer-content">
            <div className="link-container">
              {/* Column1 */}
              <div  className="col">
                <ul className="list-menu">
                    <Link to='/series'>Séries illustrations</Link>
                
                </ul> 
              </div>

              {/* Column2 */}
              <div  className="col">
                  <ul className="list-menu">
                      <Link to='/illustrations'>Ôde à la création</Link>
                  </ul> 
                </div>

              {/* Column3 */}
               <div  className="col">
                <ul className="list-menu">
                    <Link to='/mentions'>Mentions légales</Link>
                </ul> 
              </div>
            </div>
          </div>
        </div>
  );
};

export default Footer;
