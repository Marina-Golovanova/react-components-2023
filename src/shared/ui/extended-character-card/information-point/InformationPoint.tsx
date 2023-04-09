import styles from "./information-point.module.scss";

export type IInformationPointProps = {
  title: string;
  element: React.ReactNode;
};

export const InformationPoint: React.FC<IInformationPointProps> = (props) => {
  return (
    <div>
      <div className={styles.informationHeader}>{props.title}</div>
      <div className={styles.informationContent}>{props.element}</div>
    </div>
  );
};
