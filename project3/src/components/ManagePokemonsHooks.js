import React, { useState, useEffect } from "react";
import { Pokemon } from "./Pokemon";

function ManagePokemonsHooks() {
  const [donneesRecues, setDonneesRecues] = useState([]);

  //Ajout de la gestion des erreurs
  useEffect(() => {
    getPokemons();
  }, [donneesRecues.join(",")]); //Si on enlève le second paramètre, on obtient une boucle infinie.

  async function getPokemons() {
    try {
      const response = await fetch("http://localhost:3001/pokemons");
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div class="container">
  <div classp class="text-center jumbotron">
    <h1>BOTTIN TELEPHONIQUE</h1>
  
  </div>
  {donneesRecues.map((key, i) => (
        <Pokemon nom={key.name} id={key.id} photo={key.id} key={key.name + key.id + key.photo}></Pokemon>
      ))}
</div>
      
    
    </div>
  );
}

export default ManagePokemonsHooks;
