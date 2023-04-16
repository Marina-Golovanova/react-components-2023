import React from "react";
import { CharacterCard } from "../character-card/CharacterCard";

import type { ICharacter } from "../../domain/types";

import styles from "./characters.module.scss";

type ICharactersProps = {
  characters: ICharacter[];
};

export const Characters: React.FC<ICharactersProps> = (props) => {
  return (
    <div className={styles.charactersLayout}>
      {props.characters.map((character) => (
        <CharacterCard {...character} key={character.id} />
      ))}
    </div>
  );
};
