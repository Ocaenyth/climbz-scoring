import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { ClimberContestPage } from "./features/climber/pages/ClimberContestPage";
import { ClimbersPage } from "./features/climber/pages/ClimbersPage";
import { CompetitionCategoriesPage } from "./features/competition-category/pages/CompetitionCategoriesPage";
import { AdminPage } from "./features/pages/AdminPage";
import { RoutesPage } from "./features/route/pages/RoutesPage";
import { WallsPage } from "./features/wall/pages/WallsPage";
import { ZonesPage } from "./features/zone/pages/ZonesPage";

export const router = createBrowserRouter([
  // Public
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/climbers/:climberId",

    element: <ClimberContestPage />,
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
