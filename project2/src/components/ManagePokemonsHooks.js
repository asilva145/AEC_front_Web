import React, { useState, useEffect } from "react";
import { Pokemon } from "./client";

function ManagePokemonsHooks() {
  const [donneesRecues, setDonneesRecues] = useState([]);

  //Ajout de la gestion des erreurs
  useEffect(() => {
    getPokemon();
  }, [donneesRecues.join(",")]); //Si on enlève le second paramètre, on obtient une boucle infinie.

  async function getPokemon() {
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
        <Pokemon nom={key.name} travail={key.travail} id={key.id} picture={key.id} key={key.name + key.id + key.travail + key.picture}></Pokemon>
      ))}
</div>
      
    
    </div>
  );
}

export default ManagePokemonsHooks;
