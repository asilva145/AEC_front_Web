import React from "react";
import  ManagePokemonsHooks  from "./ManagePokemonsHooks"; 
import { AjouterPokemon} from "./AjouterPokemon"; 
import  FormEditer  from "./FormEditerPokemon";
import { PageNotFound } from "./PageNotFound";
import { Route, Switch, Redirect } from "react-router-dom";
import { BoutonAjouterPokemon } from "./BoutonAjouterpokemon";
import { useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BoutonRetourAccueil } from "./BoutonRetourAccueil";

function App() {
  let location = useLocation();
  return (
    <>
    <ToastContainer autoClose={3000} hideProgressBar />
      <Switch>
        <Route path="/" exact component={ManagePokemonsHooks} />
        <Route path="/ajouterPokemon" component={AjouterPokemon} />
        <Route path="/Pokemons/:nom" component={FormEditer} />
        <Route component={PageNotFound} />
      </Switch>
      {(location.pathname !== "/ajouterPokemon" && !location.pathname.startsWith("/pokemons")) && <BoutonAjouterPokemon/> }
      {(location.pathname !== "/") && <BoutonRetourAccueil/> }
      <br></br>
    </>
  );
}

export default App;
