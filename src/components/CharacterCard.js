import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard(props) {
  return (
    <Card>
      <Card.Content>
        <Image src={props.character.image}/>
        <Card.Header>{props.character.name}</Card.Header>
      </Card.Content>
    </Card>
  );
}
