import { fetchApi } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Wall } from "../dto/Wall";

export const useDeleteWall = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      return fetchApi<Wall[]>(`walls/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["walls"],
      });
    },
  });
};
