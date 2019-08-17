import React from "react";
import { Card } from "semantic-ui-react";

export default function LocationCard(props) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.location.name}</Card.Header>
        <Card.Meta>Population: {props.location.residents.length}</Card.Meta>
      </Card.Content>
    </Card>
  );
}
