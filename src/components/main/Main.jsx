import React from "react";
import main from "./main.css";

export default function Main() {
  return (
    <div className="main">
      <div className="textTitle">
        Nada é impossível
        <p className="textSub">"Impossible is nothing"</p>
        <p className="textDesc">
          Quem disse que não dá para comprar felicidade,<br/> nunca viu esse sapato
        </p>
      </div>
      <div className="img3d">
        <img
          src="https://www.pngarts.com/files/3/Adidas-Running-Shoes-PNG-Photo.png"
          alt=""
        />
      </div>
      <button className="btnBuy">
        Comprar
      </button>
    </div>
  );
}
