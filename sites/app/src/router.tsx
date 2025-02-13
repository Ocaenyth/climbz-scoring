import { Navigate, createBrowserRouter } from "react-router-dom";
import { ClimbersPage } from "./features/climber/pages/ClimbersPage";
import { CompetitionCategoriesPage } from "./features/competition-category/pages/CompetitionCategoriesPage";
import { RoutesPage } from "./features/route/pages/RoutesPage";
import { WallsPage } from "./features/wall/pages/WallsPage";

export const router = createBrowserRouter([
  // Home
  {
    path: "/",
    element: <ClimbersPage />,
  },
  {
    path: "/climbers",
    element: <ClimbersPage />,
  },
  {
    path: "/competition-categories",
    element: <CompetitionCategoriesPage />,
  },
  {
    path: "/routes",
    element: <RoutesPage />,
  },
  {
    path: "/walls",
    element: <WallsPage />,
  },
  // 404 redirect
  { path: "*", element: <Navigate to={"/"} replace></Navigate> },
]);
