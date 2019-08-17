import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "semantic-ui-react";

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
    if(!locations){
        return <div>Loading...</div>
    }
    return (
        <div>
            {
                locations.map(location => (
                    <Card>
                        {location.name}
                    </Card>
                ))
            }
        </div>
    )
}
