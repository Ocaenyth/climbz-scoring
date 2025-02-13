import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { ClimbersPage } from "./features/admin/climber/pages/ClimbersPage";
import { CompetitionCategoriesPage } from "./features/admin/competition-category/pages/CompetitionCategoriesPage";
import { AdminPage } from "./features/admin/pages/AdminPage";
import { RoutesPage } from "./features/admin/route/pages/RoutesPage";
import { WallsPage } from "./features/admin/wall/pages/WallsPage";
import { ZonesPage } from "./features/admin/zone/pages/ZonesPage";

export const router = createBrowserRouter([
  // Home
  {
    path: "/",
    element: <HomePage />,
  },
  // Admin side
  {
    path: "/privAdmin",
    element: <AdminPage />,
  },
  {
    path: "/privAdmin/climbers",
    element: <ClimbersPage />,
  },
  {
    path: "/privAdmin/competition-categories",
    element: <CompetitionCategoriesPage />,
  },
  {
    path: "/privAdmin/routes",
    element: <RoutesPage />,
  },
  {
    path: "/privAdmin/walls",
    element: <WallsPage />,
  },
  {
    path: "/privAdmin/zones",
    element: <ZonesPage />,
  },
  // 404 redirect
  { path: "*", element: <Navigate to={"/"} replace></Navigate> },
]);
