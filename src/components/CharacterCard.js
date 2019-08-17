import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard(props) {
  return (
    <Card>
      <Card.Content>
        <Image src={props.character.image}/>
        <Card.Header>{props.character.name}</Card.Header>
        <Card.Meta>Species: {props.character.species}</Card.Meta>
        <Card.Meta>Status: {props.character.status}</Card.Meta>
        <Card.Meta>Gender: {props.character.gender}</Card.Meta>
      </Card.Content>
    </Card>
  );
}
