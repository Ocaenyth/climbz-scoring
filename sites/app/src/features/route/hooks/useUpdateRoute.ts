import { fetchApi } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Route, UpdateRoute } from "../dto/Route";

export interface UpdateRouteParam extends UpdateRoute {
  id: string;
}

export const useUpdateRoute = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...route }: UpdateRouteParam) => {
      return fetchApi<Route[]>(`routes/${id}`, {
        method: "PATCH",
        json: route,
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["routes"],
      });
    },
  });
};
