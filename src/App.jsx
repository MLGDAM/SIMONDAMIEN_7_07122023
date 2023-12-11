
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/Header"
import Home from "./pages/Home";
import About from "./pages/About";
import Fichelogement from "./pages/FicheLogement";
import Error404 from "./pages/Error";


function App() {
  
  return (
    
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} /> 
          <Route path="/logements/:id" element={<Fichelogement />} />
          <Route path="*" element={<Error404 />} />
          </Routes>
      </BrowserRouter>
    
  );
}
export default App;
//  BrowserRouter servira à stocker et à s’abonner au changement de l’URL de la page courante (celle qu’on retrouve dans la barre d’URL).
// Le composant Routes qui va servir à sélectionner le composant enfant correspondant à la location.
// Le composant Route. Ce composant prend de base plusieurs paramètres dont à minima : 
// PATH qui contient l’URL dans notre navigateur qui dirigera vers le composant ;
// ELEMENT qui va permettre de sélectionner le composant à afficher.