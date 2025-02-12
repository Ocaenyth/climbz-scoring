import { Navigate, createBrowserRouter } from "react-router-dom";
import { ContestManagementPage } from "./components/ContestManagementPage";
import { ContestPage } from "./components/ContestPage";
import { UserContestPage } from "./components/UserContestPage";
import { ClimbersPage } from "./features/climbers/pages/ClimbersPage";
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
    path: "/walls",
    element: <WallsPage />,
  },
  {
    // Contest level
    path: "/contest/:contestUuid",
    element: <ContestPage />,
    // children: [{ path: "user/:userUuid", element: <UserPage /> }],
  },
  {
    // Contest level
    path: "/contest/:contestUuid/user/:userUuid",
    element: <UserContestPage />,
    // children: [{ path: "user/:userUuid", element: <UserPage /> }],
  },

  {
    path: "/management",
    element: <ContestManagementPage />,
  },

  // 404 redirect
  { path: "*", element: <Navigate to={"/"} replace></Navigate> },
]);
