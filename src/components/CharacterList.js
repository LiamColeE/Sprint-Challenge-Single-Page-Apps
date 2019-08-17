import React, { useEffect, useState } from "react";
import axios from "axios"
import { Card } from "semantic-ui-react";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState();

  useEffect(() => {
      const getCharacters = () => {
          axios
              .get('https://rickandmortyapi.com/api/character/')
              .then(response => {
                  console.log(response);
                  setCharacters(response.data.results);
              })
              .catch(error => {
                  console.error('Server Error', error);
              });
      }

      getCharacters();
  }, []);

  if(!characters){
      return <div>Loading...</div>
  }
  return (
      <Card.Group centered={true}>
          {
              characters.map(character => (
                  <CharacterCard character={character}/>
              ))
          }
      </Card.Group>
  )
}
