import styles from "./ErrorState.module.css";

export interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({ message = "Что-то пошло не так. Попробуй ещё раз.", onRetry }: ErrorStateProps) {
  return (
    <div className={styles.errorState} role="alert">
      <p className={styles.title}>Упс!</p>
      <p className={styles.message}>{message}</p>
      {onRetry ? (
        <button type="button" className={styles.retryButton} onClick={onRetry}>
          Повторить
        </button>
      ) : null}
    </div>
  );
}
