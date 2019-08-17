import React from "react";
import { Card } from "semantic-ui-react";

export default function EpisodesCard(props) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.episode.name}</Card.Header>
        <Card.Meta></Card.Meta>
      </Card.Content>
    </Card>
  );
}