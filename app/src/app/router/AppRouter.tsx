import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { CatalogPage } from "../../pages/CatalogPage";
import { FlavourPage } from "../../pages/FlavourPage";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { ROUTES } from "../../shared/config/routes";

/** One route per Figma-derived screen (see shared/config/routes.ts). */
export function AppRouter() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.catalog} element={<CatalogPage />} />
        <Route path={ROUTES.flavourPattern} element={<FlavourPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
