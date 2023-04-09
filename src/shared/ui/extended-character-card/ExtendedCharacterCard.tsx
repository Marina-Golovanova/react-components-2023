import { InformationPoint } from "./information-point/InformationPoint";
import type { ICharacter } from "shared/domain/types";

import styles from "./extended-character-card.module.scss";

export const ExtendedCharacterCard: React.FC<ICharacter> = (props) => {
  const informationPoints = [
    {
      title: "Name",
      element: <span>{props.name || "unknown"}</span>,
    },
    {
      title: "Gender",
      element: <span>{props.gender || "unknown"}</span>,
    },
    {
      title: "Race",
      element: <span>{props.race || "unknown"}</span>,
    },
    {
      title: "Birth",
      element: <span>{props.birth || "unknown"}</span>,
    },
    {
      title: "Death",
      element: <span>{props.death || "unknown"}</span>,
    },
    {
      title: "Hair",
      element: <span>{props.hair || "unknown"}</span>,
    },
    {
      title: "Height",
      element: <span>{props.height || "unknown"}</span>,
    },
    {
      title: "Realm",
      element: <span>{props.realm || "unknown"}</span>,
    },
    {
      title: "Spouse",
      element: <span>{props.spouse || "unknown"}</span>,
    },
    {
      title: "wikiUrl",
      element: (
        <a
          className={styles.link}
          href={props.wikiUrl}
          target="_blank"
          rel="noreferrer"
        >
          {props.wikiUrl}
        </a>
      ),
    },
  ];

  return (
    <div className={styles.layout}>
      {informationPoints.map((it) => (
        <InformationPoint {...it} key={it.title} />
      ))}
    </div>
  );
};
