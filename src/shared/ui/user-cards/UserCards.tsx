import { UserCard } from "../user-card/UserCard";

import type { IFormItem } from "../../domain/types";

import styles from "./user-cards.module.scss";

export type IUserCardsProps = {
  userData: IFormItem[];
};

export const UserCards: React.FC<IUserCardsProps> = (props) => {
  return (
    <div className={styles.userCards}>
      {props.userData.map((it) => (
        <UserCard key={it.id} {...it} />
      ))}
    </div>
  );
};
