import React from "react";
import Card from "./card";
import logements from "../../datas/logements";
import "../../styles/sass/card.scss";

// Nous pouvons mapper le tableau des datas de logements pour l'afficher le composant Card
function HousesDisplay() {
  return (
    <section className="container">
      <ul className="container_List">
        {logements.map(({ id, title, cover }) => (
          <Card // Card  récupère 3 props,  id ,  title  et  cover
            key={id}
            id={id}
            title={title}
            cover={cover}
          />
        ))}
      </ul>
    </section>
  );
}

export default HousesDisplay;
