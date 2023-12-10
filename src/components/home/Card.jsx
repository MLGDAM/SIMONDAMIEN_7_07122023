import React from "react";
import "../../styles/sass/card.scss";

function Card ({ id, title, cover })  {
  // Ce composant récupère 3 props :  id, title, cover
  return (
    <li key={id} className="card">
      <a href={"/logements/" + id}>
        <figure className="card_figure">
          <img src={cover} alt={title} className="card_figure_img" />
          <figcaption className="card_figure_figcaption">
            <h2 className="card_figure_figcaption_title">{title}</h2>
          </figcaption>
        </figure>
      </a>
    </li>
  );
};

export default Card;
