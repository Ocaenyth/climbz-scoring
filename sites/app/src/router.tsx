import { Navigate, createBrowserRouter } from "react-router-dom";
import { AdminPage } from "./features/admin/pages/AdminPage";
import { ClimbersPage } from "./features/climber/pages/ClimbersPage";
import { CompetitionCategoriesPage } from "./features/competition-category/pages/CompetitionCategoriesPage";
import { RoutesPage } from "./features/route/pages/RoutesPage";
import { WallsPage } from "./features/wall/pages/WallsPage";
import { ZonesPage } from "./features/zone/pages/ZonesPage";

export const router = createBrowserRouter([
  // Home
  {
    path: "/",
    element: <ClimbersPage />,
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
