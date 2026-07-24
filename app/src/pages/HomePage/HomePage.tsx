import { Hero } from "../../widgets/Hero";
import { MissionBanner } from "../../widgets/MissionBanner";
import { FlavourCarousel } from "../../widgets/FlavourCarousel";
import { TreasureMap } from "../../widgets/TreasureMap";
import { MomentsGallery } from "../../widgets/MomentsGallery";
import { BottomNavigation } from "../../widgets/BottomNavigation";
import { FirstPurchaseModal, useFirstPurchasePromo } from "../../features/firstPurchasePromo";
import { useBackButton } from "../../shared/telegram";
import styles from "./HomePage.module.css";

/** Home — the "Main" screen from Figma (node 1:124), pixel-perfect. */
export function HomePage() {
  const promo = useFirstPurchasePromo();

  // Root screen: no Telegram BackButton here.
  useBackButton(() => {}, false);

  return (
    <div className={styles.page}>
      <Hero />

      <main className={styles.content}>
        <MissionBanner />
        <FlavourCarousel />
        <TreasureMap />
        <MomentsGallery />
      </main>

      <BottomNavigation />

      <FirstPurchaseModal isOpen={promo.isOpen} onClose={promo.close} onConfirm={promo.confirm} />
    </div>
  );
}
