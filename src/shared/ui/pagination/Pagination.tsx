import { ArrowLeftIcon } from "../icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";

import styles from "./pagination.module.scss";

export type IPaginationProps = {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
};

export const Pagination: React.FC<IPaginationProps> = (props) => {
  return (
    <div className={styles.pagination}>
      <button
        className={styles.arrowIcon}
        onClick={props.onPrevPage}
        disabled={props.currentPage <= 1}
      >
        <ArrowLeftIcon />
      </button>
      <div>
        {props.currentPage} / {props.totalPages}
      </div>
      <button
        className={styles.arrowIcon}
        onClick={props.onNextPage}
        disabled={props.currentPage >= props.totalPages}
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
};
