import { Link } from "react-router-dom";
import "../../styles/sass/error404.scss";

function Error() {
  return (
    <div className="error">
      <p className="error_Number">404</p>
      <p className="error_Text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error_Link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
export default Error;