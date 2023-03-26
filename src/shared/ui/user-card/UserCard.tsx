import { IFormItem } from "../../domain/types";

import styles from "./user-card.module.scss";

export const UserCard: React.FC<IFormItem> = (props) => {
  const fullName = `${props.firstName} ${props.lastName}`;

  return (
    <div className={styles.userCard}>
      <img className={styles.userPhoto} src={props.photoUrl} />

      <div className={styles.fullName}>{fullName}</div>

      <div>
        <span>Birthday: </span>
        <span className={styles.birthday}>{props.birthDate}</span>
      </div>

      <div className={styles.country}>{props.country}</div>
    </div>
  );
};
