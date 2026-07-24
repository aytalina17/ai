import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchFlavourById, type Flavour } from "../../entities/flavour";
import { Skeleton } from "../../shared/ui/components/Skeleton";
import { ErrorState } from "../../shared/ui/components/ErrorState";
import { IconButton } from "../../shared/ui/components/IconButton";
import { useBackButton, useMainButton, triggerHaptic } from "../../shared/telegram";
import { ROUTES } from "../../shared/config/routes";
import chevronIcon from "../../shared/icons/chevron-back.svg";
import styles from "./FlavourPage.module.css";

type Status = "loading" | "success" | "not-found" | "error";

/**
 * Карточка вкуса — opened from the catalog. Not present as a separate
 * frame in the provided Figma file; built as a logical product-sense
 * extension so cards/chevron lead somewhere — see README "Допущения".
 * Demonstrates the Telegram MainButton hook for the primary action.
 */
export function FlavourPage() {
  const { flavourId } = useParams<{ flavourId: string }>();
  const navigate = useNavigate();
  const [status, setStatus] = useState<Status>("loading");
  const [flavour, setFlavour] = useState<Flavour | null>(null);

  const goBack = () => navigate(ROUTES.catalog);
  useBackButton(goBack);

  const load = () => {
    if (!flavourId) {
      setStatus("not-found");
      return;
    }
    setStatus("loading");
    fetchFlavourById(flavourId)
      .then((result) => {
        setFlavour(result ?? null);
        setStatus(result ? "success" : "not-found");
      })
      .catch(() => setStatus("error"));
  };

  useEffect(load, [flavourId]);

  useMainButton({
    text: "Хочу этот вкус!",
    visible: status === "success",
    onClick: () => triggerHaptic("medium"),
  });

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <IconButton icon={chevronIcon} alt="Назад в каталог" onClick={goBack} variant="surface" />
      </header>

      {status === "loading" ? (
        <div className={styles.body}>
          <Skeleton height={320} radius={24} />
          <Skeleton height={28} width="70%" />
          <Skeleton height={16} />
          <Skeleton height={16} width="90%" />
        </div>
      ) : null}

      {status === "error" ? <ErrorState message="Не удалось загрузить вкус." onRetry={load} /> : null}

      {status === "not-found" ? (
        <ErrorState message="Такого вкуса не нашлось. Возможно, он уже закончился." onRetry={goBack} />
      ) : null}

      {status === "success" && flavour ? (
        <div className={styles.body}>
          <img src={flavour.image} alt={flavour.name} className={styles.image} />
          <h1 className={styles.name}>{flavour.name}</h1>
          <p className={styles.description}>{flavour.description}</p>
        </div>
      ) : null}
    </div>
  );
}
