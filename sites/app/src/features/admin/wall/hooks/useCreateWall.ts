import { fetchApi } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateWall, Wall } from "../dto/Wall";

export const useCreateWall = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newWall: CreateWall) => {
      return fetchApi<Wall[]>("walls", {
        method: "POST",
        json: newWall,
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["walls"],
      });
    },
  });
};
