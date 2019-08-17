import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "semantic-ui-react";
import EpisodesCard from "./EpisodesCard";
import CharacterCard from "./CharacterCard";
import LocationCard from "./LocationCard"

export default function SearchResults(props) {
    const [episodes, setEpisodes] = useState();
    const [characters, setCharacters] = useState();
    const [locations, setLocations] = useState();

    const search = props.match.params.search;

    useEffect(() => {
        const getEpisodes = () => {
            axios
                .get(`https://rickandmortyapi.com/api/episode/?name=${search}`)
                .then(response => {
                    console.log(response);
                    setEpisodes(response.data.results);
                })
                .catch(error => {
                    //console.error('Server Error', error);
                    setEpisodes([]);
                });
        }

        getEpisodes();
    }, [search]);

    useEffect(() => {
        const getlocations = () => {
            axios
                .get(`https://rickandmortyapi.com/api/location/?name=${search}`)
                .then(response => {
                    console.log(response);
                    setLocations(response.data.results);
                })
                .catch(error => {
                    //console.error('Server Error', error);
                    setLocations([]);
                });
        }

        getlocations();
    }, [search]);

    useEffect(() => {
        const getCharacters = () => {
            axios
                .get(`https://rickandmortyapi.com/api/character/?name=${search}`)
                .then(response => {
                    console.log(response);
                    setCharacters(response.data.results);
                })
                .catch(error => {
                    //console.error('Server Error', error);
                    setCharacters([]);
                });
        }

        getCharacters();
    }, [search]);


    if (!episodes || !characters || !locations) {
        return <div>Loading...</div>
    }

    if (episodes == [] && characters == [] && locations == []) {
        return <h1>There were no results :(</h1>
    }

    return (
        <div>
            <h1>Episodes:</h1>
            <Card.Group centered={true}>
                {
                    episodes.map(episode => (
                        <EpisodesCard episode={episode} />
                    ))
                }
            </Card.Group>
            <h1>Characters:</h1>
            <Card.Group centered={true}>
                {
                    characters.map(character => (
                        <CharacterCard character={character} />
                    ))
                }
            </Card.Group >
            <h1>Locations:</h1>
            <Card.Group centered={true}>
                {
                    locations.map(location => (
                        <LocationCard location={location} />
                    ))
                }
            </Card.Group>
        </div>
    )
}