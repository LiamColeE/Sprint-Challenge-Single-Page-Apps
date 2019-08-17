import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import EpisodesCard from "./EpisodesCard";

export default function EpisodesList() {
    const [episodes, setEpisodes] = useState();

    useEffect(() => {
        const getEpisodes = () => {
            axios
                .get('https://rickandmortyapi.com/api/episode/')
                .then(response => {
                    console.log(response);
                    setEpisodes(response.data.results);
                })
                .catch(error => {
                    console.error('Server Error', error);
                });
        }

        getEpisodes();
    }, []);
    if (!episodes) {
        return <div>Loading...</div>
    }
    return (
        <Card.Group>
            {
                episodes.map(episode => (
                        <EpisodesCard episode={episode}/>
                ))
            }
        </Card.Group>
    )
}
