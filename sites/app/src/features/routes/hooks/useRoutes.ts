import { fetchApi } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { Route } from "../dto/Route";

export const useRoutes = () => {
  return useQuery({
    queryKey: ["routes"],
    queryFn: async () => {
      return fetchApi<Route[]>("routes");
    },
  });
};
