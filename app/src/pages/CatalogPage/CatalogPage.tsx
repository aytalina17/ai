import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FlavourCard, fetchFlavours, type Flavour } from "../../entities/flavour";
import { Skeleton } from "../../shared/ui/components/Skeleton";
import { EmptyState } from "../../shared/ui/components/EmptyState";
import { ErrorState } from "../../shared/ui/components/ErrorState";
import { IconButton } from "../../shared/ui/components/IconButton";
import { useBackButton } from "../../shared/telegram";
import { ROUTES } from "../../shared/config/routes";
import chevronIcon from "../../shared/icons/chevron-back.svg";
import styles from "./CatalogPage.module.css";

type Status = "loading" | "success" | "empty" | "error";

/**
 * Каталог вкусов — full grid, reached from the Home chevron/cards.
 * Not present as a separate frame in the provided Figma file; built as a
 * logical extension reusing the same design tokens and FlavourCard —
 * see README "Допущения".
 */
export function CatalogPage() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<Status>("loading");
  const [flavours, setFlavours] = useState<Flavour[]>([]);

  const goBack = () => navigate(ROUTES.home);
  useBackButton(goBack);

  const load = () => {
    setStatus("loading");
    fetchFlavours()
      .then((result) => {
        setFlavours(result);
        setStatus(result.length > 0 ? "success" : "empty");
      })
      .catch(() => setStatus("error"));
  };

  useEffect(load, []);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <IconButton
          icon={chevronIcon}
          alt="Назад на главную"
          onClick={goBack}
          variant="surface"
          className={styles.backButton}
        />
        <h1 className={styles.title}>Каталог вкусов</h1>
      </header>

      {status === "loading" ? (
        <div className={styles.grid}>
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} width="100%" height={212} radius={20} />
          ))}
        </div>
      ) : null}

      {status === "error" ? <ErrorState message="Не удалось загрузить каталог вкусов." onRetry={load} /> : null}

      {status === "empty" ? (
        <EmptyState title="Каталог пока пуст" description="Скоро здесь появятся новые вкусы lapochka." />
      ) : null}

      {status === "success" ? (
        <div className={styles.grid}>
          {flavours.map((flavour) => (
            <FlavourCard key={flavour.id} flavour={flavour} onSelect={(f) => navigate(ROUTES.flavour(f.id))} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
