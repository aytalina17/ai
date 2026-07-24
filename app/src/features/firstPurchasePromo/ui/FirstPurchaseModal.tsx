import illustration from "../assets/modal-illustration.svg";
import closeIcon from "../../../shared/icons/icon-close-modal.svg";
import { Button } from "../../../shared/ui/components/Button";
import { IconButton } from "../../../shared/ui/components/IconButton";
import styles from "./FirstPurchaseModal.module.css";

export interface FirstPurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

/** Bottom-sheet promo inviting the user to log their first purchase. */
export function FirstPurchaseModal({ isOpen, onClose, onConfirm }: FirstPurchaseModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="first-purchase-title">
      <div className={styles.sheet}>
        <img src={illustration} alt="" aria-hidden="true" className={styles.illustration} />

        <IconButton
          icon={closeIcon}
          alt="Закрыть окно"
          onClick={onClose}
          variant="surface"
          size={32}
          className={styles.closeButton}
        />

        <div className={styles.content}>
          <p id="first-purchase-title" className={styles.title}>
            Твои первые лапки уже ждут
          </p>
          <p className={styles.description}>
            Прикрепи чек за покупку Лапочки и получи 10 лапок для обмена на призы, события и другие сюрпризы
          </p>
        </div>

        <Button variant="primary" onClick={onConfirm} className={styles.cta}>
          Добавить покупку
        </Button>
      </div>
    </div>
  );
}
