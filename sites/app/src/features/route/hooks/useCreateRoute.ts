import { fetchApi } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateRoute, Route } from "../dto/Route";

export const useCreateRoute = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newRoute: CreateRoute) => {
      return fetchApi<Route[]>("routes", {
        method: "POST",
        json: newRoute,
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["routes"],
      });
    },
  });
};
