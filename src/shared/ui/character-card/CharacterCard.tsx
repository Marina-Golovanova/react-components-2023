import React from "react";
import { ICharacter } from "../../domain/types";
import { ExtendedCharacterCard } from "../extended-character-card/ExtendedCharacterCard";
import { Modal } from "../modal/Modal";
import theLordOfRing from "./assets/the-lord-of-ring.jpeg";

import styles from "./character-card.module.scss";

export const CharacterCard: React.FC<ICharacter> = (props) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <div
        className={styles.characterCardLayout}
        title="to learn more"
        onClick={() => setIsModalOpen(true)}
      >
        <img className={styles.cardImage} src={theLordOfRing} />

        <div className={styles.characterCardContent}>
          <div className={styles.name}>{props.name}</div>

          <div>
            Gender: <i>{props.gender}</i>
          </div>
          <div>
            Race: <i>{props.race}</i>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ExtendedCharacterCard {...props} />
      </Modal>
    </>
  );
};
