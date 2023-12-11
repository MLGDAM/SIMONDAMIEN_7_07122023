import React from "react";
import Card from "../home/Card";
import logements from "../../datas/logements";
import "../../styles/sass/card.scss";

// Nous pouvons mapper le tableau des datas de logements pour l'afficher le composant Card
function HousesDisplay() {
  return (
    <section className="container">
      <ul className="container_List">
        {logements.map(({ id, title, cover }) => (
          <Card // Card ici  récupère 4 props, la key,  id ,  title  et  cover
            key={id} //Les clés aident React à identifier quels éléments d’une liste ont changé, ont été ajoutés ou supprimés et donner une identité stable 
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
// COMPOSANT PARENT de Card qui est l'enfant, CARD SERA L'éxecution de House Display et de la récupération des valeurs props