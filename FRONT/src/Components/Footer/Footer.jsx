import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <li className="fListItemLeft">
            Contactez-nous !
          </li>
        <ul className="fList">
          
          <li className="fListItemLeft">
            Téléphone: +123456789
          </li>
          <li className="fListItemLeft">
            Email: example@email.com
          </li>
          <li className="fListItemLeft">
            Facebook: facebook.com/exemple
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
