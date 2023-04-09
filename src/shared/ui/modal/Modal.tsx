import React from "react";
import ReactDOM from "react-dom";
import { XMarkIcon } from "../icons/XMarkIcon";

import styles from "./modal.module.scss";

export type IModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Modal: React.FC<React.PropsWithChildren & IModalProps> = (
  props
) => {
  const modalRef = React.useRef<HTMLDivElement>(null);

  const handleOverlayClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const modal = modalRef.current as HTMLElement;

    if (target.contains(modal)) {
      props.onClose();
    }
  };

  return ReactDOM.createPortal(
    <>
      {props.isOpen && (
        <div className={styles.overlay} onClick={handleOverlayClick}>
          <div ref={modalRef} className={styles.modal}>
            <button className={styles.closeButton} onClick={props.onClose}>
              <XMarkIcon />
            </button>
            <div>{props.children}</div>
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal") as HTMLElement
  );
};
