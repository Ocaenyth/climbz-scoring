import { Navigate, createBrowserRouter } from "react-router-dom";
import { ClimbersPage } from "./features/climbers/pages/ClimbersPage";
import { RoutesPage } from "./features/routes/pages/RoutesPage";
import { WallsPage } from "./features/walls/pages/WallsPage";

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
