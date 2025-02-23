import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { AdminPage } from "./features/admin/pages/AdminPage";
import { ClimberContestPage } from "./features/climber/pages/ClimberContestPage";
import { ClimbersAdminPage } from "./features/climber/pages/ClimbersAdminPage";
import { CompetitionCategoriesAdminPage } from "./features/competition-category/pages/CompetitionCategoriesAdminPage";
import { RoutesAdminPage } from "./features/route/pages/RoutesAdminPage";
import { WallsAdminPage } from "./features/wall/pages/WallsAdminPage";

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
    element: <ClimbersAdminPage />,
  },
  {
    path: "/privAdmin/competition-categories",
    element: <CompetitionCategoriesAdminPage />,
  },
  {
    path: "/privAdmin/routes",
    element: <RoutesAdminPage />,
  },
  {
    path: "/privAdmin/walls",
    element: <WallsAdminPage />,
  },
  // 404 redirect
  { path: "*", element: <Navigate to={"/"} replace></Navigate> },
]);
