import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FlavourCard, fetchFlavours, type Flavour } from "../../entities/flavour";
import { Skeleton } from "../../shared/ui/components/Skeleton";
import { EmptyState } from "../../shared/ui/components/EmptyState";
import { ErrorState } from "../../shared/ui/components/ErrorState";
import { ROUTES } from "../../shared/config/routes";
import chevronIcon from "../../shared/icons/chevron-back.svg";
import styles from "./FlavourCarousel.module.css";

type Status = "loading" | "success" | "empty" | "error";

/** "Что попробуем сегодня?" — horizontal scroller of today's flavours. */
export function FlavourCarousel() {
  const [status, setStatus] = useState<Status>("loading");
  const [flavours, setFlavours] = useState<Flavour[]>([]);
  const navigate = useNavigate();

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
    <section className={styles.section} aria-label="Что попробуем сегодня?">
      <div className={styles.header}>
        <h2 className={styles.title}>Что попробуем сегодня?</h2>
        <Link to={ROUTES.catalog} className={styles.allButton} aria-label="Открыть весь каталог вкусов">
          <img src={chevronIcon} alt="" aria-hidden="true" className={styles.chevron} />
        </Link>
      </div>

      {status === "loading" ? (
        <div className={styles.scroller}>
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} width={176.5} height={212} radius={20} />
          ))}
        </div>
      ) : null}

      {status === "error" ? <ErrorState message="Не удалось загрузить вкусы." onRetry={load} /> : null}

      {status === "empty" ? <EmptyState title="Пока нет доступных вкусов" description="Загляни позже — мы обновляем меню каждый день." /> : null}

      {status === "success" ? (
        <div className={styles.scroller}>
          {flavours.map((flavour) => (
            <FlavourCard key={flavour.id} flavour={flavour} onSelect={(f) => navigate(ROUTES.flavour(f.id))} />
          ))}
        </div>
      ) : null}
    </section>
  );
}
