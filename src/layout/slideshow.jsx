import React, { useState } from "react";
import next1 from "../images/next.png"
import back from "../images/back.png"
import "../styles/sass/slideshow.scss"

// Composant Slideshow > affiche les images du logement en slider
// Props du slider a afficher
function SlideShow (props) {
  const [current, setCurrent] = useState(0); // State > Index de l'image actuelle


  // SI on est à la dernière slide : current === length - 1
  // => on passe à la première : 0
  // SINON => on passe à la prochaine : current + 1
  const next = () =>  { // Passe a l'image suivante
     setCurrent(current=== props.img.length  - 1 ? 0 : current + 1);
    }
// SI on est à la 1ère slide : current === 0
  // => on retourne à la dernière : length - 1
  // SINON => on va à la précèdente : current - 1
  const prev = () => { // Passe a l'image precedente
    setCurrent(current=== 0? props.img.length  - 1 : current -1);
    }

    return (

<div className='container1'>
       {/* // Affiche l'image actuelle en fonction de la key index  */}

       {props.img.map((picture, i) => {

               return <div key={i}>{i === current && <img  className='container1_images' src={picture} alt='banniere-page-logement'/>}</div>;
        } )}
            

            {/* // Si il n'y a qu'une seul image, on n'affiche seulement l'image */}
            {props.img.length > 1 && (
        <div className="container1_buttons">
          <img src={back} onClick={prev} className="container1_buttons_icon1" alt="Preview icon" />
          
          <img src={next1} onClick={next} className="container1_buttons_icon2" alt="Next icon" />
        </div>
            )}

        {props.img.length > 1 && ( // Condition pour afficher le compteur uniquement s'il y a plus d'une image
        <div className="container1_counter">
          <p>
            {current + 1}/{props.img.length}
          </p>
        </div>
      )}
      </div>
    )
            }
     
      
export default SlideShow;