import { useState } from "react"; //nous importons le Hook useState depuis React. Il nous permet d’utiliser un état local dans une fonction composant.
import "../styles/sass/collapse.scss";
import chevrondrop from "../images/chevrondrop.png";

function Collapse(props) {
  const [isOpen, setOpen] = useState(false); // variable d'état en appelant useState qui renvoie la paire de valeur
  // Nous l’initialisons à FALSE en passant FALSE comme seul argument à useState
  // Le second élément renvoyé est une fonction. Elle nous permet de modifier la variable isExpanded, nous l’appellerons donc setExpanded.
  return (
    <div className="collapsibles">
      <div className="collapsibles_container">
        <p key={props.title}>{props.title}</p>

        <button
          // quand l’utilisateur clique, nous appelons setOpen, avec une nouvelle valeur. React rafraîchira le composant Collapse et lui passera la nouvelle valeur différente de l'ancienne.
          className="collapsibles_container_button"
          onClick={() => setOpen(!isOpen)}
        >
          <img
            src={chevrondrop}
            className="collapsibles_icon_image"
            alt="collapse icon"
            style={{ transform: isOpen ? "rotate(45deg)" : "rotate(-135deg)" }}
          ></img>
        </button>
      </div>
      {isOpen && (
        <div className="collapsibles_content" key={props.content}>
          {props.content} 
        </div>
       )}
    </div>
  );
}

export default Collapse;
