import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import LocationCard from "./LocationCard";

export default function LocationsList() {
    const [locations, setLocations] = useState();

    useEffect(() => {
        const getlocations = () => {
            axios
                .get('https://rickandmortyapi.com/api/location/')
                .then(response => {
                    console.log(response);
                    setLocations(response.data.results);
                })
                .catch(error => {
                    console.error('Server Error', error);
                });
        }

        getlocations();
    }, []);
    if (!locations) {
        return <div>Loading...</div>
    }
    return (
        <Card.Group centered={true}>
            {
                locations.map(location => (
                    // <NavLink to={`location/${location.id}`}>
                    <LocationCard location={location} />
                    // </NavLink>
                ))
            }
        </Card.Group>
    )
}
