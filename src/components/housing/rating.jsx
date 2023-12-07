// IMPORT
import "../../styles/sass/rating.scss";
import StarActive from "../../images/star.png";
import StarInactive from "../../images/starinactive.png";

// Props : rating (note de 1 à 5)
function Rating({ rating }) {
  const stars = []; // Creer un tableau pour stocker les étoiles
  console.log(stars);
  for (let i = 1; i <= 5; i++) {
    // Boucle pour afficher les étoiles
    if (i <= rating) {
      // Tant que i est inférieur ou égal à la note
      stars.push(
        <img className="Stars" key={i} src={StarActive} alt="star-filled" />
      );
    } else {
      // Sinon on affiche une étoile vide
      stars.push(
        <img className="Stars" key={i} src={StarInactive} alt="star-empty" />
      );
    }
  }

  return <div className="housing_header_hoster_rating">{stars}</div>; // Retourne les etoiles
}
export default Rating;
