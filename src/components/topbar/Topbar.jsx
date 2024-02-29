import React from "react";
import "./topbar.css";

export default function Topbar() {
  return (
    <nav>
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
            <img src='https://th.bing.com/th/id/OIP.H5tXRLt1fbqp24_YK9EDWQHaE8?rs=1&pid=ImgDetMain' alt="" className="imgLogo"/>
        </div>
      <ul className="contact">
        <li href='#'>Menu</li>
        <li href='#'>Localização</li>
        <li href='#'>Sobre</li>
        <li href='#'>Contato</li>
      </ul>
        <div className="topRight">
          <button className="btnLogin">
            Login
          </button>
        </div>
      </div>
    </div>
    </nav>
  );
}
